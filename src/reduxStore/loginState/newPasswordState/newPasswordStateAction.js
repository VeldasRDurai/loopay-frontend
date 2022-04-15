import {
    NEW_PASSWORD_INITIAL,
    NEW_UPDATE_PASSWORD,
    NEW_SHOW_PASSWORD,
    NEW_NO_PASSWORD
} from './newPasswordStateTypes';

const typeSetter = (type) => ({type})

const newUpdatePassword = ({password}) => ({
    type: NEW_UPDATE_PASSWORD,
    password
})

const newPasswordInitial = () => typeSetter(NEW_PASSWORD_INITIAL);
const newShowPassword = () => typeSetter(NEW_SHOW_PASSWORD);
const newNoPassword = () => typeSetter(NEW_NO_PASSWORD);

const newPasswordShowWarning = type => typeSetter(type); 

export {
    newPasswordInitial,
    newUpdatePassword,
    newShowPassword, 
    newNoPassword,
    newPasswordShowWarning
}