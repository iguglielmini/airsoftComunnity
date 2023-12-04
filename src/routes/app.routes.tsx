import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {EventDetails, Home} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="EventDetails" component={EventDetails} />
    </Navigator>
  );
};

export {AppRoutes};
