import React from 'react';
import styled from 'styled-components';

const UserProfileBadgeStyle = styled.div`
    height: 30px;
    width: 100px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: black;

    &:focus{ outline: none; }
`

const UserProfileBadge = ({ message }) => {
    return (
        <UserProfileBadgeStyle>
            { message }
        </UserProfileBadgeStyle>
  );
}

export default UserProfileBadge;