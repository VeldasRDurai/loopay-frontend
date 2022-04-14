import React from 'react';
import styled from 'styled-components';

const LoginButtonStyled = styled.button`
    height:5vh;
    width: 80vw;
    background-color:#282b32;
    border-radius: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 13px;
    font-weight: 900;
    border: none;
    &:disabled{
        background-color: #282b3299;
    }
`;
const LoginButton = ({ onClick, text, disabled }) => {
    
    return <LoginButtonStyled onClick={onClick} 
        disabled={ disabled===true } >
        { text ? text : 'Submit' }
    </LoginButtonStyled>
}

export default LoginButton