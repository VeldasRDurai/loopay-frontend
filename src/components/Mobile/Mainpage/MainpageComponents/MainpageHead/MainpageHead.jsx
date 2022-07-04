import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { BiBell } from "react-icons/bi";

import { redirectToNotification } from '../../mainpageActions';

const MainpageHeadStyle = styled.div`
    width : 100vw;
    height: 8vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff;
`;
const NotificationButton = styled.div`
    height: 35px;
    width: 35px;
    margin-right: 10px;
    border-radius: 30px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
const HeadMessage = styled.div`
    margin-left: 25px;
    max-width: 70vw;
    font-size: 20px;
    overflow: hidden;
`;
const biBellStyle = {
    width: '23px',
    height: '23px'
}
const GreenBall = styled.div`
    height: 7px;
    width: 7px;
    border: 1px solid black;
    border-radius: 3px;
    position: absolute;
    background-color: #00ff00;
    top: 25%;
    left: 20%;
`

const MainpageHead = () => {
    const dispatch = useDispatch();
    const {
        email,
        notifications
    } = useSelector( state => state.mainpageReducer );
    const [ showGreenBall, setShowGreenBall ] = useState(false);
    
    useEffect( () => {
        notifications.some( item => item.readed === false ) &&
            setShowGreenBall(true)
    }, [notifications]);

    const onClick = () => {
        dispatch( redirectToNotification() );
        setShowGreenBall(false);
    }

    return (
        <MainpageHeadStyle>
            <HeadMessage>
                Hello <b>{ email && email.split('@')[0] }</b>
            </HeadMessage>
            <NotificationButton onClick={onClick} >
                { showGreenBall && <GreenBall /> }
                <BiBell style={biBellStyle} />
            </NotificationButton>
        </MainpageHeadStyle>
  );
}

export default MainpageHead;