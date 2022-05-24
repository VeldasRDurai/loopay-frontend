import React from 'react';
import styled from 'styled-components';

const MainpageRejectButtonStyle = styled.button`
    height: 75px;
    width: 50vw;
    display: flex;
    /* flex-direction: column; */
    justify-content:space-around;
    align-items: center;
    background-color: red;

    &:focus{ outline: none; }
`

const MainpageRejectButton = ({ onClick }) =>
    <MainpageRejectButtonStyle onClick={onClick} >
        REJECT
    </MainpageRejectButtonStyle>


export default MainpageRejectButton;