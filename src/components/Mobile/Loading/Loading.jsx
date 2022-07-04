import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import './Loading.css'

import { 
    redirectToMainpage,
    redirectToLogin
} from '../../../reduxStore/page/authenticationPage/authenticationPageAction';
import { profileLogIn } from '../../../reduxStore/profile/profileActions';

// import timeOut  from '../../../functions/timeOut';

const LoadingStyled = styled.div`
	z-index:1000;
	/* Should have the highest z-index */
    height: 100vh;
    width: 100vw;
    /* background-color: #f1c40f; */
	overflow: hidden;
`;

const Loading = () => {
    console.log('Loading');
    const dispatch = useDispatch();
    useEffect( () => {
        // const userAuthentication = async () => {
        //     try{
        //         const response = await fetch( process.env.REACT_APP_BACKEND_DEVELOPMENT_URL,
        //             { credentials:'include' });
        //         console.log( response );
        //         const result = await response.json();
        //         console.log( result );
        //         if( response.ok ){
        //             dispatch( profileLogIn(result) );
        //             dispatch( redirectToMainpage() );
        //         } else {
        //             dispatch( redirectToLogin() );
        //         }
        //     } catch (e){ 
        //         console.log(e); 
        //     }
            // await timeOut(2000);
            let email = 
                window.prompt("Enter email id") || 
                'das@gmail.com';
            dispatch( profileLogIn( {email} ) );
            dispatch( redirectToMainpage() );
        // } 
        // userAuthentication();
    },[]);
    return (
        <LoadingStyled>
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
	     </LoadingStyled>
    );
}

export default Loading