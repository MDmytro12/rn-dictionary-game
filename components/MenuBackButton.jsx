import React from 'react' 
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

const MenuBackButton = ({onPress}) => {
    return(
        <TouchButton onPress={onPress}>
            <Ionicons name="chevron-back-circle-outline" size={30} color="white" style={{transform: [{rotateY: '180deg'}]}} />
        </TouchButton>
    )
}

const TouchButton = styled.TouchableOpacity`

`;

export default MenuBackButton;