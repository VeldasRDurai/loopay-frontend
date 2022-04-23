import React from 'react';
import styled from 'styled-components';

import LoginFormInput from './SignupFormInput/SignupFormInput';
import LoginFormPassword from './SignupFormPassword/SignupFormPassword';

const SignupFormStyled = styled.div`
    z-index: 11;

    /* box-sizing: border-box;
    border: 1px solid black; */

    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    /* background-color: #282b32; */
    background-color: black;

`;

const LoginFormHeadingStyled = styled.div`
    padding-top: 10vh;
    padding-bottom: 15vh;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const SignupForm = () => {
  return <SignupFormStyled>
        <LoginFormHeadingStyled>
            Sign up to account
        </LoginFormHeadingStyled>
        <LoginFormInput />
        <LoginFormPassword />
  </SignupFormStyled>
}

export default SignupForm;