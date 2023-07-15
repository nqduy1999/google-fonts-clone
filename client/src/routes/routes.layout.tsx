import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { PUBLIC_PATHS } from './routes.path';

export default function AuthRoutes() {
  const routing = useRoutes(PUBLIC_PATHS);
  return <Suspense>{routing}</Suspense>;
}
