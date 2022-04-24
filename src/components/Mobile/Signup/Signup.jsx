import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { REDIRECT_TO_SIGNUP_OTP } from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';
import { 
    LOGIN_PASSWORD_STRONG, 
    LOGIN_PASSWORD_MEDIUM 
} from '../../../reduxStore/loginState/loginStateTypes'
import { redirectToSignupOtp } from '../../../reduxStore/page/authenticationPage/authenticationPageAction';
import { 
    loginRaiseCurtain,
    loginInitial
} from '../../../reduxStore/loginState/loginStateAction';
import { profileSignUp } from '../../../reduxStore/profile/profileActions'


import Curtain from './SignupComponents/Curtain/Curtain';
import SignupForm from './SignupComponents/SignupForm/SignupForm';
import SignupButton from './SignupButton/SignupButton';
import OrContinueWith from './SignupComponents/OrContinueWith/OrContinueWith';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import TermsAndConditions from './SignupComponents/TermsAndConditions/TermsAndConditions';
import AlreadyAccount from './SignupComponents/AlreadyAccount/AlreadyAccount';

import SignupOtp from './SignupOtp/SignupOtp';
import LoadingOver from '../Loading/LoadingOver';

import { fetchAPIPost } from '../../../functions/fetchAPI';

const SignupStyled = styled.div`
	z-index: 10;

    height: 100vh;
    width: 100vw;
    color: white;
    /* background-color: #282b32; */
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Signup = () => {
    console.log( 'signup');
    const dispatch = useDispatch();
    useEffect( () => {
        return () => dispatch( loginInitial() );
    }, []);
    const { signupPageState } = useSelector( state => state.authenticationPage );
    const { 
        raiseCurtain,
        email,
        password,
        emailShowWarning,
        passwordShowWarning,
    } = useSelector( state => state.loginState );
    
    const [ loadingOver, setLoadingOver ] = useState(false);
    const signup = async () => {
        try{
            setLoadingOver(true);
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/signup`,
                { email, password });
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ){
                dispatch( profileSignUp(result) );
                dispatch( loginInitial() );
                dispatch(redirectToSignupOtp());
            } else if ( result.errorNo === 1 ){
                // toast
                window.alert("Email already taken");
            } else {
                window.alert("Internal Server error");
            }
        } catch (e){ 
            console.log(e); 
        } finally{ 
            setLoadingOver(false); 
        }
    }
    const onClick= async () => !raiseCurtain ? 
        dispatch( loginRaiseCurtain() ) : await signup()

    return <SignupStyled>
            { loadingOver && <LoadingOver /> }
            <Curtain />
            <SignupForm />
            <SignupButton onClick={onClick} 
                text={'Sign Up with Email'}
                disabled={
                    raiseCurtain && ( !email ||  emailShowWarning ||
                        !( passwordShowWarning === LOGIN_PASSWORD_STRONG ||
                            passwordShowWarning === LOGIN_PASSWORD_MEDIUM ))
                } />
            <OrContinueWith />
            <GoogleSignin />
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