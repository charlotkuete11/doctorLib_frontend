/* eslint-disable prettier/prettier */
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import SearchScreen from './src/screens/search';
import Results from './src/screens/results';
import DetailScreen from './src/screens/details';
import RDV from './src/screens/rdv';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{
          headerShown: false,
        }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          options={{
            headerShown: false,
          }}
          name="Search" 
          component={SearchScreen} 
        />
        <Stack.Screen name="Search Result" component={Results} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Prendre rendez-vous" component={RDV} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;