import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { NEW_PASSWORD } from '../../../../../reduxStore/page/pageTypes'

import { 
    redirectToForgetPassword,
    redirectToNewPassword
} from '../../../../../reduxStore/page/pageActions/loginAction';

// import bounceOutBallAnimation from '../../../../../animation/bounceOutBall';

import NewPassword from './NewPassword/NewPassword';

// animation: ${ 
//     ({forgetPasswordOtpClick}) => 
//         bounceOutBallAnimation(forgetPasswordOtpClick) } 
//         0.8s ease-in-out alternate both;	
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
	const { forgetPasswordOtpPageStat
        // , forgetPasswordOtpClick 
    } = useSelector( state => state.page );

	return (
		<ForgetPasswordOtpStyled 
            // forgetPasswordOtpClick={forgetPasswordOtpClick} 
            >
				ForgetPasswordOtp
				<input type="text" placeholder='OTP' />
				<div onClick={ () => dispatch( redirectToForgetPassword() ) } >
					back
				</div>
				<div onClick={ event => dispatch( redirectToNewPassword(
                    // {
                    // clientX: event.clientX,
                    // clientY: event.clientY
				    // }
                )) } > 
					Click 
				</div>
            { forgetPasswordOtpPageStat === NEW_PASSWORD && <NewPassword /> }
		</ForgetPasswordOtpStyled>
	)
}

export default ForgetPasswordOtp;