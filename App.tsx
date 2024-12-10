import React from 'react';

import {StatusBar} from 'react-native';

import {SafeArea} from './src/styles';
import {AppProvider} from './src/App.provider';

const App = () => {
  return (
    <SafeArea>
      <StatusBar barStyle="light-content" backgroundColor="#191919" />
      <AppProvider />
    </SafeArea>
  );
};

export default App;
