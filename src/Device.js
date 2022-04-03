import React from 'react';
import { useSelector } from 'react-redux';

import { 
	ON_MOBILE, 
	ON_TABLET, 
	ON_LAPTOP 
} from './reduxStore/device/deviceTypes';

import Mobile from './components/Mobile/Mobile';
const Devices = () => {
	const { currentDevice } = useSelector( state => state.device );
	console.log( 'currentDevice : ', currentDevice );
	return (
		<div>
			{
				currentDevice === ON_MOBILE ? <Mobile /> : 
				currentDevice === ON_TABLET ? <div> ON_TABLET </div> :
				currentDevice === ON_LAPTOP ? <div> ON_LAPTOP </div> :
				undefined
			}
		</div> 
	);
}

export default Devices;