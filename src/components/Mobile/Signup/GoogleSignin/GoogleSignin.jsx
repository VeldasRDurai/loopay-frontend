import React, { useEffect } from 'react';
const GoogleSignin = () => {
    
    useEffect( () => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.onload = () => renderButton();
        document.body.appendChild(script);
    });
    
    async function onSuccess(googleUser) {
        console.log( googleUser );
        // var id_token = await googleUser.getAuthResponse().id_token;
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'https://archipelago-messenger-backend.herokuapp.com/sign-in');
        // xhr.withCredentials = true;
        // xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.onload = function() {
        //     console.log('Signed in as: ' + xhr.responseText);
        //     if( xhr.responseText === 'success'){
        //         signOut();
        //         history.push('/');
        //     }
        // };
        // xhr.send(JSON.stringify({token : id_token}));
    }
    // function signOut() {
    //     var auth2 = window.gapi.auth2.getAuthInstance();
    //     auth2.signOut().then(function () {
    //         console.log('User signed out.');
    //     });
    // }
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