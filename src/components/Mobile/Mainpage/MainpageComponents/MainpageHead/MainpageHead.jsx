import React from 'react';
import styled from 'styled-components';

import { BiBell } from "react-icons/bi";

const MainpageHeadStyle = styled.div`
    width : 100vw;
    height: 8vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #ffffff;
`;
const NotificationButton = styled.div`
    height: 45px;
    width: 45px;
    margin-right: 10px;
    border-radius: 30px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const HeadMessage = styled.div`
    margin-left: 25px;
    max-width: 70vw;
    font-size: 20px;
    overflow: hidden;
`;
const biBellStyle = {
    width: '23px',
    height: '23px'
}

const MainpageHead = () => {
    return (
        <MainpageHeadStyle>
            <HeadMessage>
                Hello Name
            </HeadMessage>
            <NotificationButton>
                <BiBell style={biBellStyle} />
            </NotificationButton>
        </MainpageHeadStyle>
  );
}

export default MainpageHead;