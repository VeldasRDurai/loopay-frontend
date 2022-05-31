import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, } from 'react-redux';

const OnlineOfflineIndicatorStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 20px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    color: black;
    background-color: ${ ({isOnline}) => isOnline ? '#00FF00': '#FF0000' };
`


const OnlineOfflineIndicator = () => {
    const [ isOnline, setIsOnline ] = useState(true);

    const { socket } = useSelector( state => state.mainpageReducer );
    socket.on('partner-disconnected', () => setIsOnline(false) );
    socket.on('partner-connected'   , () => setIsOnline(true) );

    return (
        <OnlineOfflineIndicatorStyle isOnline={isOnline} >
            { isOnline ? 'online': 'offline' }
        </OnlineOfflineIndicatorStyle>
    );
}

export default OnlineOfflineIndicator;