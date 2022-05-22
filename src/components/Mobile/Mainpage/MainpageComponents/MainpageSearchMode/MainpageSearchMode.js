import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import MainpageRange from '../MainpageRange/MainpageRange';
import { redirectToTransactionSearch } from '../../mainpageActions';
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
    const { mainpageSearchDetails } = useSelector( state => state.mainpageReducer );
    return (
        <>
            <MainpageComponentStyle>
                <div>{`Enter the amount`}</div>
                    <MainpageRange min={500} max={5000} 
                            roundTo={500} 
                            value={'amount'} 
                            width={'75vw'} />
                <div>{mainpageSearchDetails && mainpageSearchDetails.amount 
                            && mainpageSearchDetails.amount}</div>
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
                <div>{mainpageSearchDetails && mainpageSearchDetails.radius 
                            && mainpageSearchDetails.radius}</div>
            </MainpageComponentStyle>

            <input 
                type="button" 
                value="Search"
                onClick={ ()=>dispatch(redirectToTransactionSearch()) } 
            />    
        </>
    );
}

export default MainpageSearchMode;