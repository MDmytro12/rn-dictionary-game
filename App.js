import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	MenuScreen,
	ProfileScreen,
	LearningChooseLvlScreen,
	AboutAppScreen,
	VocabularySreen,
	AddWordScreen,
	EditWordScreen,
	ContactUsScreen,
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
							fontSize: 40,
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
					name="Contact"
					component={ContactUsScreen}
					options={{
						title: 'Contact us',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 30,
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
					name="Profile"
					component={ProfileScreen}
					options={{
						title: 'My profile',
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontSize: 30,
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
					name="Edit"
					component={EditWordScreen}
					options={{
						title: 'Edit words',
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
				<Stack.Screen
					name="Vocabulary"
					component={VocabularySreen}
					options={{
						title: 'Vocabulary',
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
				<Stack.Screen
					name="AddWord"
					component={AddWordScreen}
					options={{
						title: 'Add new word',
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
