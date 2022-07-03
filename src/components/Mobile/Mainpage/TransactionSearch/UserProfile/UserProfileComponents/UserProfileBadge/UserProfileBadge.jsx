import React from 'react';
import styled from 'styled-components';

const UserProfileBadgeStyle = styled.div`
    height: 65px;
    width: 40vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    color: black;
    background-color: white;

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