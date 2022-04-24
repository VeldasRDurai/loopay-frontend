import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoCaretBackCircleSharp } from "react-icons/io5";

import {
	NEW_PASSWORD_MEDIUM,
	NEW_PASSWORD_STRONG
} from '../../../../../../reduxStore/loginState/newPasswordState/newPasswordStateTypes';
import {
	redirectToForgetPassword,
	redirectToLoading
} from '../../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import {
	newPasswordInitial
} from '../../../../../../reduxStore/loginState/newPasswordState/newPasswordStateAction';

import LoadingOver from '../../../../Loading/LoadingOver';
import LoginButton from '../../../LoginButton/LoginButton';
import NewPasswordForm from './NewPasswordForm/NewPasswordForm';

import slideInRight from '../../../../../../animation/slideInRight';
import { fetchAPIPost } from '../../../../../../functions/fetchAPI';

const LoginPasswordStyled = styled.div`

	z-index: 40;
	
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	color: #282b32;
	background-color:white;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const LoginPasswordBackStyled = styled.div`
	height: 10vh;
	width: 100vw;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const BackButtonStyled = styled.div`
	height: 8vh;
    width : 8vh;
    font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LoginPasswordHeadingStyled = styled.div`
	padding: 3vh 0 15vh 0 ;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const NewPassword = () => {
	console.log( 'new-password' );
	const dispatch = useDispatch();

	const { 
		password,
		passwordShowWarning 
	} = useSelector( state => state.newPasswordState );
	const [ loadingOver, setLoadingOver ] = useState(false);
	const onClick = async () => { 
		if( passwordShowWarning === NEW_PASSWORD_STRONG ||
			passwordShowWarning === NEW_PASSWORD_MEDIUM ){
			dispatch( newPasswordInitial())
			dispatch( redirectToLoading() ) 
			try{
				setLoadingOver(true);
				const response = await fetchAPIPost(
					`${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/forgot/password/verification/new`, 
						{ password });
				console.log( response );
				const result = await response.json();
				console.log( result );
				if( response.ok ){
					dispatch( redirectToLoading() );
				} else if ( result.errorNo !== 0 ){
					window.alert(result.errorMessage);
				} else {
					window.alert("Internal Server error");
				}
			} catch (e){ 
				console.log(e); 
			} finally{ 
				setLoadingOver(false); 
			}
		}
	}
	return <LoginPasswordStyled>
		{ loadingOver && <LoadingOver /> }
		<LoginPasswordBackStyled> 
			<BackButtonStyled 
				onClick={ () => dispatch( redirectToForgetPassword() ) } >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</LoginPasswordBackStyled>
		<LoginPasswordHeadingStyled>
			New Password
		</LoginPasswordHeadingStyled>
		<NewPasswordForm />
		<LoginButton onClick={onClick}
			disabled={ !( 
				passwordShowWarning === NEW_PASSWORD_STRONG ||
				passwordShowWarning === NEW_PASSWORD_MEDIUM 
			)} />
	</LoginPasswordStyled> ;
}

export default NewPassword;