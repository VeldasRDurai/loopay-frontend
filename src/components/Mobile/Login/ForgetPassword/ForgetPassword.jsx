import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


import { 
	redirectToLogin, 
	redirectToForgetPasswordOtp 
} from '../../../../reduxStore/page/pageActions/loginAction';

import ForgetPasswordOtp from './ForgetPasswordOtp/ForgetPasswordOtp';
import { FORGET_PASSWORD_OTP } from '../../../../reduxStore/page/pageTypes'

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
	const { forgetPasswordPageStat } = useSelector( state => state.page );
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
			{ forgetPasswordPageStat === FORGET_PASSWORD_OTP && <ForgetPasswordOtp /> }
		</ForgetPasswordStyled>
	);
}

export default ForgetPassword;