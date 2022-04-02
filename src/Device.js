import React from 'react';
import { useSelector } from 'react-redux';

import { 
	ON_MOBILE, 
	ON_TABLET, 
	ON_LAPTOP 
} from './redux-store/page-size/page-size-types';

import Mobile from './components/Mobile/Mobile';
const Devices = () => {
	const { currentDevice } = useSelector( state => state.pageSize );

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