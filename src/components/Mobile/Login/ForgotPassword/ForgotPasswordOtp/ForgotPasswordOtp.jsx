import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoCaretBackCircleSharp } from "react-icons/io5";

import {
	redirectToNewPassword,
	redirectToForgetPassword
} from '../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import { loginForgotPasswordInitial } from '../../../../../reduxStore/loginState/forgotPasswordState/forgotPasswordStateAction';

import {
	loginForgotPasswordOtpInitial,
	loginForgotPasswordOtpNoWarning,
	loginForgotPasswordOtpShowWarning,
} from '../../../../../reduxStore/loginState/forgotPasswordOtpState/forgotPasswordOtpStateAction';
import { REDIRECT_TO_NEW_PASSWORD } from '../../../../../reduxStore/page/authenticationPage/authenticationPageTypes';	

import LoginButton from '../../LoginButton/LoginButton';
import ForgotPasswordOtpFormInput from './ForgotPasswordOtpFormInput/ForgotPasswordOtpFormInput';
import NewPassword from './NewPassword/NewPassword';

import LoadingOver from '../../../Loading/LoadingOver';
import slideInRight from '../../../../../animation/slideInRight';
import { fetchAPIPost } from '../../../../../functions/fetchAPI';

const LoginPasswordStyled = styled.div`

	z-index: 30;
	
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

const ForgetPasswordOtp = () => {
	console.log( 'forget-password-otp' );
	const dispatch = useDispatch();
	const { forgotPasswordOtpPageState } = useSelector( state => state.authenticationPage );
    const { forgotPasswordEmail } = useSelector( state=> state.forgotPasswordState )
	const { forgotPasswordOtp } = useSelector( state => state.forgotPasswordOtpState );

	const [ loadingOver, setLoadingOver ] = useState(false);
	const onClick = async () => {
		try{
            setLoadingOver(true);
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/forgot/password/verification`, { 
					email:forgotPasswordEmail,
					verificationCode : forgotPasswordOtp
				});
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ){
				dispatch( loginForgotPasswordOtpNoWarning() );
				dispatch(redirectToNewPassword());
				dispatch(loginForgotPasswordOtpInitial());
            } else if ( result.errorNo !== 0 ){
                window.alert(result.errorMessage);
				dispatch( loginForgotPasswordOtpShowWarning() );
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
				onClick={ () => {
					dispatch( redirectToForgetPassword() );
					dispatch( loginForgotPasswordInitial() );
				}} >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</LoginPasswordBackStyled>
		<LoginPasswordHeadingStyled>
			Forget Password verification
		</LoginPasswordHeadingStyled>
		<ForgotPasswordOtpFormInput />
		<LoginButton onClick={onClick}
			disabled={ !forgotPasswordOtp } />
		{ forgotPasswordOtpPageState === REDIRECT_TO_NEW_PASSWORD && <NewPassword /> }
	</LoginPasswordStyled> ;
}

export default ForgetPasswordOtp;