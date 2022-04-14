import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoCaretBackCircleSharp } from "react-icons/io5";

// import { redirectToSignupPersonalDetails } from '../../../../reduxStore/page/pageActions/signupAction';
// import { redirectToSignup } from '../../../../reduxStore/page/pageActions/signupAction';

import SignupOtpFormInput from './SignupOtpFormInput/SignupOtpFormInput';
import SignupButton from '../SignupButton/SignupButton';

import { 
	redirectToPersonalDetails,
	redirectToSignup
} from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import slideInRight from '../../../../animation/slideInRight';

const SignupOtpStyled = styled.div`

	z-index: 20;
	
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:#282b32;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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

const SignupOtp = () => {
    console.log( 'signup-otp');
	const dispatch = useDispatch();
	return <SignupOtpStyled>
		<SignupOtpBackStyled> 
			<BackButtonStyled 
				onClick={ () => dispatch(redirectToSignup()) } >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</SignupOtpBackStyled>
		<SignupOtpHeadingStyled>
			Sign Up Verification
		</SignupOtpHeadingStyled>
		<SignupOtpFormInput />
		<SignupButton onClick={ () => dispatch(redirectToPersonalDetails()) }/>
	</SignupOtpStyled> ;
}

export default SignupOtp