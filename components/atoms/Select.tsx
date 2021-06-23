import styled from "styled-components";

import styles from "@app/styles";

const Select = styled.select`
  height: ${styles.sizes.uiHeight}px;
  line-height: ${styles.sizes.uiHeight - 4}px;
  font-size: 1.4rem;
  border-radius: 4px;
  padding: 0 ${styles.sizes.edgePadding + 16}px 0 ${styles.sizes.edgePadding}px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #ddd;
  appearance: none;
  background-color: white;
  background-image: url(${styles.assets.downArrow});
  background-size: 12px;
  background-repeat: no-repeat;
  background-position: right 8px center;
  &.full {
    display: block;
    width: 100%;
  }
  &:hover {
    border-color: ${styles.colors.primary};
  }
  &:focus {
    border-color: ${styles.colors.primary};
  }
  &.placeholder {
    color: ${styles.colors.grey8};
  }
`;

export default Select;
