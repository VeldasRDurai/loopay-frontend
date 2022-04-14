import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { REDIRECT_TO_SIGNUP_OTP } from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';
import { 
    redirectToSignupOtp,
    // redirectToLogin
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction';

import Curtain from './SignupComponents/Curtain/Curtain';
import SignupForm from './SignupComponents/SignupForm/SignupForm';
import SignupButton from './SignupButton/SignupButton';
import OrContinueWith from './SignupComponents/OrContinueWith/OrContinueWith';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import TermsAndConditions from './SignupComponents/TermsAndConditions/TermsAndConditions';
import AlreadyAccount from './SignupComponents/AlreadyAccount/AlreadyAccount';

import SignupOtp from './SignupOtp/SignupOtp';

const SignupStyled = styled.div`
	z-index: 10;

    height: 100vh;
    width: 100vw;
    color: white;
    background-color: #282b32;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Signup = () => {
    console.log( 'signup');
    const dispatch = useDispatch();
    const [ raiseCurtain, setRaiseCurtain ] = useState(false);

    const { signupPageState } = useSelector( state => state.authenticationPage );
    return <SignupStyled>

            <Curtain 
                raiseCurtain={raiseCurtain}
                setRaiseCurtain={setRaiseCurtain} />
            <SignupForm />
            <SignupButton text={'Sign Up with Email'}
                onClick={() => raiseCurtain ? 
                    dispatch(redirectToSignupOtp()) : setRaiseCurtain(true)} />
            <OrContinueWith />
            <GoogleSignin />
            {/* <div> Sign in with google </div> */}
            <div></div>
            <TermsAndConditions />
            <AlreadyAccount />
        { 
            signupPageState === REDIRECT_TO_SIGNUP_OTP ? <SignupOtp /> :
            undefined
        }
    </SignupStyled>;
}

export default Signup;