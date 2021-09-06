import React , {useEffect, useLayoutEffect , useState} from 'react' 
import styled from 'styled-components'
import { MenuButton } from '../components'
import mockImage from '../assets/images/mock.jpg'
import * as ImagePicker from 'expo-image-picker'
import db from '../db/database'
import { DotIndicator } from 'react-native-indicators'

const ProfileScreen = ({navigation}) => {

    const [userInfo , setUserInfo] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const [selectedData  , setSelectedData] = useState({
        name : '' ,
        avatar : mockImage
    })
    const [error , setError] = useState(false)

    useLayoutEffect(() => {
        navigation.setOptions({ 
            headerLeft: () => (
                <MenuButton color={'white'} onPress={() => navigation.navigate('Menu')}/>
            )
        })
    } , [navigation])
    
    useEffect(() => {
        setIsLoading(true)

        db.find({path: 'profile'} , (err , docs) => {

            if(docs.length === 0){
                return;
            }

            setUserInfo(docs[0])
        })

        setIsLoading(false)
    } , [])

    const selectImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return null ;
        }
    
        return await ImagePicker.launchImageLibraryAsync();
    }

    const onEditUserInfo = () => {
        db.remove({path: 'profile'} , {} , (err , numRemoved) => {
            if(numRemoved === 1){
                setUserInfo(null)
            }
        })
    }

    return (
        <>  
            {
                isLoading &&
                <DotIndicator color='black' />
            }
            {
                !isLoading && 
                <ProfileContainer>
                    {
                        userInfo === null && 
                        <UserNameRow>
                            <UserNameText style={{textAlign: 'center' , fontSize: 23 , color: 'white'}}>Create new user : </UserNameText> 

                            <InputName  value={selectedData.name} placeholder='Input your fullname' onChange={(e) => {setError(false) , setSelectedData({...selectedData , name: e.nativeEvent.text })}} />

                            <ImageTouch onPress={async () => {
                                const selected = await selectImage()
                                if(selected.cancelled){
                                    setSelectedData({
                                        ...selectedData 
                                    })
                                    return 
                                }
                       
                                setSelectedData({
                                    ...selectedData ,
                                    avatar : selected.uri
                                })
                            }} style={{display:'flex', marginBottom: 20 , alignItems: 'center', justifyContent : 'center' ,borderRadius: 30 , backgroundColor: 'white' , borderWidth: 2 , paddingBottom: 10 , paddingTop: 15 , width: '80%'}}>
                                <UserNameText style={{ textAlign: 'center'}} >Select avatar</UserNameText> 
                            </ImageTouch>

                            {
                                selectedData.avatar === mockImage &&
                                <Image style={{marginBottom: 15}} source={ selectedData.avatar} />
                            }
                            {
                                selectedData.avatar !== mockImage &&
                                <Image style={{marginBottom: 15}} source={ {uri : selectedData.avatar} } />
                            }
                            

                            <ImageTouch onPress={() => {
                                if(selectedData.name === ''){
                                    setError(true)
                                    return;
                                }
                                db.insert({
                                    path: 'profile' ,
                                    fullname : selectedData.name ,
                                    avatar: selectedData.avatar ,
                                    rating: 0 ,
                                    lvlDone: 0 ,
                                    numberOfMistake : 0 ,
                                    numberOfSavedWord : 0 ,
                                    duration: '0 min.'
                                })
                                setUserInfo({
                                    path: 'profile' ,
                                    fullname : selectedData.name ,
                                    avatar: selectedData.avatar ,
                                    rating: 0 ,
                                    numberOfMistake : 0 ,
                                    numberOfSavedWord : 0 ,
                                    duration: '0 min.'
                                })
                            }} style={{display:'flex', alignItems: 'center', justifyContent : 'center' ,borderRadius: 30 , backgroundColor: 'white' , borderWidth: 2 , paddingBottom: 10 , paddingTop: 15 , width: '50%'}}>
                                <UserNameText style={{ textAlign: 'center'}} >Create!</UserNameText> 
                            </ImageTouch>
                            {
                                error &&
                                <UserNameText style={{color: 'white' , textAlign: 'center' , paddingTop: 10}}>Please enter name!</UserNameText>
                            }
                        </UserNameRow>
                    }
                    {
                        userInfo !== null &&
                        <>
                            <UserNameRow>
                                <UserNameText >User name : </UserNameText> 
                                <UserNameText style={{ color: 'white' , fontWeight: '700' , fontSize: 30 , textAlign: 'center'}}>{userInfo.fullname}</UserNameText>
                            </UserNameRow>

                            <UserInfoContainer>
                                <ImageContainer  >
                                    <ImageWrapper >
                                        <ImageTouch  onPress={async() => {
                                            const selected = await selectImage()

                                            if(selected.cancelled){
                                                return;
                                            }

                                            db.update({path: 'profile'} , {$set : {avatar : selected.uri}})

                                            setUserInfo({...userInfo , avatar: selected.uri})

                                        }} >
                                            {
                                                userInfo.avatar === mockImage &&
                                                <Image source={mockImage}/>
                                            }
                                            {
                                                userInfo.avatar !== mockImage &&
                                                <Image  source={{uri : userInfo.avatar}} />
                                            }
                                             
                                        </ImageTouch>
                                    </ImageWrapper>
                                </ImageContainer>
                                <InfoContainer>
                                    <InfoRow>
                                        <InfoTitle>Rating : </InfoTitle>
                                        <InfoValue>183</InfoValue>
                                    </InfoRow>
                                    <InfoRow>
                                        <InfoTitle>Levels done : </InfoTitle>
                                        <InfoValue>{userInfo.lvlDone}</InfoValue>
                                    </InfoRow>
                                    <InfoRow>
                                        <InfoTitle>Number of mistakes : </InfoTitle>
                                        <InfoValue>{userInfo.numberOfMistake}</InfoValue>
                                    </InfoRow>
                                    <InfoRow>
                                        <InfoTitle>Number of saved verbs : </InfoTitle>
                                        <InfoValue>{userInfo.numberOfSavedWord}</InfoValue>
                                    </InfoRow>
                                    <InfoRow>
                                        <InfoTitle>Duration of learning : </InfoTitle>
                                        <InfoValue>{userInfo.duration}</InfoValue>
                                    </InfoRow>
                                </InfoContainer>
                            </UserInfoContainer>
                            <EditButton onPress={onEditUserInfo}>
                                <EditButtonName>
                                    Edit profile!
                                </EditButtonName>
                            </EditButton>
                        </>
                        
                    }
                    
                </ProfileContainer>
            }
            
        </>
    )
}

const EditButtonName = styled.Text`
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`;

const EditButton = styled.TouchableOpacity`
    background-color: white;
    border-width: 2px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 30px;
`;

const InputName = styled.TextInput`
    width: 80%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 26px;
    color: white;
    border-bottom-width: 2px;
    font-weight: 600;
    marginBottom: 20px;
`;

const ImageTouch = styled.TouchableOpacity`

`;

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
    max-height: 250px;
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