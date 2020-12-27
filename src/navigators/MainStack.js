import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

import HomeScreen from '../../src/screens/HomeScreen';
import AddressScreen from '../../src/screens/AddressScreen';
import ImovelScreen from '../../src/screens/ImovelScreen';
import WelcomeScreen from '../../src/screens/WelcomeScreen';

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen component={WelcomeScreen} name="Welcome" />
      <MainStack.Screen component={HomeScreen} name="Home" />
      <MainStack.Screen component={AddressScreen} name="Address" />
      <MainStack.Screen component={ImovelScreen} name="Imovel" />
    </MainStack.Navigator>
  );
};
