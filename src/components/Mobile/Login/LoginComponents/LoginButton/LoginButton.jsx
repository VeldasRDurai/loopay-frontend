import React from 'react';
import styled from 'styled-components';

const LoginButtonStyled = styled.div`
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
`;
const LoginButton = ({ onClick }) => {
    return <LoginButtonStyled onClick={onClick} >
        Login with Email
    </LoginButtonStyled>
}

export default LoginButton