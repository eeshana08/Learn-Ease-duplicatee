import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import Adhd from './screens/adhd';
import Dyscalculia from './screens/dyscalculia';
import Dyslexia from './screens/dyslexia';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dyslexia" component={Dyslexia} />
        <Stack.Screen name="Dyscalculia" component={Dyscalculia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
