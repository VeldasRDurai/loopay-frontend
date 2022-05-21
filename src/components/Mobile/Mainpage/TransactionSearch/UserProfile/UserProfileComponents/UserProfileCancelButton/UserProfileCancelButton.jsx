import React from 'react';
import styled from 'styled-components';

import UserProfileTimer from '../UserProfileTimer/UserProfileTimer';

const UserProfileCancelButtonStyle = styled.button`
    height: 75px;
    width: 50vw;
    display: flex;
    /* flex-direction: column; */
    justify-content:space-around;
    align-items: center;
    background-color: red;

    &:focus{ outline: none; }
`

const UserProfileCancelButton = ({ onClick }) =>
    <UserProfileCancelButtonStyle onClick={onClick} >
        CANCEL
        <UserProfileTimer />
    </UserProfileCancelButtonStyle>


export default UserProfileCancelButton;