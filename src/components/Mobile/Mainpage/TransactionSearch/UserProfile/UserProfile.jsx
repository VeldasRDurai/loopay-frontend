import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    userProfileRequestSend,
    userProfileRequestCancel,
    userProfileRequestAccepted,
    userProfileRequestRejected,
    // userProfileRequestTimerExpired
} from '../TransactionSearchActions';

import { 
    redirectToTransactionMapChat,
    redirectToTransactionSearch,
    mainpageTransactionMode,
    mainpageTransactionEndTime,
} from '../../mainpageActions';

import UserProfileRequestButton from './UserProfileComponents/UserProfileRequestButton/UserProfileRequestButton';
import UserProfileCancelButton from './UserProfileComponents/UserProfileCancelButton/UserProfileCancelButton';
import UserProfileBadge from './UserProfileComponents/UserProfileBadge/UserProfileBadge';
// import UserProfileTimer from './UserProfileComponents/UserProfileTimer/UserProfileTimer';

import { 
    // USER_PROFILE_REQUEST_ACCEPTED,
    // USER_PROFILE_REQUEST_CANCEL,
    // USER_PROFILE_REQUEST_REJECTED,
    USER_PROFILE_REQUEST_SEND,
    // USER_PROFILE_REQUEST_TIMER_EXPIRED,
} from '../TransactionSearchTypes';

const UserProfileStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: green;
`
const UserProfileBackStyle = styled.div`
    opacity:${ ({opac})=> opac ? 1:0.5 };
`

const UserProfile = () => {
    const dispatch = useDispatch();
    const { lastSearch } = useSelector( state => state.mainpageReducer );
    const { 
        selectedUserDetails,
        userProfileRequestState 
    } = useSelector( state => state.transactionSearchReducer );
    const { socket } = useSelector( state => state.mainpageReducer );
    const { email } = useSelector( state => state.profile );

    const RequestButtonOnClick = () => {
        const TIMER_DURAION_IN_MINUTE = 5;
        const requestTimerStartsOn = new Date();
        const requestTimerExpiesOn = new Date( 
            Number(requestTimerStartsOn) + (1000*60*TIMER_DURAION_IN_MINUTE) );
        socket.emit('send-request',{
            requestFrom : email, 
            requestTo : selectedUserDetails.email, 
            requestTimerStartsOn,
            requestTimerExpiesOn,
            searchDetails : lastSearch
        });
        dispatch( userProfileRequestSend({ requestTimerExpiesOn }));    
    }
    const RequestCancelOnClick = () => {
        socket.emit('cancel-request',{ 
            requestFrom: email, 
            requestTo : selectedUserDetails.email 
        });
    }

    socket.on('sent-request-acknowledge', ({ acknowledge, transactionEndTime, currentTransaction, transactionActivated }) => {
        console.log( 'sent-request-acknowledge', { acknowledge, transactionEndTime });
        if( acknowledge ){
            dispatch( userProfileRequestAccepted({ email:selectedUserDetails.email }));
            dispatch( mainpageTransactionMode());
            dispatch( mainpageTransactionEndTime({ transactionEndTime, currentTransaction, transactionActivated }) );
            dispatch( redirectToTransactionMapChat() );
        } else {
            dispatch(userProfileRequestRejected({ email:selectedUserDetails.email }));
        }
    });
            
    socket.on('cancel-request-acknowledge', ({ acknowledge }) =>
        acknowledge && 
            dispatch( userProfileRequestCancel() ));


    const UserProfileStateRender = {
        USER_PROFILE_REQUEST_SEND :
            <UserProfileCancelButton onClick={RequestCancelOnClick} />,
        USER_PROFILE_REQUEST_CANCEL : 
            <UserProfileRequestButton  onClick={RequestButtonOnClick} />,
        USER_PROFILE_REQUEST_TIMER_EXPIRED : 
            <UserProfileBadge message={'Timer expired'} />,
        USER_PROFILE_REQUEST_REJECTED : 
            <UserProfileBadge message={'Request Rejected'} />,
    }

    const onClick = event => {
        // event.preventDefault()
        console.log('Clicked');
        dispatch( redirectToTransactionSearch() );
    }
    return (
        <UserProfileStyle>
            <UserProfileBackStyle
                opac={ !(userProfileRequestState===USER_PROFILE_REQUEST_SEND) } 
                onClick={ () =>
                    !(userProfileRequestState===USER_PROFILE_REQUEST_SEND) && onClick() } > 
                Back 
            </UserProfileBackStyle>

            <div>
                email : { selectedUserDetails.email }
            </div> 
            <div>
                { selectedUserDetails.isOnline ? 'Online' : `Lastseen on ${selectedUserDetails.lastseen}` }
            </div>
            { UserProfileStateRender[userProfileRequestState] }
        </UserProfileStyle>
  );
}

export default UserProfile;