import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    userProfileRequestSend,
    userProfileRequestCancel,
} from '../TransactionSearchActions';

import UserProfileRequestButton from './UserProfileComponents/UserProfileRequestButton/UserProfileRequestButton';
import UserProfileCancelButton from './UserProfileComponents/UserProfileCancelButton/UserProfileCancelButton';
import UserProfileBadge from './UserProfileComponents/UserProfileBadge/UserProfileBadge';

const UserProfileStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: green;
`
const UserProfile = () => {
    const dispatch = useDispatch();
    const { mainpageSearchDetails } = useSelector( state => state.mainpageReducer );
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
            searchDetails : mainpageSearchDetails
        });
        dispatch( userProfileRequestSend({ requestTimerExpiesOn }));    
    }
    const RequestCancelOnClick = () => {
        socket.emit('cancel-request',{ 
            requestFrom: email, 
            requestTo : selectedUserDetails.email 
        });
        dispatch( userProfileRequestCancel() )
    }

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


    return (
        <UserProfileStyle>
            email : { selectedUserDetails.email }
            { selectedUserDetails.isOnline ? 'Online' : `Lastseen on ${selectedUserDetails.lastseen}` }
            { UserProfileStateRender[userProfileRequestState] }
        </UserProfileStyle>
  );
}

export default UserProfile;