import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { REDIRECT_TO_SIGNUP_OTP } from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';
import { 
    redirectToSignupOtp,
    // redirectToLogin
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction';

import { LOGIN_PASSWORD_STRONG, LOGIN_PASSWORD_MEDIUM } from '../../../reduxStore/loginState/loginStateTypes'
import { 
    loginRaiseCurtain,
    loginInitial
} from '../../../reduxStore/loginState/loginStateAction';

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
    const [ loadingOver, setLoadingOver ] = useState(false);
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

    const signup = async () => {
        try{
            // qq@qq.qq
            // Q!1qqqqqqqqqqq
            setLoadingOver(true);
            const res = await fetchAPIPost('https://jsonplaceholder.typicode.com/posts',{ email, password });
            setLoadingOver(false);
            console.log( res );
            if( res.ok ){
                console.log( res.json() );
                dispatch( loginInitial() );
                dispatch(redirectToSignupOtp());
            }
        } catch (e){ console.log(e); }
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