import React from 'react';
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
    min-height: 10vh;
    width:90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    word-break: break-all;

    box-sizing: border-box;
    border: 1px solid white;
    /* background-color: #ff00ff; */
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px 10px;
`
const MainpageHistory = () => {
    const dispatch = useDispatch();
    const {
        notifications
    } = useSelector( state => state.mainpageReducer );

    return (
        <MainpageHistoryStyle>
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronDownCircleOutline style={logoStyle} />
            </BackButton>
            <HistoryBody>
                {
                    notifications.length === 0 ? 'No Notifications yet...':
                        notifications.map( item => 
                            <TransactionTile key={item.time}> 
                                <div> {item.sender} </div>
                                <div> { String(new Date(item.time)) } </div>
                                <div> {item.message} </div>
                            </TransactionTile>
                        )
                }
            </HistoryBody>
        </MainpageHistoryStyle>
  );
}

export default MainpageHistory;
// const x = new Date(item.time)
// x.getDate() + '/' + x.getMonth()+'/'+x.getFullYear()