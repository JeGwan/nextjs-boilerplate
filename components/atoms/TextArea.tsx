import styles from "@app/styles";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  display: block;
  resize: none;
  outline: none;
  font-size: 1.4rem;
  padding: ${styles.sizes.edgePadding}px;
  transition: border 0.3s;
  background-color: white;
  border: 1px solid ${styles.colors.grey9};
  border-radius: 4px;
  &:hover {
    border: 1px solid ${styles.colors.primary};
  }
  &:focus {
    border: 1px solid ${styles.colors.primary};
  }
  &:disabled {
    border: 1px solid ${styles.colors.grey9};
    &:hover {
      border: 1px solid ${styles.colors.grey8};
    }
    &:focus {
      border: 1px solid ${styles.colors.grey8};
    }
    background-color: ${styles.colors.grey9};
  }
  &::placeholder {
    color: ${styles.colors.grey7};
  }
`;

export default TextArea;
