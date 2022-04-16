import React from 'react';
import styled from 'styled-components';
import './Loading.css'

const LoadingOverStyled = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

	z-index:1000;
	/* Should have the highest z-index */
    height: 100vh;
    width: 100vw;
    /* background-color: #f1c40f; */
    background-color: white;
	overflow: hidden;
`;

const LoadingOver = () => {
  console.log('Loading Over');

  return (
	  <LoadingOverStyled>
		<div className='Loading'>
			<div className='body'>
				<span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<div className='base'>
					<span></span>
					<div className='face'></div>
				</div>
			</div>
			<div className='longfazers'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	  </LoadingOverStyled>
  )
}

export default LoadingOver;