import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// import { 
//     LOGIN,
//     SIGNUP,
//     MAINPAGE, 
//     LOADING 
// } from '../../reduxStore/page/pageTypes';

import {
    REDIRECT_TO_LOADING,
    REDIRECT_TO_LOGIN,
    REDIRECT_TO_SIGNUP,
    REDIRECT_TO_MAINPAGE,
    REDIRECT_TO_PERSONAL_DETAILS,
} from '../../reduxStore/authenticationPage/authenticationPageTypes'

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
    // const { mobilePageStat } = useSelector( state => state.page );
    const { mobilePageState } = useSelector( state => state.authenticationPage );
    console.log('mobile');
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