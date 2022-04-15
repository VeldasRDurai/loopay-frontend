const emailValidation = email => {
    const reg = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$");
    return reg.test(email) ?
        true : false;
}

const passwordValidation = password => {
    const strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    const mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    const enoughRegex = new RegExp("(?=.{8,}).*", "g");
    return password.length === 0    ? 0 : 
        !enoughRegex.test(password) ? 1 : 
        strongRegex.test(password)  ? 2 : 
        mediumRegex.test(password)  ? 3 : 
        4
}

export {
    emailValidation,
    passwordValidation
};

// REFERENCE:

// 1. https://martech.zone/javascript-password-strength/
// 2. 