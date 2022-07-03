import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import MainpageRange from '../MainpageRange/MainpageRange';
import { redirectToTransactionSearch } from '../../mainpageActions';

const MainpageSearchModeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainpageComponentStyle = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &> :first-child{
        align-self: flex-start;
    }
    &> :last-child{
        align-self: flex-end;
    }
`

const MainpageSearchMode = () => {
    const dispatch = useDispatch();
    const { lastSearch } = useSelector( state => state.mainpageReducer );
    return <MainpageSearchModeStyle>
        <MainpageComponentStyle>
            <div>{`Enter the amount`}</div>
                <MainpageRange min={500} max={5000} 
                        roundTo={500} 
                        value={'amount'} 
                        width={'75vw'} />
            <div>{lastSearch && lastSearch.amount 
                        && lastSearch.amount}</div>
        </MainpageComponentStyle>

        <MainpageComponentStyle>
            <div>{ `Do you want soft cash ?` }</div>
                <MainpageRange min={0} max={1} 
                        roundTo={1} 
                        value={'isSoftCash'} 
                        width={'30px'} />
            <div></div>
        </MainpageComponentStyle>

        <MainpageComponentStyle>
            <div>{`Radius ?`}</div>
                <MainpageRange min={200} max={2000} 
                        roundTo={200} 
                        value={'radius'} 
                        width={'75vw'} />
            <div>{lastSearch && lastSearch.radius 
                        && lastSearch.radius}</div>
        </MainpageComponentStyle>

        <input 
            style={{
                height: '30px',
                width: '120px',
                fontFamily: 'Ubuntu Mono, monospace'
            }}
            type="button" 
            value="Search"
            onClick={ ()=>dispatch(redirectToTransactionSearch()) } 
        />    
    </MainpageSearchModeStyle>;
}

export default MainpageSearchMode;