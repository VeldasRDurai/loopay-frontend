import { ON_MOBILE, ON_TABLET, ON_LAPTOP } from './deviceTypes';

const initialState = {
    currentDevice  : ON_MOBILE
}

const pageSizeReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case ON_MOBILE : 
        case ON_TABLET : 
        case ON_LAPTOP : 
            return { ...state ,
                currentDevice : action.type
            }
        default : 
            return state;
    }
}

export default pageSizeReducer;