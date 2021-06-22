import { GetServerSideProps } from "next";
import styled from "styled-components";

import Container from "@app/components/templates/Container";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface PageProps {
  search?: string;
  page?: string;
}

const Page = ({ search, page }: PageProps) => {
  return (
    <Container title="SSR">
      <Wrapper>
        <p>page: {page}</p>
        <p>search: {search}</p>
      </Wrapper>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const search = ctx.query.search?.toString();
  const page = ctx.query.page?.toString();

  return { props: { search, page } };
};

export default Page;
