import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

// import { redirectToTransactionUserProfile } from './TransactionSearchActions'

const UserProfileStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    
    background-color: green;
`

const UserProfile = () => {
//     const dispatch = useDispatch();
//     const { transactionSearchPageState } = useSelector( state => state.transactionSearchReducer );
    return (
        <UserProfileStyle>
                UserProfile
        </UserProfileStyle>
  );
}

export default UserProfile;