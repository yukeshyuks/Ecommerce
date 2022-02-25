/* eslint-disable no-undef */
import React from 'react';

//use styled components for styling which is imported from miniNavbar.styled

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './MiniNavbar.styled';

//Mininavabar is present under the navbar which consists the list of subcategories

const MiniNavbar = () => {
  return (
    <> 
     {/* Nav, Navlink and Navmenu are styles which are imported from mininavbar.styled.js (styled components)  */}
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('')}
           alt='logo' />
        </NavLink> */}
        <Bars />
    {/* consists of the list of subcategories */}
        <NavMenu>
    {/* routes to phones page */}
          <NavLink 
          to='/phones' activeStyle>
            Mobile phones
          </NavLink>
    
      {/* routes to furtinures page */}
          <NavLink to='/furtinures' activeStyle>
            Furtinures
          </NavLink>

      {/* routes to laptops page */}
          <NavLink to='/laptops' activeStyle>
            Laptops
          </NavLink>

      {/* routes to accessories page */}
          <NavLink to='/accessories' activeStyle>
            Accessories
          </NavLink>

      {/* routes to cameras page */}
          <NavLink to='/cameras' activeStyle>
            Cameras and Lens
          </NavLink>

      {/* routes to cycle page */}
          <NavLink to='/cycle' activeStyle>
            Bicycle
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default MiniNavbar;
