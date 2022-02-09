import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen name="Sign Up" component={SignUp} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;
