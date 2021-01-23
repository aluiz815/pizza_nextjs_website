import React from 'react';
import LinkComponent from '../Link';
import { Nav,NavLink } from './styles';

function Navbar() {
  return (
    <Nav>
      <LinkComponent href="/">
        <NavLink>
          About
        </NavLink>  
      </LinkComponent>
    </Nav>
  );
}

export default Navbar;