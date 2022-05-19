import React from 'react';
import styled from 'styled-components';

const UserProfileCancelButtonStyle = styled.button`
    height: 30px;
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;

    &:focus{ outline: none; }
`

const UserProfileCancelButton = ({ onClick }) => 
    <UserProfileCancelButtonStyle onClick={onClick} >
        CANCEL
    </UserProfileCancelButtonStyle>

export default UserProfileCancelButton;