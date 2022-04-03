import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';

// import { redirectToLoading } from '../../../reduxStore/page/pageActions/mainpageAction';

const LoginStyled = styled.div`
    height: 100%;
    width: 100%;
    background-color: greenyellow;
`

const Login = () => {
    // const dispatch = useDispatch();
  return (
      // onClick={() => dispatch( redirectToLoading() ) }
    <LoginStyled>
        Login Page
    </LoginStyled>
  )
}

export default Login