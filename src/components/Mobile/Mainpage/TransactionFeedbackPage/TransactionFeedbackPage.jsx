import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; 

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
    justify-content: center;
    align-items: center;

    background-color: orange;
`;
const FeedbackTextarea = styled.textarea`
    height: 60vh;
    width: 80vw;
`;

const FeedbackButton = styled.button`
    
`;
const TransactionFeedbackPage = () => {
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
            Enter your feedback:
            <FeedbackTextarea
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