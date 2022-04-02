import { LOGED_IN, LOGED_OUT } from './profile-types';

const logedInAction = ({ email }) => {
    return { 
        type : LOGED_IN, 
        email
    }
}

const logedOutAction = () => {
    return {
        type : LOGED_OUT 
    }
}

export { logedInAction, logedOutAction };