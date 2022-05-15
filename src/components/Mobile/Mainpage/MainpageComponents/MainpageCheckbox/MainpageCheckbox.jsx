import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {
    mainpageUpdateDetails
} from '../../mainpageActions';

const MainpageCheckboxStyle = styled.input`
    width: 75vw;

`
const MainpageCheckbox = () => {
    const dispatch = useDispatch();
    const { 
        mainpageDetails
    } = useSelector( state => state.mainpageReducer );
    const onChange = event => 
        dispatch( mainpageUpdateDetails({  
            ...mainpageDetails,
                isSoftCash: event.target.checked
        }));

    return (
        <MainpageCheckboxStyle 
            onChange={onChange}
            type={'checkbox'} >
        </MainpageCheckboxStyle>
  );
}

export default MainpageCheckbox;