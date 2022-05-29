// const deleteSubscription = () =>

const serviceWorkerUnregister = async () => {
    
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');
        navigator.serviceWorker.getRegistrations()
        .then( function(registrations) {
            for(let registration of registrations) {
                console.log('registration : ', registration );
                registration.unregister();
                // deleteSubscription(registration);
            }

        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });
    } else {
        console.warn('Push messaging is not supported');
    }
    
}
export default serviceWorkerUnregister;