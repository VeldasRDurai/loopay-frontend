import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';


import { 
    redirectToForgetPassword,
    redirectToNewPassword
} from '../../../../../reduxStore/page/pageActions/loginAction';


import NewPassword from './NewPassword/NewPassword';
import { NEW_PASSWORD } from '../../../../../reduxStore/page/pageTypes'

const ForgetPasswordOtpStyled = styled.div`
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
	const { forgetPasswordOtpPageStat } = useSelector( state => state.page );

	return (
		<ForgetPasswordOtpStyled>
				ForgetPasswordOtp
				<input type="text" placeholder='OTP' />
				<div onClick={ () => dispatch( redirectToForgetPassword() ) } >
					back
				</div>
				<div onClick={ event => dispatch( redirectToNewPassword()) } > 
					Click 
				</div>
            { forgetPasswordOtpPageStat === NEW_PASSWORD && <NewPassword /> }
		</ForgetPasswordOtpStyled>
	)
}

export default ForgetPasswordOtp;