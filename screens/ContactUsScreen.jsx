import React, { useLayoutEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Linking, Button } from 'react-native';

const ContactUsScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MenuButton color="white" onPress={() => navigation.navigate('Menu')} />
			),
		});
	}, [navigation]);

	return (
		<AboutContainer>
			<ContactItem>
				<OpenURLButton />
				<FontAwesome name="telegram" size={100} color="white" />
			</ContactItem>
			<ContactItem>
				<AntDesign name="instagram" size={100} color="white" />
			</ContactItem>
			<ContactItem>
				<FontAwesome name="phone-square" size={100} color="white" />
			</ContactItem>
			<ContactItem>
				<FontAwesome5 name="viber" size={100} color="white" />
			</ContactItem>
		</AboutContainer>
	);
};

const OpenURLButton = ({ url, children }) => {
	const handlePress = useCallback(async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return <Button title={children} onPress={handlePress} />;
};

const ContactItem = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const AboutContainer = styled.View`
	padding-top: 30px;
	align-items: center;
	flex: 1;
	background-color: #d18ef5;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export default ContactUsScreen;
