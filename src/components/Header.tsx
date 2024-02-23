/* eslint-disable react/jsx-max-depth */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import React from 'react';
import SearchBar from './SearchBar';

const Header = () => (
  <Navbar isBordered maxWidth="full">
    <NavbarContent as="div" justify="start">
      <NavbarBrand>
        <Link className="font-logo text-2xl text-inherit text-primary" to="/">
          songbud
        </Link>
      </NavbarBrand>
      <NavbarItem />
    </NavbarContent>
    <NavbarContent as="div" justify="center">
      <SearchBar />
    </NavbarContent>
  </Navbar>
);

export default Header;
