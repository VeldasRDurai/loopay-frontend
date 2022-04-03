import { combineReducers, createStore } from 'redux';

import profileReducer  from './profile/profileReducer';
import deviceReducer from './device/deviceReducer';
import pageReducer from './page/pageReducer';

const rootReducer = combineReducers({
    profile  : profileReducer,
    device : deviceReducer,
    page : pageReducer
});

const store = createStore( rootReducer );

export default store;