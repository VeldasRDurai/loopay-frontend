import React, { useState } from 'react';
import styled from 'styled-components';
import { IoEyeSharp } from "react-icons/io5";

const SignupFormPasswordTagStyled = styled.div`
    display: flex;
`;
const TagEyeStyled = styled.div`
    height: 28px;
    width: 10vw;
    border-radius: 0 5px 5px 0;
    border:1px solid #d0d4d7 ;
    border-left: none;
    box-sizing: border-box;

    color:black;
    background-color: #f0f4f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const TagBeamStyled = styled.div`
    display: ${ ({showPassword}) => showPassword ? 'flex':'none'};
    position: absolute;
    top: -7.25vw;
    right: 50%;
    clip-path: polygon(100% 50%, 100% 50%, 0 0, 0 100%);
    width: 100vw;
    height: 25vw;
    /* z-index: 1; */
    mix-blend-mode: multiply;
    transition: transform 200ms ease-out;
    transform-origin: 100% 50%;
    /* transform: translateY(-50%); */
    background-color: yellow;
`;
const ActualTagStyled = styled.input`
    height: 28px;
    width: 70vw;
    padding-left: 10px;
    padding-right: 31px;
    border-radius: 5px 0 0 5px ;
    border:1px solid #d0d4d7 ;
    border-right: none;
    box-sizing: border-box;

    color:black;
    background-color: #f0f4f7;
    
    font-weight: 900;
    font-size: 15px;
    font-family: 'Montserrat Alternates', sans-serif;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #999;
        font-weight: 400;
        font-size: 11px;
        font-family: 'Montserrat Alternates', sans-serif;
    }
    &::selection{
        color:#f0f4f7;
        background-color:black;
        border-radius: 2px;
    }
`;


const SignupFormPasswordTag = () => {

    const [ showPassword, setShowPassword ] = useState(false);

    return <SignupFormPasswordTagStyled>
        <ActualTagStyled 
            type={ showPassword ? 'text' : 'password' }
            placeholder='Enter your password'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
        />
        <TagEyeStyled 
            onClick={ ()=> setShowPassword(!showPassword) } >
            <IoEyeSharp />
            <TagBeamStyled 
                showPassword={showPassword} />
        </TagEyeStyled>
    </SignupFormPasswordTagStyled>
}

export default SignupFormPasswordTag;