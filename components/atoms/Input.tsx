import styled from "styled-components";

import styles from "@app/styles";

const Input = styled.input`
  height: ${styles.sizes.uiHeight}px;
  font-size: 1.4rem;
  border-radius: 4px;
  padding: 0 ${styles.sizes.edgePadding}px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: white;
  border: 1px solid ${styles.colors.grey8};
  box-shadow: none;
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    border: 1px solid ${styles.colors.primary};
  }
  &:focus {
    border: 1px solid ${styles.colors.primary};
  }
  &:disabled {
    &:hover {
      border: 1px solid #ddd;
    }
    &:focus {
      border: 1px solid #ddd;
    }
    background-color: #eee;
  }
  &::placeholder {
    color: ${styles.colors.grey8};
  }
`;

export default Input;
