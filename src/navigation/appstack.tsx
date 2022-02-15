import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, Home, Clients } from "../screens";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="clients" component={Clients} />
    </Navigator>
  );
};

export default AppStack;
