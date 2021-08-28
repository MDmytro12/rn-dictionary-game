import React from 'react';
import styled from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu"> 
        <Stack.Screen 
          name="Menu" 
          component={MenuScreen}  
          options={
            {
              title: 'Menu' ,
              headerTintColor: "#fff" ,
              headerTitleStyle: {
                fontSize: 27,
                fontWeight: 'bold' 
              } , 
              headerStyle: { 
                backgroundColor: '#D18EF5'
              } ,
              headerTitleAlign: 'center' ,
              headerShadowVisible: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;