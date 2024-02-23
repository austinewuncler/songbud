/* eslint-disable react/jsx-max-depth */
import { Avatar, Chip } from '@nextui-org/react';
import { Track } from '@spotify/web-api-ts-sdk';
import React from 'react';
import { formatDuration } from '~/utils';

interface Props {
  readonly track: Pick<Track, 'album' | 'artists' | 'duration_ms' | 'name'>;
}

const SearchAutocompleteItem = ({
  track: { album, artists, duration_ms: durationMs, name },
}: Props) => (
  <div className="flex items-center gap-2">
    <Avatar
      className="shrink-0"
      radius="none"
      src={album.images[0]?.url ?? ''}
    />
    <div className="flex grow flex-col">
      <span className="text-small">{name}</span>
      <div className="flex justify-between">
        <span className="text-tiny text-default-400">
          {artists.map((artist) => artist.name).join(', ')}
        </span>
        <Chip className="w-11" color="secondary" radius="sm" size="sm">
          {formatDuration(durationMs)}
        </Chip>
      </div>
    </div>
  </div>
);

export default SearchAutocompleteItem;
