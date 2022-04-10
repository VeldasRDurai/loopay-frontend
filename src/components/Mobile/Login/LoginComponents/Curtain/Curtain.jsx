import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
// import logo from '../../../../../../../Loopay logos/1# Loopay logo/loopay-light.png';

import SlideOutTop from '../../../../../animation/slideOutTop';

const CurtainStyled = styled.div`
    z-index: 12;

    box-sizing: border-box;
    /* border: 1px solid black; */

    position: absolute;
    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    background-color: white;

    animation: ${ ({raiseCurtain}) => raiseCurtain &&
        css`${SlideOutTop} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both` };
`;

const CurtainImageStyled = styled.div`
    position: absolute;
    height: 50vh;
    width: 300vw;
    `
const CurtainHeadingStyled = styled.div`
    /* to substitute space occupied by the CurtainImageStyled */
    padding-top: 50vh;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 26px;
    font-weight: 900;
`;

// const CurtainHeadingLogoStyled = styled.img`
//     height:5vh;
//     width:5vh;
// `

const CurtainCaptionStyled = styled.div`
    font-size: 13px;
`;

const Curtain = () => {
    const [ raiseCurtain, setRaiseCurtain ] = useState(false);

    useEffect(() => {
        window.Particles.init({
            selector: '.CurtainImage',
            maxParticles: 100,
            sizeVariations : 5,
            speed : 0.8,
            color : '#282b32',
            minDistance:100,
            connectParticles: true
        });
    });

    return <CurtainStyled  raiseCurtain={raiseCurtain} >
        <CurtainImageStyled>
            <canvas className='CurtainImage' ></canvas>
        </CurtainImageStyled>
        <CurtainHeadingStyled onClick={()=>setRaiseCurtain(true)} > 
            {/* <CurtainHeadingLogoStyled src={logo} alt="loopay-logo" /> */}
            Loopay 
        </CurtainHeadingStyled>
        <CurtainCaptionStyled> Your perfect banking partner </CurtainCaptionStyled>
    </CurtainStyled>;
}

export default Curtain;

// REFERENCE:

// 1.https://marcbruederlin.github.io/particles.js/#documentation