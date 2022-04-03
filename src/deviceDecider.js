import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { 
	switchedToMobile,
	switchedToTablet,
	switchedToLaptop
} from './reduxStore/device/deviceActions';
import { 
	ON_MOBILE, 
	ON_TABLET, 
	ON_LAPTOP 
} from './reduxStore/device/deviceTypes';
import { 
	MAX_MOBILE_WIDTH, 
	MAX_TABLET_WIDTH 
} from './constants/deviceWidth';


const DeviceDecider = () => {

	// var timeOutController;
	const dispatch = useDispatch();
	const { currentDevice } = useSelector( state => state.device );
	const deviceDeciderCore = () => {
		console.log( 'currentDevice : ', currentDevice );
		window.innerWidth > MAX_MOBILE_WIDTH ?  
			(window.innerWidth > MAX_TABLET_WIDTH ?
				// Greter than mobile and tablet width 
				( currentDevice !== ON_LAPTOP && dispatch(switchedToLaptop()) ): 
				// Greter than mobile and less than tablet width
				( currentDevice !== ON_TABLET && dispatch(switchedToTablet()) ) ): 
			// Less than mobile width
			( currentDevice !== ON_MOBILE && dispatch( switchedToMobile() ) );
		}	
	deviceDeciderCore();
    // window.addEventListener( "resize", () => {
	// 	// Inorder to avoid glitch [1][2][3]
	// 	clearTimeout(timeOutController); 
	// 	timeOutController = setTimeout( deviceDeciderCore, 1000);
	// });
	return( <div style={{display:'none'}}></div> );
}

export default DeviceDecider ;

// REFERENCE:
// 1. https://jsfiddle.net/Zevan/c9UE5/1/
// 2. https://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
// 3. https://stackoverflow.com/questions/5534363/why-does-the-jquery-resize-event-fire-twice