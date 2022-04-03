import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    SIGNUP_OTP, 
    SIGNUP_PERSONAL_DETAILS 
} from '../../../reduxStore/page/pageTypes';

import { redirectToSignupOtp  } from '../../../reduxStore/page/pageActions/signupAction';
import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';

import SignupOtp from './SignupOtp/SignupOtp';
import SignupPersonalDetails from './SignupPersonalDetails/SignupPersonalDetails';

const SignupStyled = styled.div`
	height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: purple;
`;

const Signup = () => {
    console.log( 'signup');
    const dispatch = useDispatch();
    const { signupPageStat } = useSelector( state => state.page );
    return <SignupStyled>
        <div> Signup </div>
        <input type="text" placeholder='email' />
        <input type="password" placeholder='password' />
        <div onClick={ () => dispatch( redirectToLogin() ) } > 
            Alreday have an account ? Login 
        </div>
        <div onClick={ () => dispatch( redirectToSignupOtp() ) } >
            Click 
        </div>
        { 
            signupPageStat === SIGNUP_OTP ? 
                <SignupOtp /> :
            signupPageStat === SIGNUP_PERSONAL_DETAILS ?
                <SignupPersonalDetails /> :
            undefined
        }
    </SignupStyled>;
}

export default Signup;