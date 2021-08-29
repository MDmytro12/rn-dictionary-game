import React , {useLayoutEffect} from 'react' 
import styled from 'styled-components'
import { MenuButton } from '../components'

import mockImage from '../assets/images/mock.jpg'

const ProfileScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerLeft: () => (
                <MenuButton color={'white'} onPress={() => navigation.navigate('Menu')}/>
            )
        })
    } , [navigation])

    return (
        <>
            <ProfileContainer>
                <UserNameRow>
                    <UserNameText>User name : </UserNameText> 
                    <UserNameText style={{ color: 'white' , fontWeight: '700' , fontSize: 30 , textAlign: 'center'}}>Roman Ishchuck</UserNameText>
                </UserNameRow>

                <UserInfoContainer>
                    <ImageContainer>
                        <ImageWrapper>
                           <Image source={mockImage} /> 
                        </ImageWrapper>
                    </ImageContainer>
                    <InfoContainer>
                        <InfoRow>
                            <InfoTitle>Rating : </InfoTitle>
                            <InfoValue>183</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoTitle>Levels done : </InfoTitle>
                            <InfoValue>1</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoTitle>Number of mistakes : </InfoTitle>
                            <InfoValue>4</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoTitle>Number of saved verbs : </InfoTitle>
                            <InfoValue>5</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoTitle>Duration of learning : </InfoTitle>
                            <InfoValue>13 min.</InfoValue>
                        </InfoRow>
                    </InfoContainer>
                </UserInfoContainer>
            </ProfileContainer>
        </>
    )
}

const Image = styled.Image`
    height: 150px;
    width: 100px;
    border-radius: 30px;
`;

const InfoValue = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    width: 20%;
`;

const InfoTitle = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: 700;
    width: 60%;;
`;

const InfoRow = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`;

const InfoContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.View`
    border-radius: 30px;
    overflow: hidden;
    border-width: 2px;
    border-color: white;
    padding: 3px;
`;

const ImageContainer = styled.View`
    margin-right: 10px;
`;

const UserInfoContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
`;

const UserNameText = styled.Text`
    font-size: 20px;
    color: black;
    letter-spacing: 2px;
    font-weight: 700;
    width: 100%;
    margin-bottom: 10px;
`;

const UserNameRow = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const ProfileContainer = styled.View`
    flex: 1;
    background-color: #D18EF5;

    display: flex;
    flex-direction: column;

    padding-top: 60px;
    padding-left: 20px;
    padding-right: 20px;

`;

export default ProfileScreen;