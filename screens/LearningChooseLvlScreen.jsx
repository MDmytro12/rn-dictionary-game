import React, { useLayoutEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuButton } from '../components';
import db from '../db/database';
import Lvl_1_StartScreen from './Lvl_1_StartScreen';
import Lvl_1_TemplateScreen from './Lvl_1_TemplateScreen';
import Lvl_1_FinishScreen from './Lvl_1_FinishScreen';

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
				name="LChoose"
				component={LChooseScreen}
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

const LChooseScreen = ({ navigation }) => {
	const [buttonStyle, setButtonStyle] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
	});

	return (
		<>
			<LCContainer>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 1: true });
							db.find({ path: 'lvl_1' }, (err, newDocs) => {
								console.log(newDocs);
								navigation.navigate('L_1_Start', newDocs);
							});
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 1: false });
						}}
						style={
							buttonStyle['1']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#BBCAFE' }
						}
					>
						<LvlButtonName>Level 1</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<LvlIndicator>
							<LvlNumberContainer style={{ borderLeftWidth: 0 }}>
								<LvlNumber>1</LvlNumber>
							</LvlNumberContainer>
							<LvlNumberContainer style={{ backgroundColor: 'white' }}>
								<LvlNumber>2</LvlNumber>
							</LvlNumberContainer>
							<LvlNumberContainer style={{ backgroundColor: 'white' }}>
								<LvlNumber>3</LvlNumber>
							</LvlNumberContainer>
							<LvlNumberContainer style={{ backgroundColor: 'white' }}>
								<LvlNumber>4</LvlNumber>
							</LvlNumberContainer>
						</LvlIndicator>
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 2: true });
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 2: false });
						}}
						style={
							buttonStyle['2']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#D8FFCB' }
						}
					>
						<LvlButtonName>Level 2</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<MaterialIcons name="lock" size={24} color="black" />
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 3: true });
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 3: false });
						}}
						style={
							buttonStyle['3']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#FFFDCB' }
						}
					>
						<LvlButtonName>Level 3</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<MaterialIcons name="lock" size={24} color="black" />
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 4: true });
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 4: false });
						}}
						style={
							buttonStyle['4']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#FEBBEB' }
						}
					>
						<LvlButtonName>Level 4</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<MaterialIcons name="lock" size={24} color="black" />
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 5: true });
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 5: false });
						}}
						style={
							buttonStyle['5']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#E890FF' }
						}
					>
						<LvlButtonName>Level 5</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<MaterialIcons name="lock" size={24} color="black" />
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 6: true });
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 6: false });
						}}
						style={
							buttonStyle['6']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#E6FFFF' }
						}
					>
						<LvlButtonName>Level 6</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<MaterialIcons name="lock" size={24} color="black" />
					</LvlIndicatorContainer>
				</LvlRow>
			</LCContainer>
		</>
	);
};

const LvlNumber = styled.Text`
	font-weight: 700;
	font-size: 16px;
	width: 100%;
	text-align: center;
`;

const LvlNumberContainer = styled.View`
	background-color: #fff732;
	width: 40px;
	border-left-width: 2px;
	border-left-color: black;
`;

const LvlIndicator = styled.View`
	display: flex;
	flex-direction: row;
	height: 25px;
	border: 2px solid black;
`;

const LvlIndicatorContainer = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
`;

const LvlButtonName = styled.Text`
	font-weight: 600;
	font-size: 22px;
	width: 100%;
	text-align: center;
`;

const LvlButton = styled.Pressable`
	width: 120px;
	border: 1px solid black;
	border-radius: 30px;
	padding: 7px 20px;
`;

const LvlRow = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 40px;
`;

const LCContainer = styled.View`
	padding-top: 50px;
	padding-bottom: 50px;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default LearningChooseLvlScreen;
