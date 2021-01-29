import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => (
  <Nav>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/details">Details</NavLink>
    </NavItem>

  </Nav>
);

export default Header;
