/* eslint-disable react/jsx-max-depth */
import { Avatar } from '@nextui-org/react';
import { Track } from '@spotify/web-api-ts-sdk';
import React from 'react';
import { formatDuration } from '~/utils';

interface Props {
  readonly track: Track;
}

const SearchAutocompleteItem = ({
  track: {
    album: { images },
    artists,
    duration_ms: durationMs,
    explicit,
    name,
  },
}: Props) => (
  <div className="flex gap-2">
    <Avatar alt={name} radius="none" size="md" src={images[0]?.url ?? ''} />
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-end justify-between gap-1">
        <span className="flex-1 truncate text-small">{name}</span>
        <span className="font-mono text-tiny font-extralight">
          {formatDuration(durationMs)}
        </span>
      </div>
      <div className="flex items-end gap-1 text-tiny">
        {explicit ?
          <span className="font-semibold text-secondary">E</span>
        : null}
        <span className="truncate text-default-400">
          {artists.map((artist) => artist.name).join(', ')}
        </span>
      </div>
    </div>
  </div>
);

export default SearchAutocompleteItem;
