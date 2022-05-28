import { keyframes } from "styled-components";

const slideInRight = () =>
    keyframes`
    0% {
        transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }`

export default slideInRight;
  
// animation: ${slideInRight} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;