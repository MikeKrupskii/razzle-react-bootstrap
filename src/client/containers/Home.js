import React from "react";
import { Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptate exercitationem consequuntur, debitis quisquam dolorum,
              quae esse blanditiis delectus fuga voluptatem beatae, similique
              doloremque nulla animi nisi id maiores. Eius.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptate exercitationem consequuntur, debitis quisquam dolorum,
              quae esse blanditiis delectus fuga voluptatem beatae, similique
              doloremque nulla animi nisi id maiores. Eius.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
