import styled from "styled-components";

import styles from "@app/styles";

const Main = styled.main`
  padding: ${styles.sizes.headerHeight + styles.sizes.edgePadding}px 0
    ${styles.sizes.footerHeight + styles.sizes.edgePadding}px;
  & > section {
    width: 100%;
    max-width: ${styles.sizes.mobileWidth}px;
    margin: 0 auto;
    padding: 0 ${styles.sizes.edgePadding}px;
  }
`;

export default Main;
