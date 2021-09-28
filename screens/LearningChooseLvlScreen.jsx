import React, { useLayoutEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuButton } from '../components';
import db from '../db/database';
import Lvl_1_StartScreen from './Lvl_1_StartScreen';
import Lvl_1_TemplateScreen from './Lvl_1_TemplateScreen';
import Lvl_1_FinishScreen from './Lvl_1_FinishScreen';
import LChooseScreen from './LChooseScreen';

import L_2_TemplateScreen from './L_2_TemplateScreen';
import L_2_FinishScreen from './L_2_FinishScreen';

import L_3_TemplateScreen from './L_3_TemplateScreen';
import L_3_CorrectScreen from './L_3_CorrectScreen';
import L_3_WrongScreen from './L_3_WrongScreen';
import L_3_RightAnswerScreen from './L_3_RightAnswer';
import L_3_FinishScreen from './L_3_FinishScreen';

const Stack = createNativeStackNavigator();

const LearningChooseLvlScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton
					color={'white'}
					onPress={() => navigation.navigate('Menu')}
				/>
			),
		});
	}, [navigation]);

	return (
		<Stack.Navigator initialRouteName="LChoose">
			<Stack.Screen
				name="L_3_Template"
				component={L_3_TemplateScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_3_Finish"
				component={L_3_FinishScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_3_RA"
				component={L_3_RightAnswerScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_3_Wrong"
				component={L_3_WrongScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_3_Correct"
				component={L_3_CorrectScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="LChoose"
				component={LChooseScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_2_Finish"
				component={L_2_FinishScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_2_Template"
				component={L_2_TemplateScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_1_Start"
				component={Lvl_1_StartScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_1_Template"
				component={Lvl_1_TemplateScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="L_1_Finish"
				component={Lvl_1_FinishScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default LearningChooseLvlScreen;
