import React from 'react';
import LinkComponent from '../Link';
import { Bars, Nav,NavIcon,NavLink } from './styles';

function Navbar({toggle}) {
  return (
    <Nav>
      <LinkComponent href="/">
        <NavLink>
          Pizza
        </NavLink>  
      </LinkComponent>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars/>
      </NavIcon>
    </Nav>
  );
}

export default Navbar;