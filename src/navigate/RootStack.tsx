import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from '../screens/Products';
import DetailProductScreen from '../screens/DetailProduct';
import CreateProduct from '../screens/CreateProduct';
import {TakeImageScreen} from '../components/takeImage';

const Stack = createNativeStackNavigator();

const RootStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Product'} component={ProductsScreen} />
        <Stack.Screen name={'DetailProduct'} component={DetailProductScreen} />
        <Stack.Screen name={'CreateProduct'} component={CreateProduct} />
        <Stack.Screen name={'TakeImage'} component={TakeImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
