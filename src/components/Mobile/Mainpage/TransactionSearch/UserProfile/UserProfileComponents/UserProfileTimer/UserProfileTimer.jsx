import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useCountdown, CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

import { userProfileRequestTimerExpired } from '../../../TransactionSearchActions'

const UserProfileTimerStyle = styled.div`
    /* height: 30px;
    width: 100px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red;

    &:focus{ outline: none; } */
`

const UserProfileTimer = () => {
    const dispatch = useDispatch()
    const { requestTimerExpiesOn } = useSelector( state => state.transactionSearchReducer );
    const { selectedUserDetails } = useSelector( state => state.transactionSearchReducer );
    const { email } = useSelector( state => state.profile );
    const { socket } = useSelector( state => state.mainpageReducer );
    
    const duration = (new Date(requestTimerExpiesOn) - new Date()) / (1000);
    const renderTime = ({ remainingTime }) => {
        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);
        // const [, setOneLastRerender] = useState(0);

        if (currentTime.current !== remainingTime) {
            isNewTimeFirstTick.current = true;
            prevTime.current = currentTime.current;
            currentTime.current = remainingTime;
        } else {
            isNewTimeFirstTick.current = false;
        }

        const isTimeUp = isNewTimeFirstTick.current;

        return (
            <div className="time-wrapper">
            <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
                {remainingTime}
            </div>
            {prevTime.current !== null && (
                <div
                key={prevTime.current}
                className={`time ${!isTimeUp ? "down" : ""}`}
                >
                {prevTime.current}
                </div>
            )}
            </div>
        );
    }
    const {
    //   path,
    //   pathLength,
    //   stroke,
    //   strokeDashoffset,
    //   remainingTime,
    //   elapsedTime,
      strokeWidth,
      size,
    } = useCountdown({ 
        isPlaying: true, 
        duration: 7, 
        colors: '#abc', 
        size:50,
        strokeWidth:6 
    })

    const onComplete = () => {
        // if(window.confirm('Need to extend timer for 2 minutes')){
        //     return { 
        //         shouldRepeat: true,
        //         newInitialRemainingTime : 10
        //     }
        // } else {
            socket.emit('request-timer-expired',{email});
            // dispatch( userProfileRequestTimerExpired() );
            dispatch(userProfileRequestTimerExpired({ email:selectedUserDetails.email }));
        // }
    }

    return <UserProfileTimerStyle>
        <CountdownCircleTimer
            isPlaying
            //   duration={5*60}
            duration={ duration > 0 ? duration : 0 }
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[30, 28, 9, 0]}
            onComplete={onComplete}
            size={size}
            strokeWidth={strokeWidth}
        >
          {renderTime}
        </CountdownCircleTimer>
    </UserProfileTimerStyle>;
}


export default UserProfileTimer;