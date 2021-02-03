import { NextRouter } from "next/router";
import cookie from "cookie";
import { message } from "antd";
import jsCookie from "js-cookie";
import { GetServerSidePropsContext } from "next";

export const parseCookies = (ctx?: GetServerSidePropsContext, options = {}) => {
  return cookie.parse(
    ctx
      ? ctx.req.headers.cookie || ""
      : typeof window !== "undefined"
      ? document.cookie
      : "",
    options
  );
};

export const logout = () => {
  jsCookie.remove("token");
  window.localStorage.setItem("logout", Date.now().toString());
};

export const login = (
  token: string,
  options?: { expires?: number; nextUrl?: string }
) => {
  // expires : 정수, 몇일동안 쿠키를 저장할 것인지.
  jsCookie.set("token", token, { expires: options?.expires });
  // location.href = options?.nextUrl || "/";
};

export const errHandler = (error: any) => {
  if (process.env.NODE_ENV !== "production") console.error(error);
  if (typeof window !== undefined) {
    message.error("서버 내부 에러, 잠시 후 다시 시도해주세요.");
  }
};

export function mergeQueryString(
  router: NextRouter,
  additional: { [key: string]: any }
) {
  let isContainPage = false;
  const merged = { ...router.query };
  for (let key in additional) {
    if (key === "page") isContainPage = true;
    if (additional[key] === null) {
      delete merged[key];
    } else {
      merged[key] = additional[key];
    }
  }
  return `${router.pathname}?${Object.keys(merged)
    .map((key) => `${key}=${merged[key]}`)
    .join("&")}`;
}

export const checkValidEmailAddress = (email: string) =>
  /^([a-zA-Z0-9_\-][a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g.test(
    email
  );

export const checkValidCellPhoneNumber = (phoneNumber: string) =>
  /^01(0|1|6|7|8|9)-(\d{3,4})-(\d{4})$/g.test(phoneNumber);

export const formattedCellPhoneNumber = (value: string) => {
  if (value.length > 13) return value.slice(0, 13);
  value = value.replace(/\D/g, "");
  const valueToArray = value.split("");
  let formattedValue = "";
  let i: string | number;
  for (i in valueToArray) {
    i = Number(i);
    if (i === 3) {
      formattedValue += "-";
    } else {
      if (value.length === 10) {
        if (i === 6) formattedValue += "-";
      } else {
        if (i === 7) formattedValue += "-";
      }
    }
    formattedValue += value[i];
  }
  return formattedValue;
};
