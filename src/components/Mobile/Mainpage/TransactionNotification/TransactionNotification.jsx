import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IoChevronDownCircleOutline } from "react-icons/io5";

import { redirectToMainpage } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import slideInBottom from '../../../../animation/SlideInBottom';

const MainpageHistoryStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;

    background-color: #000000;
    animation: ${slideInBottom} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const BackButton = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;
const logoStyle = {
    height:'30px',
    width:'30px',
    marginLeft:'15px'
};

const HistoryBody = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    color: white;

    padding-top: 10vw;

    /* background-color: #ff9100; */
`
const TransactionTile = styled.div`
    /* min-height: 10vh;
    width:90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    word-break: break-all;

    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px; */
    min-height: 8vh;
    width:90vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    overflow: hidden;
    word-break: break-all;
    border-radius: 10px;
    margin-bottom: 15px;
    background: #262724;
    /* box-shadow: -0.7px -0.7px 0 0px white; */
    position: relative;
`
const Name = styled.div`
    color: white;
    font-size: 16px;
    margin: 10px 30px 0 30px;
    font-weight: 900;
    height: 35%;
    overflow: hidden;
`
const Time = styled.div`
    margin: 0 30px 0 30px;
    font-size: 12px;
    font-family: 'Ubuntu Mono', monospace;
`
const Message = styled.div`
    margin: 10px 30px;
    word-break: break-word;
    font-size: 15px;
`

const days = { 0:'Sun',1:'Mon',2:'Tue',3:'Wed',4:'Thu',5:'Fri',6:'Sat' };
const months = { 0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October',10: 'November',11: 'December'};

const MainpageHistory = () => {
    const dispatch = useDispatch();
    const {
        notifications,
        socket,
        email
    } = useSelector( state => state.mainpageReducer );

    useEffect( () => {
        socket.emit('watched-notifictions', { email });
    },[]);
    
    return (
        <MainpageHistoryStyle>
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronDownCircleOutline style={logoStyle} />
            </BackButton>
            <HistoryBody>
                {
                    notifications.length === 0 ? 'No Notifications yet...':
                        notifications.map( item => {
                            const date = new Date(item.time);
                            const dateString = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                            return <TransactionTile key={item.time}> 
                                <Name> {item.sender} </Name>
                                <Time> { dateString } </Time>
                                <Message> {item.message} </Message>
                            </TransactionTile>;
                        })
                }
            </HistoryBody>
        </MainpageHistoryStyle>
  );
}

export default MainpageHistory;
// const x = new Date(item.time)
// x.getDate() + '/' + x.getMonth()+'/'+x.getFullYear()