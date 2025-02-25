import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DenunciaScreen from './components/DenunciaScreen';
import ForumScreen from './components/ForumScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Denuncia" component={DenunciaScreen} />
        <Stack.Screen name="Forum" component={ForumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}