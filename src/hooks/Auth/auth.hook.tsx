import React, {createContext, useContext, useState} from 'react';

import {IAuthData} from '@/types';

const AuthContext = createContext<IAuthData>({} as IAuthData);

const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{logged}}>{children}</AuthContext.Provider>
  );
};

function useAuth(): IAuthData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with AuthProvider');
  }

  return context;
}

export {AuthProvider, useAuth};
