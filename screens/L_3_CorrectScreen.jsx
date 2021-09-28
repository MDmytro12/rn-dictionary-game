import React, { useEffect } from 'react';
import styled from 'styled-components';

import DogImg from '../assets/images/correct.png';

const L_3_CorrectScreen = ({ navigation, route }) => {
	useEffect(() => {
		const { currentPage } = route.params;

		setTimeout(() => {
			navigation.navigate('L_3_Template', {
				cpc: currentPage,
			});
		}, 4000);
	}, []);

	return (
		<CorrectContainer>
			<TextRight>Right!</TextRight>
			<RightLine />
			<CircleRight>
				<CircleLine />
			</CircleRight>
			<CorrectImg source={DogImg} />
		</CorrectContainer>
	);
};

const CorrectImg = styled.Image`
	margin-top: 40px;
`;

const CircleLine = styled.View`
	position: absolute;
	height: 90px;
	width: 55px;
	border-bottom-width: 5px;
	border-bottom-color: rgba(53, 202, 40, 1);
	border-right-width: 5px;
	border-right-color: rgba(53, 202, 40, 1);
	transform: rotate(40deg);
	top: 10%;
	left: 30%;
`;

const CircleRight = styled.View`
	width: 160px;
	height: 160px;
	position: relative;
	border-width: 5px;
	border-color: rgba(53, 202, 40, 1);
	border-radius: 100px;
	margin-top: 40px;
	margin-bottom: 30px;
`;

const RightLine = styled.View`
	width: 60%;
	height: 2px;
	background-color: rgba(53, 202, 40, 1);
`;

const TextRight = styled.Text`
	font-size: 56px;
	font-weight: 600;
	color: rgba(53, 202, 40, 1);
	letter-spacing: 14px;
	width: 100%;
	text-align: center;
	padding-top: 44px;
	padding-bottom: 15px;
`;

const CorrectContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: white;
`;

export default L_3_CorrectScreen;
