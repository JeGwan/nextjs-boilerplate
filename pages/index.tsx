import styled from "styled-components";

import Container from "@app/components/templates/Container";

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
  & > .buttons {
    display: flex;
    & > * {
      margin: 0 4px;
    }
  }
`;

const Page = () => {
  return (
    <Container title="Home">
      <Wrapper>
        <img src="/assets/next-dot-js.svg" alt="" />
        <h1>👋 JeGwan's Next.js boilerplate</h1>
        <p>작업을 한번 해볼까요.</p>
        <p>API End point : {process.env.END_POINT}</p>
      </Wrapper>
    </Container>
  );
};

export default Page;
