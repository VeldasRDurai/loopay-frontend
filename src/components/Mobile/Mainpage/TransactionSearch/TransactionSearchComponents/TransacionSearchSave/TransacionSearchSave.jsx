import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { mainpageSavedMode } from '../../mainpageActions';

const TransactionSearchSaveStyle = styled.div`
    height: 10vh;
    width: 100vw;
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
    const onClick = () =>
        socket.on('save-search',{ 
            email,
            duration
        });
    socket.on('save-search-acknowledge', ({acknowledge}) => {
        acknowledge && dispatch( mainpageSavedMode() )
    });
    return (
        <TransactionSearchSaveStyle>
            <div> Status valid Upto hours : </div>
            <input 
                type="range" 
                max={24} 
                min={1} 
                value={1}
                onChange={onChange}
            />
            <div onClick={onClick} >
                Save Button 
            </div> 
        </TransactionSearchSaveStyle>
    );
}

export default TransacionSearchSave