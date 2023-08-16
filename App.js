import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Components/HomeComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {headerStyles,  headerTitleStyle } from './src/Styles/Style'; 
import MovieDetails from './src/Components/MovieDetails';


const Stack = createNativeStackNavigator();


const App =()=> {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerTitleStyle}>
        <Stack.Screen name="Home" component={Home} options={headerStyles}/>
        <Stack.Screen name="movieDetails" component={MovieDetails} options={headerStyles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
