import React from 'react';
import styled from 'styled-components';

import MainpageAcceptTimer from './MainpageAcceptTimer/MainpageAcceptTimer';

const MainpageAcceptButtonStyle = styled.button`
    padding: 0 0 0 10px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background-color: black;
    color: white;

    &:focus{ outline: none; }
`

const MainpageAcceptButton = ({ onClick }) =>
    <MainpageAcceptButtonStyle onClick={onClick} >
        ACCEPT
        <MainpageAcceptTimer />
    </MainpageAcceptButtonStyle>


export default MainpageAcceptButton;