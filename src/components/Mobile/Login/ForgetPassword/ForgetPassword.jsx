import React
// , { useEffect }
 from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
	redirectToLogin,
	redirectToForgetPasswordOtp
} from '../../../../reduxStore/authenticationPage/authenticationPageAction';
// import { 
// 	redirectToLogin, 
// 	redirectToForgetPasswordOtp 
// } from '../../../../reduxStore/page/pageActions/loginAction';

import ForgetPasswordOtp from './ForgetPasswordOtp/ForgetPasswordOtp';
import { REDIRECT_TO_FORGET_PASSWORD_OTP } from '../../../../reduxStore/authenticationPage/authenticationPageTypes';
// import { FORGET_PASSWORD_OTP } from '../../../../reduxStore/page/pageTypes'

import bounceOutBallAnimation from '../../../../animation/bounceOutBall';

const ForgetPasswordStyled = styled.div`

	z-index: 20;

	animation: ${bounceOutBallAnimation} 0.4s ease-in-out forwards;
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:blue;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const ForgetPassword = () => {
	console.log( 'forget-password');
	const dispatch = useDispatch();
	const { forgotPasswordPageState } = useSelector( state => state.authenticationPage );
	// useEffect( () => {
	// 	return( (() => {

	// 	})() );
	// } )
	return (
		<ForgetPasswordStyled >
				ForgetPassword
				<input type="text" placeholder='email' />
				<div onClick={ () => dispatch( redirectToLogin() ) } >
					back
				</div>
				<div onClick={ () => dispatch( redirectToForgetPasswordOtp()) } > 
					Click 
				</div>
			{ forgotPasswordPageState === REDIRECT_TO_FORGET_PASSWORD_OTP && <ForgetPasswordOtp /> }
		</ForgetPasswordStyled>
	);
}

export default ForgetPassword;