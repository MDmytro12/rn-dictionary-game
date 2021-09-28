import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Avatar from '../assets/images/mock.jpg';
import { MenuButton } from '../components';

const AboutAppScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);
	return (
		<AboutContainer>
			<ItemContainer>
				<TitleContainer>
					<MaterialCommunityIcons name="lightbulb-on" size={24} color="white" />
					<ItemTitle>Adia author</ItemTitle>
				</TitleContainer>
				<ItemContentContainer>
					<AvatarItem source={Avatar} />
					<AuthorName>Ishchuck Roman</AuthorName>
				</ItemContentContainer>
			</ItemContainer>
			<ItemContainer>
				<TitleContainer>
					<AntDesign name="codesquare" size={24} color="white" />
					<ItemTitle>Programm author</ItemTitle>
				</TitleContainer>
				<ItemContentContainer>
					<AvatarItem source={Avatar} />
					<AuthorName>Medvedev Dmytro</AuthorName>
				</ItemContentContainer>
			</ItemContainer>
			<ItemContainer>
				<TitleContainer>
					<MaterialIcons name="date-range" size={24} color="white" />
					<AddInfo>28 September of 2021 year</AddInfo>
				</TitleContainer>
				<TitleContainer>
					<MaterialIcons name="system-update" size={24} color="white" />
					<AddInfo>version of application : 1</AddInfo>
				</TitleContainer>
			</ItemContainer>
		</AboutContainer>
	);
};

const AddInfo = styled.Text`
	color: white;
	font-size: 20px;
	font-weight: 700;
	text-align: center;
	width: 100%;
`;

const AvatarItem = styled.Image`
	width: 75px;
	height: 100px;
	border-radius: 30px;
`;

const AuthorName = styled.Text`
	font-size: 28px;
	font-weight: 700;
	color: white;
	text-align: center;
	width: 70%;
	padding-right: 30px;
`;

const ItemContentContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const TitleContainer = styled.View`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;

const ItemTitle = styled.Text`
	width: 100%;
	font-size: 24px;
	color: black;
	font-weight: 700;
	text-align: center;
	padding-right: 20px;
`;

const ItemContainer = styled.View`
	width: 90%;
	border-width: 2px;
	border-color: white;
	border-radius: 30px;
	padding: 10px 20px;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AboutContainer = styled.View`
	padding-top: 50px;
	align-items: center;
	flex: 1;
	background-color: #d18ef5;
	display: flex;
	flex-direction: column;
`;

export default AboutAppScreen;
