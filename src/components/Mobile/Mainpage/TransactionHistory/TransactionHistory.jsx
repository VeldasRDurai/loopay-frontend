import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

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

    background-color: #000000;
    animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
const Heading = styled.div`
    margin-left: 10px;
    font-size: 20px;
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
    height:'30px',
    width:'30px',
    marginLeft:'15px'
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
    min-height: 10vh;
    width:90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    word-break: break-all;

    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 15px;
    /* background-color: #ff00ff; */
`
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
                    history.map( item => 
                        <TransactionTile key={item.transactionNo}
                            onClick={() => onClickTransactionTile(item)}> 
                                {item.transactionNo} 
                        </TransactionTile>
                    )
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