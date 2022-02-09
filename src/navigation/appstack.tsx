import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, Home } from '../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
    </Navigator>
  );
};

export default AppStack;
