import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { 
    mainpageSavedMode,
    mainpageLastSearchSavedUpto
} from '../../../mainpageActions';

const TransactionSearchSaveStyle = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TransacionSearchSave = () => {
    const [ duration, setDuration ] = useState(1);
    const dispatch = useDispatch();
    const { email } = useSelector( state => state.profile );
    const { socket } = useSelector( state => state.mainpageReducer );
    const onChange = event => {
        event.target.value = Math.floor(event.target.value); 
        console.log(event.target.value);
        setDuration( event.target.value );
    }
    const onClick = () => {
        console.log('saveSearch clicked');
        socket.emit('save-search',{ 
            email,
            duration
        });
    }
    socket.on('save-search-acknowledge', ({acknowledge, lastSearchSaved, lastSearchUpto}) => {
        if(acknowledge){
            dispatch( mainpageSavedMode() );
            dispatch( mainpageLastSearchSavedUpto({
                lastSearchSaved,
                lastSearchUpto
            }) );
        } 
    });
    return (
        <TransactionSearchSaveStyle>
            <div> Status valid Upto hours : </div>
            <input 
                type="range" 
                max={24} 
                min={1} 
                onChange={onChange}
            />
            {`duration : ${duration}`}
            <button onClick={onClick} >
                Save Button 
            </button> 
        </TransactionSearchSaveStyle>
    );
}

export default TransacionSearchSave