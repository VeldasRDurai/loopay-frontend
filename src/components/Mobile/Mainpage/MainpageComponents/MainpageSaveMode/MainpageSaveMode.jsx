import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    redirectToTransactionMapChat,
    mainpageSearchMode,
    mainpageTransactionMode,
    mainpageRequestReceived,
    mainpageLastSearchSavedUpto,
    mainpageTransactionEndTime
} from '../../mainpageActions';

import MainpageAcceptButton from './MainpageButton/MainpageAcceptButton';
import MainpageRejectButton from './MainpageButton/MainpageRejectButton';

const MainpageSaveModeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RequestBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainpageSaveMode = () => {
    const [ rejectedRequest, setRejectedRequested ] = useState(false);

    const dispatch = useDispatch();
    const { 
        lastSearch,
        lastSearchSaved,
        lastSearchUpto,
        requestFrom,
        requestFromUpto,
        socket,
    } = useSelector( state => state.mainpageReducer );
    const { email } = useSelector( state => state.profile );

    useEffect( () => {
        socket.on('receive-request', ({requestFrom, requestTimerExpiesOn}) => {
            console.log('receive-request');
            dispatch( mainpageRequestReceived({
                requestFrom,
                requestFromUpto: requestTimerExpiesOn
            }) );
            setRejectedRequested(false);
        });
        socket.on('receive-request-accepted-acknowledge', ({ acknowledge, transactionEndTime, currentTransaction, transactionActivated }) => {
            if(acknowledge){
                dispatch(mainpageTransactionMode());
                dispatch(mainpageTransactionEndTime({ transactionEndTime, currentTransaction, transactionActivated }))
                dispatch(redirectToTransactionMapChat());
            } else {
                window.alert('Another one went offline or cancelled the request');
            }
        });
    });
    
    const acceptOnClick = () =>
        socket.emit('receive-request-accepted',{ requestTo:email, requestFrom});
    
    const rejectOnClick = () => {
        socket.emit('receive-request-rejected',{ requestTo:email, requestFrom})
        setRejectedRequested(true);
    }
    const deleteOnClick = () =>
        socket.emit('save-search-delete',{ email });

    socket.on('save-search-delete-acknowledge', ({ acknowledge }) => {
        if( acknowledge ){
            dispatch( mainpageLastSearchSavedUpto({
                lastSearchSaved: false,
                lastSearchUpto : undefined
            }) )
            dispatch( mainpageSearchMode() );
        } else {
            window.alert("Internal Server error");
        }
    });
    
    return <MainpageSaveModeStyle>
        <div> Save Mode </div>
        <div> amount : { lastSearch.amount } </div>
        <div> isSoft : { String(lastSearch.isSoftCash) } </div>
        <div> radius : { lastSearch.radius } </div>
        <div> { lastSearchSaved && String(new Date(lastSearchUpto)) } </div>
        <div onClick={deleteOnClick} >
            Delete
        </div>
        <div></div>
        {
            !rejectedRequest && new Date( requestFromUpto ) > new Date() &&
                <RequestBox>
                    You have a request from {requestFrom}
                    <MainpageAcceptButton onClick={acceptOnClick} /> 
                    <MainpageRejectButton onClick={rejectOnClick} />
                </RequestBox>
        }
    </MainpageSaveModeStyle>;
}

export default MainpageSaveMode;