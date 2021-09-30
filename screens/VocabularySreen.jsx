import React, { useLayoutEffect, useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SectionList } from 'react-native';
import { WordItem } from '../components';
import db from '../db/database';

const VocabularyScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);

	const [allData, setAllData] = useState([
		{
			title: 'Start',
			data: [],
		},
	]);

	useEffect(() => {
		db.find({ path: 'voc' }, (e, d) => {
			if (d.length !== 0) {
				setAllData([
					{
						title: 'Start',
						data: d[0].data,
					},
				]);
			} else {
				setAllData([
					{
						title: 'Start',
						data: [],
					},
				]);
			}
		});
	}, []);

	useEffect(() => {
		if (route.params?.updateWord) {
			db.find({ path: 'voc' }, (e, d) => {
				setAllData([
					{
						title: 'Start',
						data: [...d[0].data],
					},
				]);
			});
			route.params.updateWord = 0;
		}
	}, [route.params?.updateWord]);

	const onChangeText = (text) => {
		db.find({ path: 'voc' }, (e, d) => {
			if (d.length !== 0) {
				setAllData([
					{
						title: 'Start',
						data: d[0].data,
					},
				]);
				setAllData([
					{
						title: 'Start',
						data: d[0].data.filter((item) =>
							item.ew.toLowerCase().includes(text),
						),
					},
				]);
				console.log(allData);
			}
		});
	};

	const updateInfo = (data) => {
		setAllData([
			{
				title: 'Start',
				data,
			},
		]);
	};

	return (
		<AboutContainer>
			<ButtonContainer onPress={() => navigation.navigate('AddWord')}>
				<Ionicons name="add-circle-sharp" size={90} color="black" />
			</ButtonContainer>
			<SearchContainer>
				<FontAwesome name="search" size={24} color="white" />
				<SearchInput maxLength={15} editable onChangeText={onChangeText} />
			</SearchContainer>
			<WordsContainer>
				{allData[0].data.length !== 0 && (
					<SectionList
						showsVerticalScrollIndicator={false}
						sections={allData}
						keyExtractor={(item, index) => index}
						renderItem={({ item }) => (
							<WordItem
								navigation={navigation}
								onStateChange={updateInfo}
								item={item}
							/>
						)}
					/>
				)}
				{allData[0].data.length === 0 && (
					<EmptyContainer>
						<AntDesign name="rest" size={50} color="white" />
						<EmptyWords>Your vocabulary is empty!</EmptyWords>
					</EmptyContainer>
				)}
			</WordsContainer>
		</AboutContainer>
	);
};

const EmptyContainer = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const EmptyWords = styled.Text`
	color: white;
	font-size: 30px;
	font-weight: 700;
	margin-top: 20px;
	text-align: center;
`;

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
