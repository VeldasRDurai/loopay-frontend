import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// import { redirectToLogin } from '../../../../../../reduxStore/page/pageActions/loginAction';
import { redirectToLoading } from '../../../../../../reduxStore/authenticationPage/authenticationPageAction';

import bounceOutBallAnimation from '../../../../../../animation/bounceOutBall';

const NewPasswordStyled = styled.div`
	position: absolute;
	animation: ${bounceOutBallAnimation} 0.4s ease-in-out forwards;
	top:0;bottom:0;left:0;right:0;
	background-color:yellow;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const NewPassword = () => {
	console.log( 'new-password' );
	const dispatch = useDispatch();

	return (
		<NewPasswordStyled>
				newPassword
                <input type="password" placeholder='new passsword' />
				<div onClick={ () => dispatch( redirectToLoading() ) } >
					click
				</div>
                <div onClick={ () => dispatch( redirectToLoading() ) } >
					back
				</div>
		</NewPasswordStyled>
	)
}

export default NewPassword;