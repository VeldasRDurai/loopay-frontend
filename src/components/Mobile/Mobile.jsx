import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import {
    REDIRECT_TO_LOADING,
    REDIRECT_TO_LOGIN,
    REDIRECT_TO_SIGNUP,
    REDIRECT_TO_MAINPAGE,
    REDIRECT_TO_PERSONAL_DETAILS,
} from '../../reduxStore/page/authenticationPage/authenticationPageTypes'

import Loading from './Loading/Loading';
import Mainpage from './Mainpage/Mainpage';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import PersonalDetails from './PersonalDetails/PersonalDetails';

const MobileStyle = styled.div`
    z-index:0;
    height: 100vh;
    width: 100vw;
    background-color: #fcc;
`;
const Mobile = () => {
    console.log('mobile');
    const { mobilePageState } = useSelector( state => state.authenticationPage );
    return <MobileStyle>
        {
            mobilePageState === REDIRECT_TO_LOADING  ? <Loading />  :
            mobilePageState === REDIRECT_TO_MAINPAGE ? <Mainpage /> :
            mobilePageState === REDIRECT_TO_LOGIN    ? <Login />    :
            mobilePageState === REDIRECT_TO_SIGNUP   ? <Signup />   :
            mobilePageState === REDIRECT_TO_PERSONAL_DETAILS ? <PersonalDetails />   :
            undefined
        }
    </MobileStyle>;
}

export default Mobile;