import { MAINPAGE } from './pageTypes';

const initialState = {
    currentPage : MAINPAGE
}

const pageReducer = ( state = initialState, action ) => ({
    ...state,
    currentPage : action.type
});    

export default profileReducer;