import React from 'react';

import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {AuthProvider} from './hooks';
import {SafeArea, theme} from './styles';
import Routes from './routes';

const Providers: React.FC<React.PropsWithChildren> = ({children}) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Routes>{children}</Routes>
    </AuthProvider>
  </ThemeProvider>
);

const App: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <SafeArea>
      <StatusBar barStyle="dark-content" backgroundColor="#131313" />
      <Providers>{children}</Providers>
    </SafeArea>
  );
};

export default App;
