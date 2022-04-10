import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
	redirectToNewPassword,
	redirectToForgetPassword
} from '../../../../../reduxStore/authenticationPage/authenticationPageAction';

// import { 
//     redirectToForgetPassword,
//     redirectToNewPassword
// } from '../../../../../reduxStore/page/pageActions/loginAction';

import NewPassword from './NewPassword/NewPassword';
import { REDIRECT_TO_NEW_PASSWORD } from '../../../../../reduxStore/authenticationPage/authenticationPageTypes';
// import { NEW_PASSWORD } from '../../../../../reduxStore/page/pageTypes'

import bounceOutBallAnimation from '../../../../../animation/bounceOutBall';

const ForgetPasswordOtpStyled = styled.div`

	z-index: 30;

	animation: ${bounceOutBallAnimation} 0.4s ease-in-out forwards;
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:red;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const ForgetPasswordOtp = () => {
	console.log( 'forget-password-otp' );
	const dispatch = useDispatch();
	const { forgotPasswordOtpPageState } = useSelector( state => state.authenticationPage );

	return (
		<ForgetPasswordOtpStyled>
				ForgetPasswordOtp
				<input type="text" placeholder='OTP' />
				<div onClick={ () => dispatch( redirectToForgetPassword() ) } >
					back
				</div>
				<div onClick={ () => dispatch( redirectToNewPassword()) } > 
					Click 
				</div>
            { forgotPasswordOtpPageState === REDIRECT_TO_NEW_PASSWORD && <NewPassword /> }
		</ForgetPasswordOtpStyled>
	)
}

export default ForgetPasswordOtp;