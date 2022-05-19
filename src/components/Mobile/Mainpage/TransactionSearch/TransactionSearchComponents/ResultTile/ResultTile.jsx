import React from 'react';
import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

const ResultTileStyle = styled.div`
    min-height: 10vh;
    max-width: 100vw;
    background-color: #800080a4;
    margin: 5px 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`
const ResultTile = ({ item, onClick }) => {
    // const dispatch = useDispatch();
    
    return (
        <ResultTileStyle onClick={onClick} >
            { item.email }
        </ResultTileStyle>
  );
}

export default ResultTile;