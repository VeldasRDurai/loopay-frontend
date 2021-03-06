import { ON_MOBILE, ON_TABLET, ON_LAPTOP } from './deviceTypes';

const switchedToMobile = () => ({ type : ON_MOBILE });
const switchedToTablet = () => ({ type : ON_TABLET });
const switchedToLaptop = () => ({ type : ON_LAPTOP });

export { 
    switchedToMobile,
    switchedToTablet,
    switchedToLaptop
}