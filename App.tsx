import React from 'react';

import { SafeAreaView, StatusBar } from 'react-native';

import {SafeArea} from './src/styles'
import {AppProvider} from './src/App.provider'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppProvider />
    </SafeAreaView>
  );
};

export default App;
