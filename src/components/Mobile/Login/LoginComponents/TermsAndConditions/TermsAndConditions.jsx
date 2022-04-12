import React from 'react';
import styled from 'styled-components';

const TermsAndConditionsStyled = styled.div`
    color: #a2a1b0;
    font-size: 10px;
    font-family: 'Montserrat Alternates',sans-serif;
    width: 60vw;
    text-align: center;
    font-weight: 900;
`;
const Bold = styled.span`
    color: black;
    font-weight: 900;
`

const TermsAndConditions = () => 
    <TermsAndConditionsStyled>
        By continuing, you agree to Loopay's 
        <Bold> Terms of Use </Bold> and 
        <Bold> Privacy Policy</Bold>. 
    </TermsAndConditionsStyled>

export default TermsAndConditions;