import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, MapScreen} from '../Screens';
import {initAPIConfig} from '../Services';

const Stack = createStackNavigator();

const AppStack = () => {
  initAPIConfig({isLoggedIn: false, authToken: null});
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
