import React from 'react';
import styled from 'styled-components';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const WordItem = ({ item }) => {
	return (
		<WordItemContainer>
			<DeleteButton>
				<Foundation name="page-delete" size={40} color="rgba(0,0,0,1)" />
			</DeleteButton>
			<EditButton>
				<Feather name="edit" size={35} color="black" />
			</EditButton>
			<EnglishWord>{item.word}</EnglishWord>
			<TranslateWord>{item.translate}</TranslateWord>
		</WordItemContainer>
	);
};

const EditButton = styled.TouchableOpacity`
	position: absolute;
	top: 35%;
	left: 4%;
`;

const DeleteButton = styled.TouchableOpacity`
	position: absolute;
	top: 35%;
	right: 4%;
`;

const TranslateWord = styled.Text`
	font-size: 22px;
	font-weight: 500;
	color: black;
	font-style: italic;
	letter-spacing: 3px;
	width: 100%;
	text-align: center;

	padding-left: 20px;
	padding-right: 20px;
	max-width: 400px;
`;

const EnglishWord = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #d18ef5;
	max-width: 400px;
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;
	letter-spacing: 3px;
`;

const WordItemContainer = styled.View`
	background-color: white;
	width: 100%;
	border-radius: 100px;
	padding-top: 10px;
	padding-bottom: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
`;

export default WordItem;
