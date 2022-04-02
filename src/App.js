import React from 'react';
import { Provider } from 'react-redux';

import store from './redux-store/store';

import Comp from './comp';

const App = () => {

  return (
    <Provider store={store}>
      <Comp />
    </Provider>
  );
}

export default App;