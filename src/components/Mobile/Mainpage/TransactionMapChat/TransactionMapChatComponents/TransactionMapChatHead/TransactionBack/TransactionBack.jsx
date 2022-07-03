import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { redirectToMainpage } from '../../../../../../../reduxStore/page/authenticationPage/authenticationPageAction';

import { IoChevronBackCircleOutline } from "react-icons/io5";

const TransactionBackStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`
const logoStyle = {
    height:'30px',
    width:'30px',
    // fill:'white',
    marginLeft:'10px'
};

const TransactionBack = () => {
    const dispatch = useDispatch();
    const onClick = () => 
        dispatch( redirectToMainpage() );
    return (
        <TransactionBackStyle
            onClick={onClick} >
            <IoChevronBackCircleOutline style={logoStyle} />
        </TransactionBackStyle>
  );
}

export default TransactionBack;