import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  EventDetails,
  Home,
  Event,
  Store,
  StoreDetails,
  Settings,
} from '@/pages';
import {useTheme} from 'styled-components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const EventStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Event" component={Event} />
    <Stack.Screen name="EventDetails" component={EventDetails} />
  </Stack.Navigator>
);

const StoreStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Store" component={Store} />
    <Stack.Screen name="StoreDetails" component={StoreDetails} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const AppRoutes = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary.MAIN,
        tabBarActiveBackgroundColor: theme.colors.background.BLACK_500,
        tabBarInactiveBackgroundColor: theme.colors.background.BLACK_500,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventStack}
        options={{
          tabBarLabel: 'Eventos',
          tabBarIcon: ({color, size}) => (
            <Icon name="notification" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreStack}
        options={{
          tabBarLabel: 'Lojas',
          tabBarIcon: ({color, size}) => (
            <Icon name="isv" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Gerais',
          tabBarIcon: ({color, size}) => (
            <Icon name="tool" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const App = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export {AppRoutes};
