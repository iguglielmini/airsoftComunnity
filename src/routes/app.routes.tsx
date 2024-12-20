import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  EventDetails,
  Home,
  Event,
  Store,
  StoreDetails,
  Profile,
  CouponPage,
  MaintenancePage,
} from '@/pages';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="Event" component={Event} />
      <Screen name="Profile" component={Profile} />
      <Screen name="EventDetails" component={EventDetails} />
      <Screen name="Store" component={Store} />
      <Screen name="StoreDetails" component={StoreDetails} />
      <Screen name="Coupon" component={CouponPage} />
      <Screen name="Maintenance" component={MaintenancePage} />
    </Navigator>
  );
};

export {AppRoutes};
