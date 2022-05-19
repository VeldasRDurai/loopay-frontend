import React from 'react';
import styled from 'styled-components';

const UserProfileRequestButtonStyle = styled.button`
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;

    &:focus{ outline: none; }
`

const UserProfileRequestButton = ({ onClick }) =>
    <UserProfileRequestButtonStyle onClick={onClick} >
        REQUEST
    </UserProfileRequestButtonStyle>

export default UserProfileRequestButton;