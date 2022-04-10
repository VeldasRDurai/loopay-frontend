import React from 'react';
import styled from 'styled-components';

import LoginFormInput from './LoginFormInput/LoginFormInput';
import LoginFormPassword from './LoginFormPassword/LoginFormPassword';

const LoginFormStyled = styled.div`
    z-index: 11;

    /* box-sizing: border-box;
    border: 1px solid black; */

    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;

`;

const LoginFormHeadingStyled = styled.div`
    padding-top: 10vh;
    padding-bottom: 15vh;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const LoginForm = () => {
  return <LoginFormStyled>
        <LoginFormHeadingStyled>
            Log in to account
        </LoginFormHeadingStyled>
        <LoginFormInput />
        <LoginFormPassword />
  </LoginFormStyled>
}

export default LoginForm