import { TransitionPage } from "@components/Container";
import { logout } from "@lib/utils";
import React, { useEffect } from "react";

const LogoOutPage = () => {
  useEffect(() => {
    logout();
    const timeout = setTimeout(() => {
      location.href = "/login";
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <TransitionPage message="로그아웃중" loading />;
};

export default LogoOutPage;
