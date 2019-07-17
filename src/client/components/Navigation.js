import React from "react";
// import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   Nav,
// } from "reactstrap";

class Navigation extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      // <Navbar style={{ backgroundColor: "royalblue" }} dark expand="sm">
      //   <NavbarBrand style={{ color: "white" }}>Navigation</NavbarBrand>
      //   <NavbarToggler
      //     onClick={() => this.setState({ isOpen: !this.state.isOpen })}
      //   />
      //   <Collapse isOpen={this.state.isOpen} navbar>
      //     <Nav className="ml-auto" navbar>
      //         <NavLink exact className="nav-link" to={"/"}>
      //           Home
      //         </NavLink>
      //     </Nav>
      //   </Collapse>
      // </Navbar>
      <div>
        <AppBar position="static">
          <ToolBar>
            <Typography variant="title" color="inherit">Meeting Room Schedule</Typography>
          </ToolBar>
        </AppBar>

      </div>


    );
  }
}

export default Navigation;
