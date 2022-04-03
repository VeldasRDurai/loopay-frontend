import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { redirectToSignupPersonalDetails } from '../../../../reduxStore/page/pageActions/signupAction';
import { redirectToSignup } from '../../../../reduxStore/page/pageActions/signupAction';

const SignupOtpStyled = styled.div`
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:orange;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const SignupOtp = () => {
    console.log( 'signup-otp');
	const dispatch = useDispatch();
	return <SignupOtpStyled>
		SignupOtp
		<input type="text" placeholder='OTP' />
		<div onClick={ () => dispatch(redirectToSignupPersonalDetails()) } > Click </div>
		<div onClick={ () => dispatch(redirectToSignup()) } > Back </div>
	</SignupOtpStyled> ;
}

export default SignupOtp