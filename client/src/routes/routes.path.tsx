import { RouteConst } from '@/constants/routes';
import { RouteObject } from 'react-router-dom';

// import { loadable } from '@/utils/loadable.util';
import React from 'react';
import { loadable } from '@/utils/loadable.util';

const HomePage = loadable(() => import('@/pages/HomePage/home.page'));

const SnipperPage = loadable(
  () => import('@/pages/FontDetailPage/font-detail.page')
);

export const PUBLIC_PATHS: RouteObject[] = [
  {
    path: RouteConst.HOME_ROUTE,
    element: <HomePage />
  },
  {
    path: RouteConst.SNIPER_ROUTE,
    element: <SnipperPage />
  }
];
