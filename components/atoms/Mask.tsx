import styled, { keyframes } from "styled-components";

const maskAnimation = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(0, 0, 0, 0);
  animation: ${maskAnimation} 0.3s ease-in-out forwards;
  &.hidden {
    display: none;
  }
`;

export default Mask;
