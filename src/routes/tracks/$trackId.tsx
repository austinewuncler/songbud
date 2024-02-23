import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

const Track = () => <div>Track</div>;

export const Route = createFileRoute('/tracks/$trackId')({
  component: Track,
});
