import React from 'react';
import styled from 'styled-components';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import db from '../db/database';

const WordItem = ({ item, onStateChange, navigation }) => {
	return (
		<WordItemContainer>
			<DeleteButton
				onPress={() => {
					db.find({ path: 'voc' }, (e, d) => {
						if (d.length !== 0) {
							let DATA = d[0].data.filter(
								(i) => i.ew !== item.ew && i.tw !== item.tw,
							);

							db.update(
								{ path: 'voc' },
								{
									$set: {
										data: DATA,
									},
								},
							);

							onStateChange(DATA);
						}
					});
				}}
			>
				<Foundation name="page-delete" size={40} color="black" />
			</DeleteButton>
			<EditButton
				onPress={() => {
					navigation.navigate('Edit', {
						ew: item.ew,
						tw: item.tw,
					});
				}}
			>
				<Feather name="edit" size={35} color="black" />
			</EditButton>
			<EnglishWord>{item.ew}</EnglishWord>
			<TranslateWord>{item.tw}</TranslateWord>
		</WordItemContainer>
	);
};

const EditButton = styled.TouchableOpacity`
	position: absolute;
	top: 48%;
	left: 4%;
	z-index: 3;
`;

const DeleteButton = styled.TouchableOpacity`
	position: absolute;
	top: 45%;
	right: 4%;
	z-index: 3;
`;

const TranslateWord = styled.Text`
	font-size: 22px;
	font-weight: 500;
	color: black;
	font-style: italic;
	letter-spacing: 3px;
	max-width: 300px;
	text-align: center;

	padding-left: 20px;
	padding-right: 20px;
	max-width: 100%;
	padding-left: 80px;
	padding-right: 80px;
`;

const EnglishWord = styled.Text`
	font-size: 24px;
	font-weight: 700;
	color: #d18ef5;
	max-width: 300px;
	text-align: center;
	padding-left: 20px;
	padding-right: 20px;
	letter-spacing: 3px;
`;

const WordItemContainer = styled.View`
	background-color: white;
	width: 100%;
	border-radius: 100px;
	padding-top: 20px;
	padding-bottom: 20px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export default WordItem;
