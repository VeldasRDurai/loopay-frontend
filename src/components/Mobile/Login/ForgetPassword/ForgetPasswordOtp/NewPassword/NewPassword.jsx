import React from 'react';
import styled from 'styled-components';
import { 
    // useSelector, 
useDispatch } from 'react-redux';

import { redirectToLogin } from '../../../../../../reduxStore/page/pageActions/loginAction';

// import bounceOutBallAnimation from '../../../../../../animation/bounceOutBall';

// animation: ${ 
//     ({newPasswordClick}) => 
//         bounceOutBallAnimation(newPasswordClick) } 
//         0.8s ease-in-out alternate both;	
const NewPasswordStyled = styled.div`
	position: absolute;
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
	// const { newPasswordClick } = useSelector( state => state.page );

	return (
		<NewPasswordStyled 
            // newPasswordClick={newPasswordClick} 
            >
				newPassword
                <input type="password" placeholder='new passsword' />
				<div onClick={ () => dispatch( redirectToLogin() ) } >
					click
				</div>
                <div onClick={ () => dispatch( redirectToLogin() ) } >
					back
				</div>
		</NewPasswordStyled>
	)
}

export default NewPassword;