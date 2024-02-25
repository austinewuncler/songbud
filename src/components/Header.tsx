/* eslint-disable react/jsx-max-depth */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import ProfileMenu from './ProfileMenu';
import ThemeSwitch from './ThemeSwitch';
import { SearchAutocomplete } from './search-autocomplete';

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
      <Suspense>
        <SearchAutocomplete />
      </Suspense>
    </NavbarContent>
    <NavbarContent as="div" className="!grow-0" justify="end">
      <ThemeSwitch />
      <ProfileMenu />
    </NavbarContent>
  </Navbar>
);

export default Header;
