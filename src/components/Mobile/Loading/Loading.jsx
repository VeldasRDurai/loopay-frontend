import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import './Loading.css'

// import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';
// import { redirectToMainpage } from '../../../reduxStore/page/pageActions/mainpageAction';
import { 
  // redirectToForgetUsername,
  // redirectToSignup
  // redirectToSignupOtp,
  redirectToLogin,
  // redirectToNewPassword
  // redirectToMainpage
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction';


import timeOut  from '../../../functions/timeOut';

const LoadingStyled = styled.div`
	z-index:1000;
	/* Should have the highest z-index */
    height: 100vh;
    width: 100vw;
    background-color: #f1c40f;
	overflow: hidden;
`;

const Loading = () => {
  console.log('Loading');
  const dispatch = useDispatch();
  useEffect( () => {
      const userAuthentication = async () => {
          await timeOut(2000);
          // dispatch( redirectToForgetUsername() );
          // dispatch( redirectToSignup() );
          // dispatch( redirectToSignupOtp() );
          dispatch( redirectToLogin() );
          // dispatch( redirectToNewPassword() );
          // dispatch( redirectToMainpage() );
      } 
      userAuthentication();
  },[]);
  return (
	  <LoadingStyled>
		<div className='Loading'>
			<div className='body'>
				<span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<div className='base'>
					<span></span>
					<div className='face'></div>
				</div>
			</div>
			<div className='longfazers'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	  </LoadingStyled>
  )
}

export default Loading