import React from 'react';
import styled from 'styled-components';
import { ButtonLearning, NextButton } from '../components';
import dogImg from '../assets/images/dog_con.png';

const Lvl_1_FinishScreen = ({ navigation }) => {
	return (
		<ConContainer>
			<ButtonLearning lvlNumber={1} />
			<ConTitle>Congratulations!</ConTitle>
			<SubTitle>You have finished the 1st Level.</SubTitle>
			<ConImage source={dogImg} />
			<NextButton />
		</ConContainer>
	);
};

const ConImage = styled.Image`
	width: 250px;
	height: 250px;
`;

const SubTitle = styled.Text`
	font-size: 25px;
`;

const ConTitle = styled.Text`
	font-size: 30px;
	font-weight: 900;
	margin-bottom: 10px;
`;

const ConContainer = styled.View`
	flex: 1;
	padding-top: 44px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;
`;

export default Lvl_1_FinishScreen;
