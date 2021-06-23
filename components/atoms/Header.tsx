import styled from "styled-components";

import styles from "@app/styles";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${styles.sizes.headerHeight}px;
  display: flex;
  align-items: center;
  z-index: 1;
  & > section {
    width: 100%;
    max-width: ${styles.sizes.mobileWidth}px;
    margin: 0 auto;
    padding: 0 ${styles.sizes.edgePadding}px;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${styles.colors.grey9};
    background-color: white;
    & > .title {
      font-size: 1.8rem;
      font-weight: bold;
    }
    & > .back {
      margin-left: -${styles.sizes.edgePadding}px;
      margin-right: 4px;
    }
  }
`;

export default Header;
