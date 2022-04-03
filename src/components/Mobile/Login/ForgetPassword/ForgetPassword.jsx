import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { FORGET_PASSWORD_OTP } from '../../../../reduxStore/page/pageTypes'

import { 
	redirectToLogin, 
	redirectToForgetPasswordOtp 
} from '../../../../reduxStore/page/pageActions/loginAction';

// import bounceOutBallAnimation from '../../../../animation/bounceOutBall';

import ForgetPasswordOtp from './ForgetPasswordOtp/ForgetPasswordOtp';

// animation: ${ 
// 	({forgetPasswordClick}) => 
// 		bounceOutBallAnimation(forgetPasswordClick) } 
// 		0.8s ease-in-out alternate both;
const ForgetPasswordStyled = styled.div`
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:blue;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const ForgetPassword = () => {
	console.log( 'forget-password' );
	const dispatch = useDispatch();
	const { 
		forgetPasswordPageStat, 
		// forgetPasswordClick 
	} = useSelector( state => state.page );

	return (
		<ForgetPasswordStyled 
			// forgetPasswordClick={forgetPasswordClick} 
			>
				ForgetPassword
				<input type="text" placeholder='email' />
				<div onClick={ () => dispatch( redirectToLogin() ) } >
					back
				</div>
				<div onClick={ event => dispatch( redirectToForgetPasswordOtp(
					// {
					// 	clientX: event.clientX,
					// 	clientY: event.clientY
					// }
				)) } > 
					Click 
				</div>
			{ forgetPasswordPageStat === FORGET_PASSWORD_OTP && <ForgetPasswordOtp /> }
		</ForgetPasswordStyled>
	);
}

export default ForgetPassword;