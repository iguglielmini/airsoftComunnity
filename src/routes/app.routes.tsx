import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export {AppRoutes};
