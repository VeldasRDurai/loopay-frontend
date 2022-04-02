import { combineReducers, createStore } from 'redux';

import profileReducer  from './profile/profile-reducer';
import pageSizeReducer from './page-size/page-size-reducer';

const rootReducer = combineReducers({
    profile  : profileReducer,
    pageSize : pageSizeReducer
});

const store = createStore( rootReducer );

export default store;