import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer';

import { redirectToTransactionFeedbackpage } from '../../../../../mainpageActions';

const TransactionTimerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`

const TransactionTimer = () => {
    const dispatch = useDispatch();
    const { 
        email,
        currentTransaction,
        transactionEndTime,
        socket
    } = useSelector( state => state.mainpageReducer );
    
    const initialRemainingTime = (new Date( transactionEndTime ) - new Date()) / (1000);
    const renderTime = ({ remainingTime }) => {
        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);

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
            socket.emit('transaction-timer-expired',{ email, currentTransaction });
            dispatch( redirectToTransactionFeedbackpage() );
    }

    return (
        <TransactionTimerStyle>
            <CountdownCircleTimer
                isPlaying
                duration={ initialRemainingTime>0 ? initialRemainingTime : 0  }
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[30, 28, 9, 0]}
                onComplete={onComplete}
                size={size}
                strokeWidth={strokeWidth} >
            {renderTime}
            </CountdownCircleTimer>
        </TransactionTimerStyle>
  );
}

export default TransactionTimer;