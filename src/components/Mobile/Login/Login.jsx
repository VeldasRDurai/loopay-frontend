import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    REDIRECT_TO_FORGET_PASSWORD,
    REDIRECT_TO_FORGET_USERNAME
} from '../../../reduxStore/page/authenticationPage/authenticationPageTypes';
import { 
    LOGIN_PASSWORD_STRONG, 
    LOGIN_PASSWORD_MEDIUM 
} from '../../../reduxStore/loginState/loginStateTypes'
import { 
    loginRaiseCurtain,
    loginInitial
} from '../../../reduxStore/loginState/loginStateAction';
import { 
    redirectToMainpage ,
    redirectToPersonalDetails,
    // redirectToLoading
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction'
import { profileLogIn } from '../../../reduxStore/profile/profileActions';

import { fetchAPIPost } from '../../../functions/fetchAPI';

import Curtain from './LoginComponents/Curtain/Curtain';
import LoginForm from './LoginComponents/LoginForm/LoginForm';
import LoginButton from './LoginButton/LoginButton';
import OrContinueWith from './LoginComponents/OrContinueWith/OrContinueWith';
import GoogleSignin from './GoogleSignin/GoogleSignin';
import TermsAndConditions from './LoginComponents/TermsAndConditions/TermsAndConditions';
import CreateAccount from './LoginComponents/CreateAccount/CreateAccount';

import ForgetPassword from './ForgotPassword/ForgotPassword';
import ForgotUsername from './ForgotUsername/ForgotUsername';

import LoadingOver from '../Loading/LoadingOver';

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

const Login = () => {
    console.log('login');
    const dispatch = useDispatch();
    useEffect( () => {
        return () => dispatch( loginInitial() );
    }, []);
    const { loginPageState } = useSelector( state => state.authenticationPage );
    const { 
        raiseCurtain,
        email,
        emailShowWarning,
        password,
        passwordShowWarning,
    } = useSelector( state => state.loginState );


    const [ loadingOver, setLoadingOver ] = useState(false);
    const login = async () => {
        try{
            setLoadingOver(true);
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/login`,
                { email, password });
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ){
                dispatch( profileLogIn(result) );
                dispatch( loginInitial() );
                result.gotPersonalDetails ?
                    dispatch(redirectToMainpage() ):
                    dispatch( redirectToPersonalDetails() )
            } else if ( result.errorNo !== 0 ){
                // toast
                window.alert(result.errorMessage);
            } else {
                window.alert("Internal Server error");
            }
        } catch (e){ 
            console.log(e); 
        } finally{ 
            setLoadingOver(false); 
        }
    }
    const onClick= () => !raiseCurtain ? 
        dispatch( loginRaiseCurtain() ) : login()

    return(
        <LoginStyled>
            { loadingOver && <LoadingOver /> }
            <Curtain />
            <LoginForm />
            <LoginButton onClick={onClick} 
                text={'Login with Email'}
                disabled={
                    raiseCurtain && ( !email ||  emailShowWarning ||
                        !( passwordShowWarning === LOGIN_PASSWORD_STRONG ||
                            passwordShowWarning === LOGIN_PASSWORD_MEDIUM ))
                } />
            <OrContinueWith />
            <GoogleSignin />
            <div></div>
            <TermsAndConditions />
            <CreateAccount />
            { 
                loginPageState === REDIRECT_TO_FORGET_PASSWORD ? <ForgetPassword /> :
                loginPageState === REDIRECT_TO_FORGET_USERNAME ? <ForgotUsername /> :
                undefined
            }
        </LoginStyled>
    );
}

export default Login;