import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { redirectToLoading } from '../../../reduxStore/page/authenticationPage/authenticationPageAction';

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
	const { email } = useSelector( state => state.profile );
	return (
		<PersonalDetailsStyled >
                PersonalDetails
				{email}
				<div onClick={ () => dispatch( redirectToLoading()) } > 
					Click 
				</div>
		</PersonalDetailsStyled>
	);
}

export default PersonalDetails;