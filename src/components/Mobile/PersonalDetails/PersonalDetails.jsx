import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { redirectToLoading } from '../../../reduxStore/authenticationPage/authenticationPageAction';

const PersonalDetailsStyled = styled.div`
	position: absolute;
	top:0;bottom:0;left:0;right:0;
	background-color:blue;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const PersonalDetails = () => {
	console.log( 'forget-username');
    const dispatch = useDispatch();
	return (
		<PersonalDetailsStyled >
                PersonalDetails
				<div onClick={ () => dispatch( redirectToLoading()) } > 
					Click 
				</div>
		</PersonalDetailsStyled>
	);
}

export default PersonalDetails;