import React from 'react';
import styled from 'styled-components';

const MainpageHistoryDetailsStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #00000099;
`;

const DetailsBox = styled.div`
    min-height: 60vh;
    max-height: 90vh;
    width: 80vw;
    color: black;
    background: linear-gradient(134deg, #cdef51, #98ed6d);
    background: l ;
    display: flex;
    align-items: center;
    border-radius: 15px;
    flex-direction: column;
    justify-content: center ;
`;
const Heading = styled.div`
    font-size: 20px;
    padding: 20px;
    /* color: #008100; */
    font-weight: 900;
`
const Details = styled.div`
    /* color: #4c6c1e; */
    padding: 10px 15px;
    & > div{
        font-size: 16px;
        text-align: center;
        font-family: 'Ubuntu Mono', monospace;
    }
`

const days = { 0:'Sun',1:'Mon',2:'Tue',3:'Wed',4:'Thu',5:'Fri',6:'Sat' };
const months = { 0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October',10: 'November',11: 'December'};

const MainpageHistoryDetails = ({ selectedHistory, onClick }) => {
    console.log( selectedHistory )
    const isAccecpted = selectedHistory.requestState === 'REQUEST_ACCEPTED';
    const date = new Date(selectedHistory.requestTimerStartsOn);
    const dateString = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    const isSuccess =  selectedHistory.transactionResult === 'TRANSACTION_SUCCESS_MODE';
    return (
        <MainpageHistoryDetailsStyle onClick={onClick} >
            <DetailsBox>
                <Heading>History Details</Heading>
                <Details>
                    <div> {`Requested made from ${ selectedHistory.requestFrom }`} </div>
                    <div> {`  at ${ dateString }`}</div>
                    <div> { isAccecpted ? `Request accepted by ${selectedHistory.requestFrom}`: `Request not accepted` } </div>
                    <div> { `Search amount of ${ selectedHistory.searchDetails.amount } within radius ${ selectedHistory.searchDetails.radius } meter` } </div>
                    <div> { isSuccess ? 'Transaction Successfull' : 'But transaction failed' } </div>
                </Details>
            </DetailsBox>
        </MainpageHistoryDetailsStyle>
  );
}

export default MainpageHistoryDetails;