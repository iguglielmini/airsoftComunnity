import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Forgot, Login, Register} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Forgot" component={Forgot} />
    </Navigator>
  );
};

export {HomeRoutes};
