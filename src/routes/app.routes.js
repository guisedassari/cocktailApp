import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Categories from '../screens/Categories/index';
import DrinksList from '../screens/DrinksList';
import DrinkDetails from '../screens/DrinkDetails';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  const size = useSelector((state) => state.Drinks.length);

  return (
    <AppStack.Navigator initialRouteName="Categories">
      <AppStack.Screen
        options={{
          title: 'Categorias',
          headerTitleStyle: {
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: '#ecae13',
          },
        }}
        name="Categories"
        component={Categories}
      />
      <AppStack.Screen
        options={{
          title: `Lista de Bebidas - (${size})`,
          headerTitleStyle: {
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: '#ecae13',
          },
          headerTintColor: '#fff',
        }}
        name="DrinksList"
        component={DrinksList}
      />
      <AppStack.Screen
        options={{
          title: 'Detalhes da Bebida',
          headerTitleStyle: {
            fontSize: 20,
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: '#ecae13',
          },
          headerTintColor: '#fff',
        }}
        name="DrinkDetails"
        component={DrinkDetails}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
