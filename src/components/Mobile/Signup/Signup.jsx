import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// import { 
//     SIGNUP_OTP, 
//     SIGNUP_PERSONAL_DETAILS 
// } from '../../../reduxStore/page/pageTypes';
import { REDIRECT_TO_SIGNUP_OTP } from '../../../reduxStore/authenticationPage/authenticationPageTypes';
// import { redirectToSignupOtp  } from '../../../reduxStore/page/pageActions/signupAction';
// import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';
import { 
    redirectToSignupOtp,
    redirectToLogin
} from '../../../reduxStore/authenticationPage/authenticationPageAction';

import SignupOtp from './SignupOtp/SignupOtp';
// import SignupPersonalDetails from './SignupPersonalDetails/SignupPersonalDetails';

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

    dispatch( redirectToLogin() );

    const { signupPageState } = useSelector( state => state.authenticationPage );
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
            signupPageState === REDIRECT_TO_SIGNUP_OTP ? <SignupOtp /> :
            // signupPageStat === SIGNUP_PERSONAL_DETAILS ?
            //     <SignupPersonalDetails /> :
            undefined
        }
    </SignupStyled>;
}

export default Signup;