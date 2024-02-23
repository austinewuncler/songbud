/* eslint-disable react/jsx-max-depth */
import { Autocomplete, AutocompleteItem, Avatar } from '@nextui-org/react';
import { Track } from '@spotify/web-api-ts-sdk';
import { useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import useSearch from '~/hooks/useSearch';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading } = useSearch(query);
  const navigate = useNavigate();

  return (
    <Autocomplete
      aria-label="Search"
      isLoading={isLoading}
      items={data?.items ?? []}
      menuTrigger="input"
      onInputChange={(value) => {
        setQuery(value);
      }}
      onSelectionChange={(key) => {
        void navigate({
          params: { trackId: key.toString() },
          to: '/tracks/$trackId',
        });
      }}
      placeholder="Search"
      size="sm"
      startContent={
        <span
          className="icon-[heroicons--magnifying-glass-solid]"
          style={{ height: '1.5rem', width: '1.5rem' }}
        />
      }
    >
      {({ album, artists, id, name }: Track) => (
        <AutocompleteItem key={id} textValue={name}>
          <div className="flex items-center gap-2">
            <Avatar
              className="shrink-0"
              radius="none"
              src={album.images[0]?.url ?? ''}
            />
            <div className="flex flex-col">
              <span className="text-small">{name}</span>
              <span className="text-tiny text-default-400">
                {artists.map((artist) => artist.name).join(', ')}
              </span>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default SearchBar;
