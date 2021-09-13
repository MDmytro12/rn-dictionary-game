import React from 'react';
import styled from 'styled-components';

const NextButton = ({ onPress }) => {
	return (
		<Button>
			<ButtonName onPress={onPress}>Next level</ButtonName>
		</Button>
	);
};

const ButtonName = styled.Text`
	font-size: 22px;
`;

const Button = styled.TouchableOpacity`
	background-color: rgba(243, 200, 90, 0.69);
	border-width: 1px;
	padding: 6px 20px;
	border-radius: 30px;
`;

export default NextButton;
