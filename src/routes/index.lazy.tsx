import { createLazyFileRoute } from '@tanstack/react-router';
import React from 'react';

const Index = () => <div>Index</div>;

export const Route = createLazyFileRoute('/')({ component: Index });
