import { keyframes } from "styled-components";

/*
 * ----------------------------------------
 * animation slide-out-top
 * ----------------------------------------
*/
const SlideOutTop = ( height=100 ) => 
    keyframes`
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    `;
export default SlideOutTop;

// REFERENCE

// 1.https://animista.net/play/exits/slide-out/slide-out-top