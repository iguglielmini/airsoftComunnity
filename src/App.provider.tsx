import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import Routes from '@/routes';
import {theme} from '@/styles';
import {AuthProvider} from '@/hooks';

const AppProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes>{children}</Routes>
      </AuthProvider>
    </ThemeProvider>
  );
};

export {AppProvider};
