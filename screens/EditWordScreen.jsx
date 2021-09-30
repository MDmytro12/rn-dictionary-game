import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components';
import db from '../db/database';

const EditWordScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);

	const [inputData, setInputData] = useState({
		new: '',
		ntw: '',
	});

	useEffect(() => {
		setInputData({
			new: route.params.ew,
			ntw: route.params.tw,
		});
	}, []);

	const onEditWords = () => {
		db.find({ path: 'voc' }, (e, d) => {
			let DATA = d[0].data.map((item) => {
				if (item.ew === route.params.ew) {
					return {
						ew: inputData.new,
						tw: inputData.ntw,
					};
				}

				return { ...item };
			});

			db.update({ path: 'voc' }, { $set: { data: DATA } });

			setTimeout(() => {
				navigation.navigate('Vocabulary', {
					updateWord: true,
				});
			}, 1000);
		});
	};

	const onText = (text, type) => {
		setInputData({
			...inputData,
			[type]: text,
		});
	};

	return (
		<AboutContainer>
			<WordTitle>Change English word : </WordTitle>
			<WordInput onChangeText={(t) => onText(t, 'new')} value={inputData.new} />
			<WordTitle>Change translation of English word : </WordTitle>
			<WordInput onChangeText={(t) => onText(t, 'ntw')} value={inputData.ntw} />
			<AddButton onPress={onEditWords}>
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

export default EditWordScreen;
