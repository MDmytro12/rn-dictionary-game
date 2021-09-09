import React from 'react';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { ButtonLearning } from '../components';

const Lvl_1_TemplateScreen = ({ navigation }) => {
	return (
		<>
			<StarContainer>
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
				<ButtonLearning lvlNumber={1} />
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
	font-weight: 300;
	font-size: 26px;
	width: 100%;
	text-align: center;
	padding-bottom: 15px;
`;

const SynonymWord = styled.Text`
	color: black;
	font-weight: 700;
	font-size: 26px;
	width: 100%;
	text-align: left;
	padding-bottom: 15px;
`;

const EnglishWord = styled.Text`
	color: #926cff;
	font-weight: 700;
	font-size: 30px;
	width: 100%;
	text-align: center;
	padding-bottom: 20px;
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
