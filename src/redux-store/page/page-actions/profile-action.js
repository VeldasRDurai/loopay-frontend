import {
    PROFILE, 
    EDIT_DETAILS, 
    EDIT_PASSWORD, 
    ADD_NEW_PASSWORD, 
    USER_SETTINGS, 
    APPLICATION_SUPPORT, 
    APPLICATION_FEEDBACK,
} from '../page-types';

const redirectToProfile = () => ({ type : PROFILE });
const redirectToEditDetails = () => ({ type : EDIT_DETAILS });
const redirectToEditPassword = () => ({ type : EDIT_PASSWORD });
const redirectToAddNewPassword = () => ({ type : ADD_NEW_PASSWORD });
const redirectToUserSettings = () => ({ type : USER_SETTINGS });
const redirectToApplicationSupport= () => ({ type : APPLICATION_SUPPORT });
const redirectToApplicationFeedback= () => ({ type : APPLICATION_FEEDBACK });

export {
    redirectToProfile,
    redirectToEditDetails,
    redirectToEditPassword,
    redirectToAddNewPassword,
    redirectToUserSettings,
    redirectToApplicationSupport,
    redirectToApplicationFeedback
}