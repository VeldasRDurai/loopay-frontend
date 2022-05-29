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
    height: 60vh;
    width: 80vw;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;
const MainpageHistoryDetails = ({ selectedHistory, onClick }) => {
    console.log( selectedHistory )
    return (
        <MainpageHistoryDetailsStyle onClick={onClick} >
            <DetailsBox>
                Details
            </DetailsBox>
        </MainpageHistoryDetailsStyle>
  );
}

export default MainpageHistoryDetails;