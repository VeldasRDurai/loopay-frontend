import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    mainpageUpdateSearchDetails
} from '../../mainpageActions';

const MainpageRangeStyle = styled.input`
    width: ${({width}) => width};
`
const MainpageRange = ({ min, max, roundTo, value, width }) => {
    const dispatch = useDispatch();
    const { 
        mainpageSearchDetails
    } = useSelector( state => state.mainpageReducer );
    const onChange = event => {
        event.target.value = Math.floor(event.target.value/roundTo)*roundTo; 
        console.log(event.target.value);
        dispatch( mainpageUpdateSearchDetails({  
            ...mainpageSearchDetails,
                [value]: event.target.value
        }));
    }

    return (
        <MainpageRangeStyle 
            width={width}
            min={min}
            max={max} 
            type={'range'} 
            onChange={onChange} >
        </MainpageRangeStyle>
  );
}

export default MainpageRange;