import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from '../screens/Products';

const Stack = createNativeStackNavigator();

const RootStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Product'} component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
