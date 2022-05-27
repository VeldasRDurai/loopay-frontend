import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCountdown, CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

import { mainpageSearchMode } from '../../../mainpageActions';

const MainpageTransactionModeTimerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainpageTransactionModeTimer = () => {
    const dispatch = useDispatch()
    
    // const { email } = useSelector( state => state.profile );
    const { 
        // email,
        transactionEndTime 
    } = useSelector( state => state.mainpageReducer );
    
    const duration = (new Date(transactionEndTime) - new Date()) / (1000);
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
            // socket.emit('request-timer-expired',{email});
            dispatch(mainpageSearchMode());
    }

    return <MainpageTransactionModeTimerStyle>
        <CountdownCircleTimer
            isPlaying
            duration={ duration>0 ? duration : 0  }
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[30, 28, 9, 0]}
            onComplete={onComplete}
            size={size}
            strokeWidth={strokeWidth}
        >
          {renderTime}
        </CountdownCircleTimer>
    </MainpageTransactionModeTimerStyle>;
}


export default MainpageTransactionModeTimer;