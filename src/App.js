import React from 'react';
import { Provider } from 'react-redux';

import store from './reduxStore/store';
import DeviceDecider from './deviceDecider';

import Devices from './Device';
const App = () => {

  	return (
    	<Provider store={store}>
			<Devices />
			<DeviceDecider />
    	</Provider>
  );
}

export default App;