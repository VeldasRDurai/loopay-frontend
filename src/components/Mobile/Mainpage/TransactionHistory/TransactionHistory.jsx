import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { ImInfo } from "react-icons/im";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import { redirectToMainpage } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import slideInRight from '../../../../animation/slideInRight';
import TransactionHistoryDetails from './TransactionHistoryDetails/TransactionHistoryDetails';

const MainpageHistoryStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    font-family: 'Montserrat Alternates', sans-serif;
    /* font-family: 'Ubuntu Mono', monospace; */
    /* font-family: 'Orbitron', sans-serif; */

    background-color: #161616;
    animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
const Heading = styled.div`
    margin-left: 10px;
    font-size: 20px;
    font-weight: 900;
`

const BackButton = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: white;
`;
const logoStyle = {
    height:'20px',
    width:'30px',
    fill:'white',
    marginLeft:'10px'
};

const HistoryBody = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    color: white;

    padding-top: 10vw;

    /* background-color: #ff9100; */
`
const TransactionTile = styled.div`
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
    margin: 0 30px 0 30px;
    font-weight: 900;
    height: 35%;
    overflow: hidden;
`
const Time = styled.div`
    margin: 0 30px 0 30px;
    font-size: 12px;
    font-family: 'Ubuntu Mono', monospace;
`
const InfoIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 2vh;
`

const days = { 0:'Sun',1:'Mon',2:'Tue',3:'Wed',4:'Thu',5:'Fri',6:'Sat' };
const months = { 0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October',10: 'November',11: 'December'};


const MainpageHistory = () => {
    const dispatch = useDispatch();
    const { 
        email,
        socket 
    } = useSelector( state => state.mainpageReducer );
    const [ loading, setLoading ] = useState(true);
    const [ history, setHistory ] = useState([]);
    const [ showHistoryDetails, setShowHistoryDetails ] = useState(false);
    const [ selectedHistory, setSelectedHistory ] = useState(undefined);
    useEffect( () => {
        socket.emit('transaction-history',{ email });
    },[]);

    socket.on('transaction-history-acknowledge',({ acknowledge, history }) => {
        if(acknowledge){
            console.log( history );
            setHistory(history)
        } else{
            window.alert('not able to get history');
        }
        setLoading(false);
    })

    const onClickTransactionTile = item => {
        setSelectedHistory(item);
        setShowHistoryDetails(true);
    }

    return (
        <MainpageHistoryStyle>
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronBackCircleOutline style={logoStyle} />
                <Heading> Transaction history </Heading>
            </BackButton>
            <HistoryBody>
                {
                    loading ? 'Loading...!!!':
                        history.length === 0 ? 'No transactions yet...':
                    history.map( item => {
                        const date = new Date(item.requestTimerStartsOn);
                        const dateString = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                        return <TransactionTile key={item.transactionNo}
                            onClick={() => onClickTransactionTile(item)}> 
                                <Name> { item.requestFrom !== email ? item.requestFrom : item.requestTo } </Name>
                                <Time> { dateString } </Time>
                                <InfoIcon> <ImInfo style={ logoStyle } /> </InfoIcon>
                        </TransactionTile>;
                    })
                }
            </HistoryBody>

            { showHistoryDetails && 
                <TransactionHistoryDetails 
                    onClick={ () => setShowHistoryDetails(false) }
                    selectedHistory={selectedHistory} /> }

        </MainpageHistoryStyle>
  );
}

export default MainpageHistory;

// REFERENCE

// 1.https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/