import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from '../assets/images/wrong.png';

const L_3_WrongScreen = ({ navigation, route }) => {
	useEffect(() => {
		setTimeout(() => {
			const { currentPage, correctAnswers, question } = route.params;
			navigation.navigate('L_3_RA', {
				cp: currentPage,
				correctAnswers,
				question,
			});
		}, 4000);
	}, []);

	return (
		<WrongContainer>
			<WrongTitle>{'wrong!'.toUpperCase()}</WrongTitle>
			<Line />
			<Circle>
				<WrongLineL />
				<WrongLineR />
			</Circle>
			<DogImage source={Image} />
		</WrongContainer>
	);
};

const DogImage = styled.Image`
	margin-top: 80px;
`;

const WrongLineR = styled.View`
	position: absolute;
	width: 95px;
	height: 6px;
	background-color: red;
	border-radius: 100px;
	transform: rotate(135deg);
	top: 50%;
	left: 20%;
`;

const WrongLineL = styled.View`
	position: absolute;
	width: 95px;
	height: 6px;
	background-color: red;
	border-radius: 30px;
	transform: rotate(45deg);
	top: 50%;
	left: 20%;
`;

const Circle = styled.View`
	position: relative;
	width: 170px;
	height: 170px;
	border-width: 4px;
	border-color: red;
	border-radius: 100px;
	margin-top: 40px;
`;

const Line = styled.View`
	width: 90%;
	height: 1px;
	background-color: red;
`;

const WrongTitle = styled.Text`
	color: red;
	font-size: 50px;
	letter-spacing: 15px;
	text-align: center;
	font-weight: 500;
`;

const WrongContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 52px;
	background-color: white;
	height: 100%;
`;

export default L_3_WrongScreen;
