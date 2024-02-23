/* eslint-disable react/jsx-max-depth */
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import React from 'react';
import { currentUser } from '~/spotify/api';

const ProfileMenu = () => {
  const { data } = useQuery({
    queryFn: () => currentUser.profile(),
    queryKey: ['current user profile'],
  });
  const navigate = useNavigate();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          className="transition-transform"
          color="secondary"
          isBordered
          name={data?.display_name ?? ''}
          size="sm"
          src={data?.images[0]?.url ?? ''}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Profile Actions"
        onAction={(key) => {
          if (key === 'profile') void navigate({ to: '/profile' });
        }}
        variant="flat"
      >
        <DropdownItem className="h-14 gap-2" key="profile" textValue="profile">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{data?.display_name}</p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
