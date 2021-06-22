import styled from "styled-components";

import styles from "@app/styles";

const NMain = styled.main`
  width: 100%;
  max-width: ${styles.sizes.mobileWidth}px;
  margin: 0 auto;
  padding: ${styles.sizes.headerHeight + styles.sizes.edgePadding}px
    ${styles.sizes.edgePadding}px
    ${styles.sizes.footerHeight + styles.sizes.edgePadding}px;
`;

export default NMain;
