import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	MenuScreen,
	ProfileScreen,
	LearningChooseLvlScreen,
	AboutAppScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Menu">
				<Stack.Screen
					name="Menu"
					component={MenuScreen}
					options={{
						title: 'Menu',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 27,
							fontWeight: 'bold',
						},
						headerStyle: {
							backgroundColor: '#D18EF5',
						},
						headerTitleAlign: 'center',
						headerShadowVisible: false,
					}}
				/>
				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
					options={{
						title: 'My profile',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 27,
							fontWeight: 'bold',
						},
						headerStyle: {
							backgroundColor: 'black',
						},
						headerTitleAlign: 'center',
						headerShadowVisible: false,
					}}
				/>
				<Stack.Screen
					name="Learning"
					component={LearningChooseLvlScreen}
					options={{
						title: 'Learning',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 27,
							fontWeight: 'bold',
						},
						headerStyle: {
							backgroundColor: 'black',
						},
						headerTitleAlign: 'center',
						headerShadowVisible: false,
					}}
				/>
				<Stack.Screen
					name="About"
					component={AboutAppScreen}
					options={{
						title: 'About Application',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 24,
							fontWeight: 'bold',
						},
						headerStyle: {
							backgroundColor: 'black',
						},
						headerTitleAlign: 'center',
						headerShadowVisible: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
