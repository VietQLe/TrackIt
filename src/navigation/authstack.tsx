import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signup" component={SignUp} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;
