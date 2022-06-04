import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { redirectToLoading } from '../../../../reduxStore/page/authenticationPage/authenticationPageAction';

const GoogleSignin = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        renderButton();
    //     const script = document.createElement("script");
    //     script.src = "https://apis.google.com/js/platform.js";
    //     script.onload = () => renderButton();
    //     document.body.appendChild(script);
    });
    
    async function onSuccess(googleUser) {
        console.log( googleUser );
        var id_token = await googleUser.getAuthResponse().id_token;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_BACKEND_DEVELOPMENT_URL + '/signup/google');
        xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            console.log('Signed in as: ' + xhr.responseText);
            if( xhr.responseText === 'SUCCESS'){
                signOut();
                dispatch( redirectToLoading() );
            }
        };
        xhr.send(JSON.stringify({token : id_token}));
    }
    function signOut() {
        var auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
    function onFailure(error) {
        console.log(error);
    }
    function renderButton() {
        window.gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 100,
            'height': 30,
            'longtitle': false,
            'theme': 'light',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }
    return (
        <div id="my-signin2"></div>
    );
}

export default GoogleSignin;