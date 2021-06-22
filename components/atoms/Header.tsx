import styled from "styled-components";

import styles from "@app/styles";

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${styles.sizes.mobileWidth}px;
  margin: 0 auto;
  height: ${styles.sizes.headerHeight}px;
  padding: 0 ${styles.sizes.edgePadding}px;
  border-bottom: 1px solid ${styles.colors.grey7};
  background-color: white;
  z-index: 1;
  & > .title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  & > .back-button {
    margin-left: -${styles.sizes.edgePadding}px;
    margin-right: 4px;
  }
`;

export default Header;
