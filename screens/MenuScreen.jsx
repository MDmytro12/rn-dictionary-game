import React, { useLayoutEffect } from 'react' 
import styled from 'styled-components'
import { MenuButton } from '../components'
import dogImage from '../assets/images/menu-dog.png'
import { AntDesign , FontAwesome5 , FontAwesome , Feather } from '@expo/vector-icons';

const Menu = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuButton onPress={() => navigation.navigate('Menu')} />
            )
        })
    } , [navigation])

    return(
        <>
            <MenuContainer>
                <ButtonContainerWrapper>
                    <ButtonsContainer>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>My profile</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>Learning</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>Settings</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>About App</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>Contact us</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable>
                            <ButtonName style={{letterSpacing: 4}}>Vocabulary</ButtonName>
                        </ButtonTouchable>
                        <ButtonTouchable style={{borderBottomWidth: 0}}>
                            <ButtonName style={{letterSpacing: 4}}>Help </ButtonName>
                        </ButtonTouchable>
                    </ButtonsContainer>
                </ButtonContainerWrapper>
                
                <FooterContainer>
                    <FooterButtonTouch>
                        <FooterButtonName>
                            download
                        </FooterButtonName>
                    </FooterButtonTouch>
                    <FooterImageWrapper>
                        <FooterImage source={dogImage} />
                    </FooterImageWrapper>
                    <FooterIconsWrapper>
                        <AntDesign style={{marginRight: 3}} name="instagram" size={24} color="white" />
                        <FontAwesome5 style={{marginRight: 3}} name="viber" size={24} color="white" />
                        <FontAwesome5 style={{marginRight: 3}} name="telegram-plane" size={24} color="white" />
                        <FontAwesome style={{marginRight: 3}} name="facebook" size={24} color="white" />
                        <Feather style={{marginRight: 3}} name="twitter" size={24} color="white" />
                    </FooterIconsWrapper>
                </FooterContainer>
            </MenuContainer>
        </>
    )
}

const FooterIconsWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    width: 30%;
`;

const FooterImage = styled.Image`
    width: 120px;
    height: 75%;
`;

const FooterImageWrapper = styled.View`
`;

const FooterButtonName = styled.Text`
    font-size: 22px;
    font-weight: 500;
    color: white;
`;

const FooterButtonTouch = styled.TouchableWithoutFeedback`
    border-width: 2px ;
    border-color: white;
    border-radius: 30px;
    padding: 5px 10px;
    margin-left: 15px;
`;

const FooterContainer = styled.View`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;

    height: 15%;
    width: 100%;
    background-color: black;
`;

const ButtonName = styled.Text`
    text-align: center;
    font-size: 25px;
    font-weight: 700;
`;

const ButtonTouchable = styled.TouchableOpacity`
    display: flex ;
    justify-content: center;
    align-items: center;
    border-bottom-width: black;
    border-bottom-width: 2px;

    padding-top: 10px;
    padding-bottom: 10px;
`;

const ButtonContainerWrapper = styled.View`
    width: 100%;
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonsContainer = styled.View`
    display: flex;
    flex-direction: column;
    border: 3px solid black;
    width: 80%;
    border-radius: 30px;
    background-color: white;
`;

const MenuContainer = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    background-color: #D18EF5;
`;

export default Menu;