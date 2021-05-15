import { NextRouter } from "next/router";
import { useEffect, useState } from "react";

type RGB = [number, number, number];
export const hexToRgb = (hex: string): RGB => {
  hex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (_, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0, 0, 0];
  return result.map((v) => parseInt(v, 16)).slice(1) as RGB;
};

export const errHandler = (error: any) => {
  if (process.env.NODE_ENV !== "production") console.error(error);
  if (typeof window !== undefined) alert("서버 내부 에러");
};

export function mergeQueryString(
  router: NextRouter,
  additional: { [key: string]: any }
) {
  let isContainPage = false;
  const merged = { ...router.query };
  for (const key in additional) {
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

export class Validator {
  static phone = (value: string) =>
    /^0(1[016789]{1}|2|[3-9]{1}\d{1})-\d{3,4}-\d{4}$/g.test(value);
  static password = (value: string) => /^[a-zA-Z0-9!@#$%]{6,12}$/g.test(value);
  static emailAddress = (email: string) =>
    /^([a-zA-Z0-9_-][a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g.test(
      email
    );
  static cellPhone = (phoneNumber: string) =>
    /^01(0|1|6|7|8|9)-(\d{3,4})-(\d{4})$/g.test(phoneNumber);
}

export class Formatter {
  static fromToday = (date: string) => {
    const today = new Date();
    const timeValue = new Date(date);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) return `${betweenTime}분전`;
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) return `${betweenTimeHour}시간전`;
    const betweenTimeDay = Math.floor(betweenTimeHour / 24);
    if (betweenTimeDay < 365) return `${betweenTimeDay}일전`;
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };
  static phone = (value: string) => {
    const isStartWith02 = value.slice(0, 2) === "02";
    if (isStartWith02) {
      if (value.length > 12) return value.slice(0, 12);
    } else {
      if (value.length > 13) return value.slice(0, 13);
    }
    value = value.replace(/\D/g, "");
    let formattedValue = "";
    let i: string | number;
    const valueToArray = value.split("");
    for (i in valueToArray) {
      i = Number(i);
      if (i > 0) {
        if (isStartWith02) {
          if (i === 2) {
            formattedValue += "-";
          } else {
            if (value.length === 9) {
              if (i === 5) formattedValue += "-";
            } else {
              if (i === 6) formattedValue += "-";
            }
          }
        } else {
          if (i === 3) {
            formattedValue += "-";
          } else {
            if (value.length === 10) {
              if (i === 6) formattedValue += "-";
            } else {
              if (i === 7) formattedValue += "-";
            }
          }
        }
      }
      formattedValue += valueToArray[i];
    }
    return formattedValue;
  };
}

export const classNames = (
  className: string | undefined | (string | undefined)[]
): string | undefined => {
  if (Array.isArray(className)) {
    return className.filter((cn) => !!cn).join(" ");
  } else {
    return className;
  }
};

type Platform = "ios" | "android" | "pc" | null;

export const useDetectPlatform = (ua?: string) => {
  const [platform, setPlatform] = useState<Platform>(null);
  useEffect(() => {
    setPlatform(getPlatform(ua));
  }, []);
  return platform;
};

export const getPlatform = (ua?: string): Platform => {
  const androidRegex = /android/g;
  const iosRegex = /iphone|ipad|ipot/g;
  ua = ua ? ua.toLowerCase() : navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  if (androidRegex.test(ua)) return "android";
  if (iosRegex.test(ua)) return "ios";
  return "pc";
};
