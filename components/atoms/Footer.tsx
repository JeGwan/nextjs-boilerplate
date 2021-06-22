import styled from "styled-components";

import styles from "@app/styles";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${styles.sizes.mobileWidth}px;
  margin: 0 auto;
  min-height: ${styles.sizes.footerHeight}px;
  padding: 0 16px;
  background-color: white;
  z-index: 1;
  & > button.next-step {
    margin-left: auto;
  }
`;

export default Footer;
