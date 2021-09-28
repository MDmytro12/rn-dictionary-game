import React from 'react';
import styled from 'styled-components';
import { ButtonLearning, NextButton } from '../components';
import dogImg from '../assets/images/dog_con.png';
import db from '../db/database';
import { useEffect } from 'react';

const L_3_FinishScreen = ({ navigation }) => {
	return (
		<ConContainer>
			<ButtonLearning
				lvlNumber={3}
				title="Synonyms"
				style={{ backgroundColor: 'rgba(255, 253, 203, 1)' }}
				disabled={true}
			/>
			<ConTitle>Congratulations!</ConTitle>
			<SubTitle>You have finished the 3-d Level.</SubTitle>
			<ConImage source={dogImg} />
			<NextButton
				onPress={() => {
					navigation.navigate({
						name: 'LChoose',
						params: { update_3: true },
					});
				}}
			/>
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

export default L_3_FinishScreen;
