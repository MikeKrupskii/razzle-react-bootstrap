import React from "react";
// import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'

class Navigation extends React.Component {
  // state = {
  //   isOpen: false
  // };

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
        <AppBar position="static" color="black" width="100%">
        
          <ToolBar>
            <Typography variant="title" style={{ flex: 1, color:"#aaa" }}>Meeting Room Schedule</Typography>
            <img src={require("../../assets/images/mhs_logo.png")} style={{ height: undefined, width: undefined}} resizeMode="contain" alt="MHS Logo"/>
          
          </ToolBar>
        </AppBar>

      </div>


    );
  }
}

export default Navigation;
