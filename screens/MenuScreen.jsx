import React, { useLayoutEffect, useState } from 'react' 
import styled from 'styled-components'
import { MenuButton } from '../components'
import dogImage from '../assets/images/menu-dog.png'
import { AntDesign , FontAwesome5 , FontAwesome , Feather } from '@expo/vector-icons';
import {View} from 'react-native';  

const Menu = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuButton onPress={() => navigation.navigate('Menu')} />
            )
        })
    } , [navigation])

    const [buttonStyle , setButtonStyle] = useState({
        "1" : false ,
        "2" : false ,
        "3" : false , 
        "4" : false ,
        "5" : false ,
        "6" : false ,
        "7" : false
    })

    const styles = {
        activePress : {
            backgroundColor: 'black'
        } ,
        activeText : {
            color: 'white'
        } , 
        casualPress : {
            backgroundColor: 'white' 
        } ,
        casualText : {
            color: 'black'
        }
    }

    return(
        <>
            <MenuContainer>
                <ButtonContainerWrapper>
                    <ButtonsContainer>
                        <View style={{overflow: 'hidden' , borderRadius:25 , width: '100%'}}>
                            <ButtonTouchable onPressOut={() => {
                                setButtonStyle({...buttonStyle , "1" : false})
                                navigation.navigate('Profile')
                            }} onPressIn={() => setButtonStyle({...buttonStyle , "1" : true})} style={buttonStyle['1'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["1"] ? styles.activeText : styles.casualText}>My profile</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "2" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "2" : true})} style={buttonStyle['2'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["2"] ? styles.activeText : styles.casualText}>Learning</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "3" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "3" : true})} style={buttonStyle['3'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["3"] ? styles.activeText : styles.casualText}>Settings</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "4" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "4" : true})} style={buttonStyle['4'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["4"] ? styles.activeText : styles.casualText}>About App</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "5" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "5" : true})} style={buttonStyle['5'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["5"] ? styles.activeText : styles.casualText}>Contact us</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "6" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "6" : true})} style={buttonStyle['6'] ? styles.activePress : styles.casualPress}>
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["6"] ? styles.activeText : styles.casualText}>Vocabulary</ButtonName>
                            </ButtonTouchable>
                            <ButtonTouchable onPressOut={() => setButtonStyle({...buttonStyle , "7" : false})} onPressIn={() => setButtonStyle({...buttonStyle , "7" : true})} style={buttonStyle['7'] ? {...styles.activePress , borderBottomWidth: 0} : {...styles.casualPress , borderBottomWidth: 0}} >
                                <ButtonName style={{letterSpacing: 4}} style={buttonStyle["7"] ? styles.activeText : styles.casualText}>Help</ButtonName>
                            </ButtonTouchable>
                        </View>
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

const FooterButtonTouch = styled.TouchableOpacity`
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

const ButtonTouchable = styled.Pressable`
    display: flex ;
    justify-content: center;
    align-items: center;
    border-bottom-width: black;
    border-bottom-width: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: red;
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