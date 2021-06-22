import styled from "styled-components";

import Container from "@app/components/templates/Container";
import { LinkButton } from "@app/components/atoms/Button";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 100px;
    height: 100px;
  }
  & > h1 {
    margin: 4px 0 8px;
  }
`;

const Page = () => {
  return (
    <Container title="Home">
      <Wrapper>
        <img src="/assets/next-dot-js.svg" alt="" />
        <h1>👋 JeGwan's Next.js boilerplate</h1>
        <LinkButton href="/uis">UI 둘러보기</LinkButton>
      </Wrapper>
    </Container>
  );
};

export default Page;
