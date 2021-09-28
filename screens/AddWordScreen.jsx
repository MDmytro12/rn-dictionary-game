import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components';

const AddWordScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);

	return (
		<AboutContainer>
			<WordTitle>Input word to translate : </WordTitle>
			<WordInput />
			<WordTitle>Input translation of this word : </WordTitle>
			<WordInput />
			<AddButton>
				<AddButtonText>Add new word</AddButtonText>
			</AddButton>
		</AboutContainer>
	);
};

const AddButtonText = styled.Text`
	color: #d18ef5;
	text-align: center;
	font-weight: 700;
	font-size: 26px;
    letter-spacing: 2px;s
`;

const AddButton = styled.TouchableOpacity`
	width: 80%;
	background-color: black;
	border-radius: 100px;
	padding-top: 10px;
	margin-top: 10px;
	padding-bottom: 10px;
`;

const WordInput = styled.TextInput`
	width: 80%;
	border-width: 2px;
	border-color: white;
	border-radius: 30px;
	font-size: 24px;
	font-weight: 600;
	text-align: center;
	color: white;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 20px;
	padding-right: 20px;
	margin-bottom: 20px;
`;

const WordTitle = styled.Text`
	font-size: 26px;
	color: black;
	font-weight: 700;
	width: 90%;
	text-align: center;
	margin-bottom: 20px;
`;

const AboutContainer = styled.View`
	padding-top: 30px;
	align-items: center;
	flex: 1;
	background-color: #d18ef5;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export default AddWordScreen;
