import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { redirectToLogin } from '../../../reduxStore/page/pageActions/loginAction';

import timeOut  from '../../../functions/timeOut';


const Loading = () => {
  const dispatch = useDispatch();
  useEffect( () => {
      const userAuthentication = async () => {
          await timeOut(2000);
          dispatch( redirectToLogin() );
      } 
      userAuthentication();
  },[]);
  return (
    <div>Loading</div>
  )
}

export default Loading