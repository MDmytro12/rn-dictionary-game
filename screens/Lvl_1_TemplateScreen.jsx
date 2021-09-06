import React from 'react';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

const Lvl_1_TemplateScreen = ({ navigation }) => {
	return (
		<>
			<StarContainer>
				{}
				<Feather
					name="star"
					style={{ marginRight: 5 }}
					size={24}
					color="black"
				/>
				<Feather
					name="star"
					style={{ marginRight: 5 }}
					size={24}
					color="black"
				/>
				<Feather
					name="star"
					style={{ marginRight: 5 }}
					size={24}
					color="black"
				/>
			</StarContainer>
			<LvlContainer>
				<LevelTitle>Level 1</LevelTitle>
				<ButtonLearn>
					<ButtonName>Learning</ButtonName>
				</ButtonLearn>
				<EnglishWord>be after</EnglishWord>
				<SynonymWord>1. want, try to gain</SynonymWord>
				<ExampleText>I think Chris is after my job.</ExampleText>
				<SynonymWord>2. chase</SynonymWord>
				<ExampleText>The police are after the robber.</ExampleText>
			</LvlContainer>
		</>
	);
};

const StarContainer = styled.View`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	padding-left: 60%;
	padding-top: 10px;
	padding-bottom: 10px;
`;

const ExampleText = styled.Text`
	color: black;
	font-weight: 500;
	font-size: 26px;
	width: 100%;
	text-align: center;
	padding-bottom: 15px;
`;

const SynonymWord = styled.Text`
	color: black;
	font-weight: 800;
	font-size: 26px;
	width: 100%;
	text-align: left;
	padding-bottom: 15px;
`;

const EnglishWord = styled.Text`
	color: #926cff;
	font-weight: 900;
	font-size: 30px;
	width: 100%;
	text-align: center;
	padding-bottom: 20px;
`;

const ButtonName = styled.Text`
	font-size: 28px;
	font-weight: 800;
	width: 100%;
	text-align: center;
`;

const ButtonLearn = styled.TouchableOpacity`
	border-width: 1px;
	border-color: black;
	background-color: rgba(187, 202, 254, 1);
	padding: 9px 30px;
	border-radius: 20px;
	margin-bottom: 30px;
`;

const LevelTitle = styled.Text`
	font-size: 24px;
	font-weight: 700;
	width: 100%;
	text-align: center;
	margin-bottom: 10px;
`;

const LvlContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 40px;
	padding-right: 40px;
`;

export default Lvl_1_TemplateScreen;
