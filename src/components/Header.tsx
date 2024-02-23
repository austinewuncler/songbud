import { Navbar, NavbarBrand } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import React from 'react';

const Header = () => (
  <Navbar isBordered maxWidth="full">
    <NavbarBrand>
      <Link className="text-2xl text-inherit text-primary" to="/">
        songbud
      </Link>
    </NavbarBrand>
  </Navbar>
);

export default Header;
