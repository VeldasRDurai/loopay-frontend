import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IoChevronBackCircleOutline } from "react-icons/io5";

import { redirectToMainpage } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

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

const TransactionFeedbackPageStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: white;
    background-color: #000000;
`;
const FeedbackTextarea = styled.textarea`
    height: 60vh;
    width: 80vw;
    margin-top: 20px;
    padding: 10px;
    box-sizing: border-box;
    
    &:focus{ outline: none; }
`;

const FeedbackButton = styled.button`
    margin-top: 20px;
`;
const TransactionFeedbackPage = () => {
    const dispatch = useDispatch();
    const [ feedback, setFeedback ] = useState(undefined);
    const { 
        email,
        currentTransaction,
        socket
    } = useSelector( state => state.mainpageReducer );
    
    // useEffect( () => {
    //     socket.emit('transaction-details',{ currentTransaction, email });
    // },[]);
    // socket.on('transaction-details-acknowledge', ({ acknowledge, details }) => {
    //     console.log( 'transaction-details-acknowledge',{ acknowledge, details } );
    //     if(acknowledge) setDetails(details)
    // })
    const onClick = () => 
        socket.emit('feedback-submit', { email, currentTransaction, feedback, });

    const onChange = event => setFeedback( event.target.value );

    return (
        <TransactionFeedbackPageStyle>
            <BackButton onClick={ () => dispatch( redirectToMainpage() ) } > 
                <IoChevronBackCircleOutline style={logoStyle} />
                <Heading> Feedback Page </Heading>
            </BackButton>
            <FeedbackTextarea
                autoCorrect='false'
                onChange={onChange}
                wrap='hard' >
            </FeedbackTextarea>
            <FeedbackButton onClick={onClick}>
                Submit
            </FeedbackButton>
        </TransactionFeedbackPageStyle>
  );
}

export default TransactionFeedbackPage;