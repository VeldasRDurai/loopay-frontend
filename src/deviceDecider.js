import React from 'react';

import { useDispatch } from 'react-redux';
import { 
	switchedToMobile,
	switchedToTablet,
	switchedToLaptop
} from './reduxStore/device/deviceActions';
import { 
	MAX_MOBILE_WIDTH, 
	MAX_TABLET_WIDTH 
} from './constants/deviceWidth';


const DeviceDecider = () => {

	var timeOutController;
	const dispatch = useDispatch();
	const deviceDeciderCore = () => 
		window.innerWidth > MAX_MOBILE_WIDTH ?  
			(window.innerWidth > MAX_TABLET_WIDTH ?
				// Greter than mobile and tablet width 
				dispatch( switchedToLaptop() ) : 
				// Greter than mobile and less than tablet width
				dispatch( switchedToTablet() )): 
			// Less than mobile width
			dispatch( switchedToMobile() ) ;
		
	deviceDeciderCore();
    window.addEventListener( "resize", () => {
		// Inorder to avoid glitch [1][2][3]
		clearTimeout(timeOutController); 
		timeOutController = setTimeout( deviceDeciderCore, 1000);
	});
	return( <div></div> );
}

export default DeviceDecider ;

// REFERENCE:
// 1. https://jsfiddle.net/Zevan/c9UE5/1/
// 2. https://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
// 3. https://stackoverflow.com/questions/5534363/why-does-the-jquery-resize-event-fire-twice