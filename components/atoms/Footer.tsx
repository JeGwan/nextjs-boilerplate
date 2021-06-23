import styled from "styled-components";

import styles from "@app/styles";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${styles.sizes.footerHeight}px;
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
    border-top: 1px solid ${styles.colors.grey9};
    background-color: white;
  }
`;

export default Footer;
