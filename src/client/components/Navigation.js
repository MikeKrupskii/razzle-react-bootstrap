import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap";

class Navigation extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <Navbar style={{ backgroundColor: "royalblue" }} dark expand="sm">
        <NavbarBrand style={{ color: "white" }}>Navigation</NavbarBrand>
        <NavbarToggler
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavLink exact className="nav-link" to={"/"}>
                Home
              </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
