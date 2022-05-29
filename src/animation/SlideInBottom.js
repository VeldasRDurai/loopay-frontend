import { keyframes } from "styled-components";

const slideInBottom = () =>
    keyframes`
    0% {
        transform: translateY(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }`

export default slideInBottom;
  
// animation: ${slideInBottom} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;