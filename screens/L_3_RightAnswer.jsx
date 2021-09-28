import React from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { ButtonLearning } from '../components';
import Bulb from '../assets/images/bulb.png';
import Right from '../assets/images/right.png';
import { useEffect, useState } from 'react';
import db from '../db/database';
import { ActivityIndicator } from 'react-native';

const createMesive = (number = 1) => {
	let mockMasive = [];

	for (let i = 0; i < number; i++) {
		mockMasive.push('*');
	}

	return mockMasive;
};

const L_3_RightAnswerScreen = ({ navigation, route }) => {
	const { correctAnswers, question } = route.params;
	const [currentPage, setCurrentPage] = useState(NaN);

	useEffect(() => {
		setCurrentPage(route.params.cp);
		setTimeout(() => {
			navigation.navigate('L_3_Template');
		}, 4000);
	}, []);

	return (
		<>
			<StarContainer>
				{isNaN(currentPage) && <ActivityIndicator />}
				{!isNaN(currentPage) && (
					<>
						{createMesive(currentPage).map((item) => (
							<AntDesign
								name="star"
								style={{ marginRight: 5 }}
								size={24}
								color="rgba(255, 247, 50, 1)"
							/>
						))}
					</>
				)}
			</StarContainer>
			<LvlContainer>
				<ButtonLearning
					style={{ backgroundColor: 'rgba(255, 253, 203, 1)' }}
					lvlNumber={3}
					title="Typing"
					disabled={true}
				/>
				<TestContainer>
					<BulbImage source={Bulb} />
					<AnswerContainer>
						<EnglishWord>{question}</EnglishWord>
						{correctAnswers.map((item, index) => (
							<AnswerText key={item}>{item}</AnswerText>
						))}
					</AnswerContainer>
					<DogImage source={Right} />
				</TestContainer>
			</LvlContainer>
		</>
	);
};

const AnswerText = styled.Text`
	font-size: 18px;
	color: black;
	padding: 6px 10px;
	border-width: 1px;
	background-color: rgba(36, 255, 0, 1);
	max-width: 200px;
	font-weight: 700;
	text-align: center;
	margin-right: 20px;
`;

const AnswerContainer = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const DogImage = styled.Image`
	margin-top: 40px;
`;

const BulbImage = styled.Image`
	margin-bottom: 20px;
`;

const EnglishWord = styled.Text`
	font-weight: 700;
	font-size: 24px;
	color: black;
	width: 50%;
	text-align: center;
`;

const TestContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StarContainer = styled.View`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	padding-left: 60%;
	padding-top: 10px;
	padding-bottom: 10px;
	background-color: white;
`;

const LvlContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 40px;
	padding-right: 40px;
	background-color: white;
	height: 100%;
`;

export default L_3_RightAnswerScreen;
