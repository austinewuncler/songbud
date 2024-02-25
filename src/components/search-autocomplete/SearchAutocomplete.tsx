import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { Track } from '@spotify/web-api-ts-sdk';
import { useNavigate } from '@tanstack/react-router';
import React, { useState } from 'react';
import useSearch from '~/hooks/useSearch';
import SearchAutocompleteItem from './SearchAutocompleteItem';

const SearchAutocomplete = () => {
  const [query, setQuery] = useState('');
  const tracks = useSearch(query);
  const navigate = useNavigate();

  return (
    <Autocomplete
      aria-label="Search"
      items={tracks}
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
      {(track: Track) => {
        const { id, name } = track;

        return (
          <AutocompleteItem key={id} textValue={name}>
            <SearchAutocompleteItem track={track} />
          </AutocompleteItem>
        );
      }}
    </Autocomplete>
  );
};

export default SearchAutocomplete;
