import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, Register} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};

export {HomeRoutes};
