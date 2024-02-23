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
  <Navbar isBordered maxWidth="lg">
    <NavbarContent as="div" className="!grow-0" justify="start">
      <NavbarBrand>
        <Link className="font-logo text-2xl text-inherit text-primary" to="/">
          songbud
        </Link>
      </NavbarBrand>
      <NavbarItem />
    </NavbarContent>
    <NavbarContent as="div" className="max-w-lg grow" justify="center">
      <SearchBar />
    </NavbarContent>
  </Navbar>
);

export default Header;
