import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SectionList, Text } from 'react-native';
import { WordItem } from '../components';

const VocabularyScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);

	const DATA = [
		{
			title: 'to drxddddddddddxxxxxxxxxxxxxxxxxxaw',
			data: [
				{
					word: 'to draw',
					translate: 'малювати',
				},
				{
					word: 'to draw',
					translate: 'малювати',
				},
				{
					word: 'to draw',
					translate: 'малювати',
				},
				{
					word: 'to draw',
					translate: 'малювати',
				},
				{
					word: 'to draw',
					translate: 'малювати',
				},
				{
					word: 'to draw',
					translate: 'малювати',
				},
			],
		},
	];

	return (
		<AboutContainer>
			<ButtonContainer onPress={() => navigation.navigate('AddWord')}>
				<Ionicons name="add-circle-sharp" size={90} color="black" />
			</ButtonContainer>
			<SearchContainer>
				<FontAwesome name="search" size={24} color="white" />
				<SearchInput />
			</SearchContainer>
			<WordsContainer>
				<SectionList
					showsVerticalScrollIndicator={false}
					sections={DATA}
					keyExtractor={(item, index) => index}
					renderItem={({ item }) => <WordItem item={item} />}
				/>
			</WordsContainer>
		</AboutContainer>
	);
};

const WordsContainer = styled.View`
	height: 85%;
	width: 90%;
	padding-top: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const ButtonContainer = styled.TouchableOpacity`
	position: absolute;
	bottom: 2%;
	right: 2%;
	z-index: 3;
`;

const SearchInput = styled.TextInput`
	width: 90%;
	margin-left: 10px;
	font-size: 24px;
	color: white;
	font-weight: 600;
	letter-spacing: 5px;
`;

const SearchContainer = styled.View`
	display: flex;
	flex-direction: row;
	width: 90%;
	border-width: 2px;
	border-color: white;
	border-radius: 30px;
	padding: 10px 20px 10px 10px;
	align-items: center;
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

export default VocabularyScreen;
