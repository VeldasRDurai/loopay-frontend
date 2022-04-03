import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';
// import { redirectToMainpage } from '../../../reduxStore/page/pageActions/mainpageAction';

import timeOut  from '../../../functions/timeOut';


const Loading = () => {
  const dispatch = useDispatch();
  useEffect( () => {
      const userAuthentication = async () => {
          await timeOut(10);
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