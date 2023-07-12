import { Loader } from '@/components/atom/loader/loader.comp';
import { RouteConst } from '@/constants/routes';
import MainLayout from '@/layouts/MainLayout';
import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PUBLIC_PATHS } from './routes.path';

export default function AuthRoutes({ history }) {
  const renderRoutes = () => {
    const userData = {
      isLogin: true
    };
    const MAPPER_ROUTE = [...PUBLIC_PATHS];
    return (
      <Suspense
        fallback={
          <Box height={200}>
            <Loader />
          </Box>
        }
      >
        <Switch>
          {MAPPER_ROUTE.map(route => {
            if (route.isPrivate && !userData.isLogin) {
              return <Redirect to={RouteConst.HOME_ROUTE} key={route.path} />;
            }
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </Suspense>
    );
  };

  return (
    <BrowserRouter history={history}>
      <MainLayout>{renderRoutes()}</MainLayout>
    </BrowserRouter>
  );
}
