/* eslint-disable no-unused-vars */
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbar.styled";

//components are imported from the navbar.styled.js file
const logout = () => {
  window.sessionStorage.clear();
  window.location.href = "/";
};

const Navbar = () => {
  return (
    <>
      {/* Nav component is imported from the Navbar.styled.js */}
      <Nav>
        {/* <NavLink to='/'>
          <img src="./FMlogo.png" alt='logo' />
        </NavLink> */}

        {/* Nav component is imported from the Navbar.styled.js */}
        <Bars />

        {/* NavLink component is imported from the Navbar.styled.js */}
        <NavLink style={{ color: "WHITE" }} to="/" activeStyle>
          <h2>Rent Site</h2>
        </NavLink>

        {/* NavMenu component is imported from the Navbar.styled.js */}
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">SIGN IN</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/" onClick={logout}>
              LOG OUT
            </NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/profiledashboard">PROFILE</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
