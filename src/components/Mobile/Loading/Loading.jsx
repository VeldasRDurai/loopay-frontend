import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';
// import { redirectToMainpage } from '../../../reduxStore/page/pageActions/mainpageAction';
import { 
  redirectToLogin,
  // redirectToMainpage
} from '../../../reduxStore/authenticationPage/authenticationPageAction';


import timeOut  from '../../../functions/timeOut';

const Loading = () => {
  console.log('Loading');
  const dispatch = useDispatch();
  useEffect( () => {
      const userAuthentication = async () => {
          await timeOut(20);
          dispatch( redirectToLogin() );
          // dispatch( redirectToMainpage() );
      } 
      userAuthentication();
  },[]);
  return (
    <div>Loading...</div>
  )
}

export default Loading