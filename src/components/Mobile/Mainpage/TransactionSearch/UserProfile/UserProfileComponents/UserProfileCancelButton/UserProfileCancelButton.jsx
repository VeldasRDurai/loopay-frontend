import React from 'react';
import styled from 'styled-components';

import UserProfileTimer from '../UserProfileTimer/UserProfileTimer';

const UserProfileCancelButtonStyle = styled.button`
    /* height: 65px;
    width: 40vw; */
    padding: 0 0 0 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background-color: white;

    &:focus{ outline: none; }
`

const UserProfileCancelButton = ({ onClick }) =>
    <UserProfileCancelButtonStyle onClick={onClick} >
        CANCEL
        <UserProfileTimer />
    </UserProfileCancelButtonStyle>


export default UserProfileCancelButton;