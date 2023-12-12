import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {EventDetails, Home, Event, Store, StoreDetails} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="Event" component={Event} />
      <Screen name="EventDetails" component={EventDetails} />
      <Screen name="Store" component={Store} />
      <Screen name="StoreDetails" component={StoreDetails} />
    </Navigator>
  );
};

export {AppRoutes};
