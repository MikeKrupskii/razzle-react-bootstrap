// Server side render imports
import App from "../client/App";
import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import configureStore from "../client/redux/store/configureStore";

// Express
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: process.env.RAZZLE_SESSION_SECRET }));

// App Render
app
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const store = configureStore({});
    const context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>Welcome to Razzle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ""
            }
            ${
              process.env.NODE_ENV === "production"
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>`
      );
    }
  });

export default app;
