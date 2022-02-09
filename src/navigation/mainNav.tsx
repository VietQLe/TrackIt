import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../constants/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppStack from './appstack';
import AuthStack from './authstack';

const MainNav = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      //maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  return (
    <NavigationContainer>
      {user != null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
