import React from 'react';
import styled from 'styled-components';

const SignupButtonStyled = styled.div`
    height:5vh;
    width: 80vw;
    background-color:white;
    border-radius: 15px;
    color: #282b32;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 13px;
    font-weight: 900;
`;
const SignupButton = ({ onClick, text }) => {
    return <SignupButtonStyled onClick={onClick} >
        { text ? text : 'Submit' }
    </SignupButtonStyled>
}

export default SignupButton;