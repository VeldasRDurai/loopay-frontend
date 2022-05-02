import {
    MAINPAGE,
    LOADING
} from '../pageTypes';

const redirectToMainpage = () => ({ type : MAINPAGE });
const redirectToLoading  = () => ({ type : LOADING });

export {
    redirectToMainpage,
    redirectToLoading
}