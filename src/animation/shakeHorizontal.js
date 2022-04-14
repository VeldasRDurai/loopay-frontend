import { keyframes } from 'styled-components';

const shakeHorizontal = () =>
    keyframes`
  0%,100% {
    transform: translateX(0);
  } 10%, 30%, 50%, 70% {
    transform: translateX(-10px);
  } 20%, 40%, 60% {
    transform: translateX(10px);
  } 80% {
    transform: translateX(8px);
  } 90% {
    transform: translateX(-8px);
  }
`;

export default shakeHorizontal;