import { LOGED_IN, LOGED_OUT } from './profileTypes';

const initialState = { 
    isloged : false ,
    email   : ''
}

const profileReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case LOGED_IN : 
            return { ...state , 
                isloged : true,
                email   : action.email
            }
        case LOGED_OUT : 
            return { ...state ,
                isloged : false,
                email   : ''
            }
        default : 
            return state;
    }
}

export default profileReducer;