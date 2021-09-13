import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { ButtonLearning } from '../components';
import { useState } from 'react/cjs/react.development';
import db from '../db/database';
import { ActivityIndicator } from 'react-native';

const createMesive = (number = 1) => {
	let mockMasive = [];

	for (let i = 0; i < number; i++) {
		mockMasive.push('*');
	}

	return mockMasive;
};

const Lvl_1_TemplateScreen = ({ navigation }) => {
	const [currentInfo, setCurrrentInfo] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		console.log('mount');
		db.find({ path: 'lvl_1_page' }, (e, d) => {
			if (e) {
				return;
			}
			setCurrentPage(1);
		});
		db.find({ path: 'lvl_1' }, (err, newDoc) => {
			if (err) {
				return;
			}
			setCurrrentInfo(
				newDoc[0].task.filter((item) => item.number === currentPage)[0],
			);
		});
	}, []);

	useEffect(() => {
		db.find({ path: 'lvl_1' }, (err, newDoc) => {
			if (err) {
				return;
			}
			setCurrrentInfo(
				newDoc[0].task.filter((item) => item.number === currentPage)[0],
			);
		});
	}, [currentPage]);

	return (
		<>
			<StarContainer>
				{createMesive(currentPage).map((item, index) =>
					index > 0 ? (
						<Feather
							key={index}
							name="star"
							style={{ marginRight: 5 }}
							size={24}
							color="black"
						/>
					) : (
						<></>
					),
				)}
			</StarContainer>
			<LvlContainer>
				<ButtonLearning
					lvlNumber={1}
					onPress={() => {
						if (currentPage < 4) {
							db.update(
								{ path: 'lvl_1_page' },
								{ $set: { currentPage: currentPage + 1 } },
							);

							setCurrentPage(currentPage + 1);
						} else {
							navigation.navigate('L_1_Finish');
						}
					}}
				/>
				{!currentInfo && <ActivityIndicator />}
				{currentInfo && (
					<>
						<EnglishWord>{currentInfo.word}</EnglishWord>
						{currentInfo.synonyms.map((item, index) => (
							<>
								<SynonymWord>{item.title}</SynonymWord>
								<ExampleText>{item.example}</ExampleText>
							</>
						))}
					</>
				)}
			</LvlContainer>
		</>
	);
};

Lvl_1_TemplateScreen.propTypes = {
	navigation: PropTypes.object,
	route: PropTypes.object,
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
