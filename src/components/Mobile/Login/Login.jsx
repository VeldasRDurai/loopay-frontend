import React, { 
    useState
} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    redirectToSignup,
    redirectToLoading,
    // redirectToPersonalDetails
} from '../../../reduxStore/authenticationPage/authenticationPageAction';
import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/authenticationPage/authenticationPageTypes';

import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';

import ForgetPassword from './ForgetPassword/ForgetPassword';
import ForgotUsername from './ForgotUsername/ForgotUsername';

const LoginStyled = styled.div`

    z-index: 10;

    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
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
`;
const LoginSmallText = styled.div`
    color:#a2a1b0;
    font-size: 10px;
    font-family: 'Montserrat Alternates', sans-serif;
    width: 100vw;
    padding: 0px 20vw;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > span {
        color: black;
        font-weight: 900;
    }
`;

const Login = () => {
    console.log('login');
    const dispatch = useDispatch();
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const [ raiseCurtain, setRaiseCurtain ] = useState(false);

    return(
        <LoginStyled>
            <Curtain 
                raiseCurtain={raiseCurtain}
                setRaiseCurtain={setRaiseCurtain} />
            <LoginForm />
            <LoginButtonStyled onClick={() =>
                raiseCurtain ? dispatch(redirectToLoading()) : setRaiseCurtain(true)} >
                Login with Email
            </LoginButtonStyled>
            <LoginSmallText>
                or continue with
            </LoginSmallText>
            <div> Sign in with google </div>
            <div></div>
            <LoginSmallText>
                By continuing, you agree to Loopay's
                <span className='bold'> Terms of Use and Privacy Policy. </span>
            </LoginSmallText>

            <LoginSmallText style={{backgroundColor:'#F5F5F5', height:'10vh'}} >
                New ? Create an account  
                <span className='bold' 
                    onClick={()=> dispatch( redirectToSignup() ) } > 
                    Sign Up
                </span>
            </LoginSmallText>
            { 
                loginPageState === REDIRECT_TO_FORGET_PASSWORD ? <ForgetPassword /> :
                loginPageState === REDIRECT_TO_FORGET_USERNAME ? <ForgotUsername /> :
                undefined
            }
        </LoginStyled>
    );
}

export default Login