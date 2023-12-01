import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '@/hooks';
import {AppRoutes} from './app.routes';
import {HomeRoutes} from './home.routes';

const Routes: React.FC<React.PropsWithChildren> = () => {
  const {logged} = useAuth();

  console.log('xolinha', logged);
  return (
    <NavigationContainer>
      {logged && <AppRoutes />}
      {!logged && <HomeRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
