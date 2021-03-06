import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoCaretBackCircleSharp } from "react-icons/io5";

import {
	redirectToLogin,
	redirectToForgetPasswordOtp
} from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

// import { loginForgotPasswordInitial } from '../../../../reduxStore/loginState/forgotPasswordState/forgotPasswordStateAction';

import { REDIRECT_TO_FORGET_PASSWORD_OTP } from '../../../../reduxStore/page/authenticationPage/authenticationPageTypes';

import LoginButton from '../LoginButton/LoginButton';
import ForgetPasswordOtp from './ForgotPasswordOtp/ForgotPasswordOtp';
import ForgotPasswordFormInput from './ForgotPasswordFormInput/ForgotPasswordFormInput';

import LoadingOver from '../../Loading/LoadingOver';

import { fetchAPIPost } from '../../../../functions/fetchAPI';
import slideInRight from '../../../../animation/slideInRight';

const LoginPasswordStyled = styled.div`

	z-index: 20;
	
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	color: #282b32;
	background-color:white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const LoginPasswordBackStyled = styled.div`
	height: 10vh;
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const BackButtonStyled = styled.div`
	height: 8vh;
    width : 8vh;
    font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LoginPasswordHeadingStyled = styled.div`
	padding: 3vh 0 15vh 0 ;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const ForgetPassword = () => {
    console.log( 'forget-password');
	const dispatch = useDispatch();
	const { forgotPasswordPageState } = useSelector( state => state.authenticationPage );
    const { 
		forgotPasswordEmail,
		forgotPasswordEmailShowWarning 
	} = useSelector( state => state.forgotPasswordState );

	const [ loadingOver, setLoadingOver ] = useState(false);
	const onClick = async () => {
        try{
            setLoadingOver(true);
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/forgot/password`,
                { email:forgotPasswordEmail });
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ){
				dispatch( redirectToForgetPasswordOtp() )
            } else if ( result.errorNo !== 0 ){
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
	return <LoginPasswordStyled>
		{ loadingOver && <LoadingOver /> }
		<LoginPasswordBackStyled> 
			<BackButtonStyled 
				onClick={ () => dispatch(redirectToLogin()) } >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</LoginPasswordBackStyled>
		<LoginPasswordHeadingStyled>
			Forget Password 
		</LoginPasswordHeadingStyled>
		<ForgotPasswordFormInput />
		<LoginButton onClick={onClick}
			disabled={ 
				!forgotPasswordEmail ||
		 		forgotPasswordEmailShowWarning
			} />
		{ forgotPasswordPageState === REDIRECT_TO_FORGET_PASSWORD_OTP && <ForgetPasswordOtp /> }
	</LoginPasswordStyled> ;
}

export default ForgetPassword