import { combineReducers, createStore } from 'redux';

import profileReducer from './profile/profile-reducer';

const rootReducer = combineReducers({
    profile : profileReducer
});

const store = createStore( rootReducer );

export default store;