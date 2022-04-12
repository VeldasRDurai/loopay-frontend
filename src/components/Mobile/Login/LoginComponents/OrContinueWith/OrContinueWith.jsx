import React from 'react';
import styled from 'styled-components';

const OrContinueWithStyled = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const OrContinueWithContentStyled = styled.div`
    color:#a2a1b0;
    font-size: 10px;
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 900;
`;

const HorizontalRuleStyled = styled.div`
    height: 1px;
    width: 45px;
    background-color:#DDE;
`

const OrContinueWith = () => <OrContinueWithStyled>
    <HorizontalRuleStyled />

    <OrContinueWithContentStyled>
        or continue with
    </OrContinueWithContentStyled>

    <HorizontalRuleStyled />

</OrContinueWithStyled>

export default OrContinueWith;