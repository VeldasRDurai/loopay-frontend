import { keyframes } from "styled-components";

const bounceOutBallAnimation = ({ clientX, clientY }) => {
    // clientX = ( clientX ? clientX : 0 );
    // clientY = ( clientY ? clientY : 0 );
    return keyframes`
        0% {
            height:0;
            width:0;
            border-radius: 100vw;
            top : ${clientY};
            left: ${clientX};
        }
        90% {
            height:100vw;
            width:100vw;
            border-radius: 50vw;
        }
        100% {
            height:100vh;
            border-radius: 0;
            top:0;
            left:0;
        }`;
};
export default bounceOutBallAnimation;