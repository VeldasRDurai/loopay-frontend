import React from 'react';
import styled from 'styled-components';

const MainpageRejectButtonStyle = styled.button`
    height: 50px;
    width: 40vw;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    color: white;
    background-color: #000000;

    &:focus{ outline: none; }
`

const MainpageRejectButton = ({ onClick }) =>
    <MainpageRejectButtonStyle onClick={onClick} >
        REJECT
    </MainpageRejectButtonStyle>


export default MainpageRejectButton;