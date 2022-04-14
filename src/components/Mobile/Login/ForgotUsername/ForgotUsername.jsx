import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoCaretBackCircleSharp } from "react-icons/io5";

import { redirectToLogin } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import ForgotUsernameFormInput from './ForgotUsernameFormInput/ForgotUsernameFormInput';
import LoginButton from '../LoginButton/LoginButton';

import slideInRight from '../../../../animation/slideInRight';

const SignupOtpStyled = styled.div`

	z-index: 20;
	
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	color: #282b32;
`;

const SignupOtpBackStyled = styled.div`
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
const SignupOtpHeadingStyled = styled.div`
	padding: 3vh 0 15vh 0 ;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const ForgetUsername = () => {
    console.log( 'signup-otp');
	const dispatch = useDispatch();
	return <SignupOtpStyled>
		<SignupOtpBackStyled> 
			<BackButtonStyled 
				onClick={ () => dispatch(redirectToLogin()) } >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</SignupOtpBackStyled>
		<SignupOtpHeadingStyled>
			Forget Username
		</SignupOtpHeadingStyled>
		<ForgotUsernameFormInput />
		<LoginButton onClick={ () => dispatch(redirectToLogin()) }/>
	</SignupOtpStyled> ;
}

export default ForgetUsername;