import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { 
    LOGIN,
    MAINPAGE, 
    LOADING 
} from '../../reduxStore/page/pageTypes';

import Loading from './Loading/Loading';
import Mainpage from './Mainpage/Mainpage';
import Login from './Login/Login';

const MobileStyle = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #fcc;
`;

const Mobile = () => {
    const { mobilePageStat } = useSelector( state => state.page );
    
    return <MobileStyle>
        {
            mobilePageStat === LOADING  ? <Loading  />  :
            mobilePageStat === MAINPAGE ? <Mainpage  /> :
            mobilePageStat === LOGIN    ? <Login  />    :
            undefined
        }
    </MobileStyle>;
}

export default Mobile;