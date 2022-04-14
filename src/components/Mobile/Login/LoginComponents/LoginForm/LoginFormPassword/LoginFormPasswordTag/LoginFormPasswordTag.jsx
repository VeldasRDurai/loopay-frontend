import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { IoEyeSharp } from "react-icons/io5";

import { 
    loginUpdatePassword,
    loginShowPassword,
    loginNoPassword
} from '../../../../../../../reduxStore/loginState/loginStateAction';
import {
    LOGIN_PASSWORD_ZERO_LENGTH,
    LOGIN_PASSWORD_LESS_LENGTH,
    LOGIN_PASSWORD_WEAK,
    LOGIN_PASSWORD_MEDIUM,
    LOGIN_PASSWORD_STRONG
} from '../../../../../../../reduxStore/loginState/loginStateTypes';

import { passwordValidation } from '../../../../../../../functions/formValidation'
import { loginPasswordShowWarning } from '../../../../../../../reduxStore/loginState/loginStateAction';

const LoginFormPasswordTagStyled = styled.div`
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    ${({passwordShowWarning}) => 
        ( passwordShowWarning === LOGIN_PASSWORD_ZERO_LENGTH || 
        passwordShowWarning === LOGIN_PASSWORD_LESS_LENGTH ||
        passwordShowWarning === LOGIN_PASSWORD_WEAK ) ? css`                
            border: 1px solid red;
            background-color: #fcc;
        `: passwordShowWarning === LOGIN_PASSWORD_MEDIUM ? css`
            border: 1px solid blue;
            background-color: #ccf;
        `: passwordShowWarning === LOGIN_PASSWORD_STRONG ? css`
            border: 1px solid green;
            background-color: #cfc;
        `: css`            
            border: 1px solid #d0d4d7;
            background-color: #f0f4f7;
        `
    }
`;
const TagEyeStyled = styled.div`
    height: 28px;
    width: 10vw;
    /* border-radius: 0 5px 5px 0;
    border:1px solid #d0d4d7 ; */
    border-left: none;
    box-sizing: border-box;

    color:black;
    /* background-color: #f0f4f7; */
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
    /* border-radius: 5px 0 0 5px ;
    border:1px solid #d0d4d7 ; */
    border-right: none;
    box-sizing: border-box;

    color:black;
    /* background-color: #f0f4f7; */
    
    font-weight: 900;
    font-size: 15px;
    
    border: none;
    background-color: transparent;

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


const LoginFormPasswordTag = () => {
    const dispatch = useDispatch();
    const { 
        passwordShowWarning, 
        showPassword 
    } = useSelector( state => state.loginState ); 
    const onChange = event => {
        dispatch( loginUpdatePassword({
                password : event.target.value.trim()
            }) );
        dispatch( loginPasswordShowWarning(
            passwordValidation( 
                event.target.value.trim() 
            )
        ));
    }
    const onClick = () => dispatch( 
        showPassword ? loginNoPassword() : loginShowPassword() );

    return (
    <LoginFormPasswordTagStyled 
        passwordShowWarning={passwordShowWarning} >
        <ActualTagStyled 
            type={ showPassword ? 'text' : 'password' }
            placeholder='Enter your password'
            autoCapitalize='false'
            autoComplete='false'
            autoCorrect='false'
            spellCheck='false'
            onChange={onChange}
        />
        <TagEyeStyled 
            onClick={ onClick } >
            <IoEyeSharp />
            <TagBeamStyled 
                showPassword={showPassword} />
        </TagEyeStyled>
    </LoginFormPasswordTagStyled>);
}

export default LoginFormPasswordTag;