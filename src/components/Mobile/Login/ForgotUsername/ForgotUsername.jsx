import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { redirectToLogin } from '../../../../reduxStore/authenticationPage/authenticationPageAction';

import bounceOutBallAnimation from '../../../../animation/bounceOutBall';

const ForgetUsernameStyled = styled.div`

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
const ForgetUsername = () => {
	console.log( 'forget-username');
    const dispatch = useDispatch();
	return (
		<ForgetUsernameStyled >
				ForgetUsername
				<input type="text" placeholder='email' />
				<div onClick={ () => dispatch( redirectToLogin() ) } >
					back
				</div>
				<div onClick={ () => dispatch( redirectToLogin()) } > 
					Click 
				</div>
		</ForgetUsernameStyled>
	);
}

export default ForgetUsername;