import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { CgProfile } from "react-icons/cg";
// import { MdHome } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";

import { 
    redirectToProfile, 
    redirectToHistory 
} from '../../mainpageActions';

const MainpageTailStyle = styled.div`
    width : 100vw;
    height: 8vh;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 15px;

    background-color: #ffffff;
`;
const LogoButton = styled.div`
    height:${ ({selected}) => selected ? '55px': '35px' };
    width: ${ ({selected}) => selected ? '55px': '35px' };
    border-radius: 30px;
    border: 1px solid black;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ({selected}) => selected ? 'black': 'white' } ;
`;
const logoStyleHome = {
    height:'23px',
    width:'23px',
    fill: 'white',
};
const logoStyle = {
    height:'23px',
    width:'23px',
};
const MainpageTail = () => {
    const dispatch = useDispatch();

    return (
        <MainpageTailStyle>
            <LogoButton onClick={ () => dispatch( redirectToProfile() ) } >
                <CgProfile style={logoStyle} />
            </LogoButton>
            <LogoButton selected={true} >
                <GrHomeRounded style={logoStyleHome} />
            </LogoButton>
            <LogoButton onClick={ () => dispatch( redirectToHistory() ) } >
                <AiOutlineTransaction style={logoStyle} />
            </LogoButton>
            
        </MainpageTailStyle>
  );
}

export default MainpageTail;