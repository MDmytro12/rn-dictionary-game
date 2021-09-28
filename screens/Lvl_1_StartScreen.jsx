import React from 'react';
import styled from 'styled-components';

import startImage from '../assets/images/lvl_start.png';
import arrowImage from '../assets/images/arrow.png';
import db from '../db/database';

const Lvl_1_StartScreen = ({ navigation, route }) => {
	return (
		<>
			<InfoContainer>
				<InfoTitle>Welcome to our new app Phrasal Verbs</InfoTitle>
				<InfoImage source={startImage} />
				<InfoTitleList>You will be able:</InfoTitleList>
				<InfoItemList> - to learn unknown to you phrasal verbs </InfoItemList>
				<InfoItemList>
					{' '}
					- to find out new meanings of already known ones
				</InfoItemList>
				<InfoItemList>
					{' '}
					- to practise their usage in different tenses
				</InfoItemList>
			</InfoContainer>

			<ArrowIamgeWrapper>
				<ArrowImage source={arrowImage} />
			</ArrowIamgeWrapper>

			<ButtonWrapper>
				<ButtonPress
					onPress={() => {
						db.find({ path: 'lvl_1' }, (e, d) => {
							let tasks = d[0].task;
							tasks = tasks.map((item) => ({ ...item, done: false }));
							db.update({ path: 'lvl_1' }, { $set: { task: tasks } });
						});
						navigation.navigate('L_1_Template');
					}}
				>
					<ButtonName>Start</ButtonName>
				</ButtonPress>
			</ButtonWrapper>
		</>
	);
};

const ArrowIamgeWrapper = styled.View`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 25px;
`;

const ArrowImage = styled.Image``;

const ButtonWrapper = styled.View`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonName = styled.Text`
	text-align: center;
	font-size: 25px;
	font-weight: 700;
`;

const ButtonPress = styled.TouchableOpacity`
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 30px;
    background: #E6B9F5;
    border-width: 2px;
    min-width: 140px;
    shadowColor: rgba(0, 0, 0, 1);
    shadowOpacity: 0.4;
    elevation: 4;
    shadowRadius: 15;
    shadowOffset : { width: 1, height: 13};
`;

const InfoItemList = styled.Text`
	font-size: 20px;
	font-weight: 500;
	font-style: italic;
	margin-bottom: 4px;
`;

const InfoTitleList = styled.Text`
	font-size: 20px;
	font-weight: 700;
	text-align: left;
	margin-top: 50px;
	margin-bottom: 5px;
`;

const InfoImage = styled.Image`
	position: absolute;
	right: 1%;
	top: 30%;
`;

const InfoTitle = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #8C4697;
    textShadowColor: rgba(0, 0, 0, 0.75);
    textShadowOffset: {width: -0.8, height: 0.5};
    textShadowRadius: 4;
`;

const InfoContainer = styled.View`
	margin-top: 30px;
	margin-right: 30px;
	margin-left: 30px;
	border-width: 1px;
	padding: 20px 15px;
	position: relative;
	background-color: white;
`;

export default Lvl_1_StartScreen;
