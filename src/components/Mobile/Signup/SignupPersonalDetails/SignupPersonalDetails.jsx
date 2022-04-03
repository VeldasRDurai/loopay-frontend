import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { redirectToLoading } from '../../../../reduxStore/page/pageActions/mainpageAction';
import { redirectToLogin } from '../../../../reduxStore/page/pageActions/loginAction';

const SignupPersonalDetailsStyled = styled.div`
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:mediumseagreen;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const SignupPersonalDetails = () => {
    console.log( 'signup-personal-details');
	const dispatch = useDispatch();
	return <SignupPersonalDetailsStyled>
		SignupPersonalDetails
		<input type="text" placeholder='Details' />
		<div onClick={ () => dispatch( redirectToLoading() ) } > Click </div>
		<div onClick={ () => dispatch( redirectToLogin() ) } > Back </div>
	</SignupPersonalDetailsStyled> ;
}

export default SignupPersonalDetails