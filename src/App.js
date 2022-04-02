import React from 'react';
import { Provider } from 'react-redux';

import store from './redux-store/store';
import DeviceDecider from './device-decider';

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