import React from 'react';
import styled from 'styled-components';

const ButtonLearning = ({ disabled, style, lvlNumber, title, onPress }) => {
	return (
		<>
			<LevelTitle>Level {lvlNumber}</LevelTitle>
			<ButtonLearn
				disabled={disabled}
				style={style === undefined ? {} : style}
				onPress={onPress}
			>
				<ButtonName>{title}</ButtonName>
			</ButtonLearn>
		</>
	);
};

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
	max-width: 215px;
	width: 100%;
`;

const LevelTitle = styled.Text`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 10px;
`;

export default ButtonLearning;
