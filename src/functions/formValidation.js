import    {
    LOGIN_PASSWORD_ZERO_LENGTH,
    LOGIN_PASSWORD_LESS_LENGTH,
    LOGIN_PASSWORD_WEAK,
    LOGIN_PASSWORD_MEDIUM,
    LOGIN_PASSWORD_STRONG
} from '../reduxStore/loginState/loginStateTypes';

const emailValidation = email => {
    const reg = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
    return reg.test(email) ?
        true : false;
}

const passwordValidation = password => {
    const strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    const mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    const enoughRegex = new RegExp("(?=.{8,}).*", "g");
    return password.length === 0    ? LOGIN_PASSWORD_ZERO_LENGTH : 
        !enoughRegex.test(password) ? LOGIN_PASSWORD_LESS_LENGTH : 
        strongRegex.test(password)  ? LOGIN_PASSWORD_STRONG : 
        mediumRegex.test(password)  ? LOGIN_PASSWORD_MEDIUM : 
        LOGIN_PASSWORD_WEAK
}

export {
    emailValidation,
    passwordValidation
};

// REFERENCE:

// 1. https://martech.zone/javascript-password-strength/
// 2. 