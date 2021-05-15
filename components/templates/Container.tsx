import Head from "next/head";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { APP_NAME } from "@lib/constants";

const Wrapper = styled.div``;
interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  header?: ReactNode;
  mainStyle?: CSSProperties;
  loading?: boolean;
}
const Container = ({
  title,
  children,
  header,
  mainStyle,
  loading = false,
  ...rest
}: Props) => {
  return (
    <Wrapper {...rest}>
      <Head>
        <title>
          {APP_NAME} {title ? ` : ${title}` : ""}
        </title>
      </Head>
      <header></header>
      <main style={mainStyle}>{children}</main>
      <footer></footer>
    </Wrapper>
  );
};

export default Container;
