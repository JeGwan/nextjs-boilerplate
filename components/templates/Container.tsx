import Head from "next/head";
import React, { ReactNode } from "react";

import { APP_NAME } from "@app/lib/constants";

interface Props {
  title?: string;
  loading?: boolean;
  children?: ReactNode;
}
const Container = ({ title, loading = false, children }: Props) => {
  // 나중에 loading 사용법 고민
  return (
    <>
      <Head>
        <title>
          {APP_NAME} {title && ` : ${title}`}
        </title>
      </Head>
      {children}
    </>
  );
};

export default Container;
