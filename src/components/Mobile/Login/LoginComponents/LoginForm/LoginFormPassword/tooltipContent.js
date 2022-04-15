import {
    LOGIN_PASSWORD_ZERO_LENGTH,
    LOGIN_PASSWORD_LESS_LENGTH,
    LOGIN_PASSWORD_WEAK,
    LOGIN_PASSWORD_MEDIUM,
    LOGIN_PASSWORD_STRONG
} from '../../../../../../reduxStore/loginState/loginStateTypes';

const tooltipContent = passwordShowWarning => 
    passwordShowWarning === LOGIN_PASSWORD_ZERO_LENGTH ? 
        `Password should not be empty`:
    passwordShowWarning === LOGIN_PASSWORD_LESS_LENGTH ? 
        `Password should conatin atleat 8 characters`:
    passwordShowWarning === LOGIN_PASSWORD_WEAK ? 
        `Medium password contain atleast 10 characters with any two of given property like uppercase, lowercase and numeric`:
    passwordShowWarning === LOGIN_PASSWORD_MEDIUM ? 
        `Strong password contain atleast 14 characters with property like uppercase, lowercase, symbols and numeric`:
    passwordShowWarning === LOGIN_PASSWORD_STRONG ? 
        `Strong password`: `Enter your password`

export default tooltipContent;