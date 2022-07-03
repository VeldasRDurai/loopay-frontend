import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

const ResultTileStyle = styled.div`
    min-height: 10vh;
    max-width: 100vw;
    color: black;
    /* background-color: #800080a4; */
    background-color: white;
    margin: 5px 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({isRejected}) => isRejected ? 1 : 0.6 };
`
const ResultTile = ({ item, onClick, isRejected }) => {
    // const dispatch = useDispatch();
    
    return (
        <ResultTileStyle isRejected={isRejected} onClick={onClick} >
            { item.email }
        </ResultTileStyle>
  );
}

export default ResultTile;