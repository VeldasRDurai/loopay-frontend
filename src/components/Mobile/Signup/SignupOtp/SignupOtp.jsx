import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoCaretBackCircleSharp } from "react-icons/io5";

import SignupOtpFormInput from './SignupOtpFormInput/SignupOtpFormInput';
import SignupButton from '../SignupButton/SignupButton';

import { 
	redirectToPersonalDetails,
	redirectToSignup
} from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';
import {
	profileSignUpVerification
} from '../../../../reduxStore/profile/profileActions';

import LoadingOver from '../../../../components/Mobile/Loading/LoadingOver';

import slideInRight from '../../../../animation/slideInRight';
import { fetchAPIPost } from '../../../../functions/fetchAPI';

const SignupOtpStyled = styled.div`

	z-index: 20;
	
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	/* background-color:#282b32; */
	background-color: black;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const SignupOtpBackStyled = styled.div`
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
const SignupOtpHeadingStyled = styled.div`
	padding: 3vh 0 15vh 0 ;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const SignupOtp = () => {
    console.log( 'signup-otp');
	const dispatch = useDispatch();
	const { email } = useSelector(state => state.profile );
	const [ verificationCode, setverificationCode ] = useState(undefined);
    const [ loadingOver, setLoadingOver ] = useState(false);
	const [ showWarning, setShowWarning ] = useState(false);
	const onClick = async () => {
		try{
            setLoadingOver(true);
            const response = await fetchAPIPost(
                `${process.env.REACT_APP_BACKEND_DEVELOPMENT_URL}/signup/verification`,
                { email, verificationCode });
            console.log( response );
            const result = await response.json();
            console.log( result );
            if( response.ok ){
                dispatch( profileSignUpVerification() );
                dispatch( redirectToPersonalDetails() );
				// dispatch( redirectToSignup() );
            } else if ( result.errorNo !== 0 ){
                // toast
				setShowWarning(true);
				window.alert( result.errorMessage );
            } else {
                window.alert("Internal Server error");
            }
        } catch (e){ 
            console.log(e); 
        } finally{ 
            setLoadingOver(false); 
        }
	}
	return <SignupOtpStyled>
		{ loadingOver && <LoadingOver /> }
		<SignupOtpBackStyled> 
			<BackButtonStyled 
				onClick={ () => dispatch(redirectToSignup()) } >
				<IoCaretBackCircleSharp />
			</BackButtonStyled>
		</SignupOtpBackStyled>
		<SignupOtpHeadingStyled>
			Sign Up Verification
		</SignupOtpHeadingStyled>
		<SignupOtpFormInput 
			showWarning={showWarning}
			setverificationCode={setverificationCode} />
		<SignupButton disabled={ String(verificationCode).length !== 6 }
			onClick={onClick}/>
	</SignupOtpStyled> ;
}

export default SignupOtp