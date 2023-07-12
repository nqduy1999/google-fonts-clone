import { RouteConst } from '@/constants/routes';
import { loadable } from '@/utils/loadable.util';
import { LazyExoticComponent } from 'react';

export interface Route {
  name: string;
  path: string;
  component: React.FC | LazyExoticComponent<any>;
  exact: boolean;
  isNavbar: boolean;
  isPrivate: boolean;
}

export const PUBLIC_PATHS: Route[] = [
  {
    name: 'Home',
    path: RouteConst.HOME_ROUTE,
    component: loadable(() => import('@/pages/HomePage/home.page')),
    exact: true,
    isNavbar: false,
    isPrivate: false
  }
];
