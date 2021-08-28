import React, { useState } from 'react'
import styled from 'styled-components'
import { SimpleLineIcons } from '@expo/vector-icons';

const MenuButton = ({onPress}) => {

    return(
        <MenuButtonTouchable onPress={onPress} >
            <SimpleLineIcons name="menu" size={26} color="black" />
        </MenuButtonTouchable>
    )
}

const MenuButtonTouchable = styled.TouchableOpacity`
`;

export default MenuButton;
