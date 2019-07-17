import React from "react";
import { Route, Switch, withRouter } from "react-router-dom/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";


// Containers
import Home from "./containers/Home";
import Navigation from "./components/Navigation";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
