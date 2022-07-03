import React from 'react';
import styled from 'styled-components';

const UserProfileRequestButtonStyle = styled.button`
    height: 50px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background-color: white;

    &:focus{ outline: none; }
`

const UserProfileRequestButton = ({ onClick }) =>
    <UserProfileRequestButtonStyle onClick={onClick} >
        REQUEST
    </UserProfileRequestButtonStyle>

export default UserProfileRequestButton;