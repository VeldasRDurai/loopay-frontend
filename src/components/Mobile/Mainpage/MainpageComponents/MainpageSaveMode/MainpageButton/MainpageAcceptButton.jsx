import React from 'react';
import styled from 'styled-components';

import MainpageAcceptTimer from './MainpageAcceptTimer/MainpageAcceptTimer';

const MainpageAcceptButtonStyle = styled.button`
    height: 75px;
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background-color: red;

    &:focus{ outline: none; }
`

const MainpageAcceptButton = ({ onClick }) =>
    <MainpageAcceptButtonStyle onClick={onClick} >
        ACCEPT
        <MainpageAcceptTimer />
    </MainpageAcceptButtonStyle>


export default MainpageAcceptButton;