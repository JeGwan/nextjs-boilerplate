import { serialize, parse } from "cookie";
import { IncomingMessage, ServerResponse } from "http";
import { TOKEN_NAME, COOKIE_MAX_AGE } from "./constants";

export function setTokenCookie(token: string, res?: ServerResponse) {
  if (res) {
    const cookie = serialize(TOKEN_NAME, token, {
      maxAge: COOKIE_MAX_AGE,
      expires: new Date(Date.now() + COOKIE_MAX_AGE * 1000),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
    });
    res.setHeader("Set-Cookie", cookie);
  } else {
    // todo 기타 쿠키 옵션 세팅
    const cookie = `${TOKEN_NAME}=${token}`;
    document.cookie = cookie;
  }
}

export function removeTokenCookie(res?: ServerResponse) {
  const cookie = serialize(TOKEN_NAME, "", {
    maxAge: -1,
    path: "/",
  });
  if (res) {
    res.setHeader("Set-Cookie", cookie);
  } else {
    document.cookie = cookie;
  }
}

export function parseCookies(req?: IncomingMessage) {
  if (req) {
    return parse(req.headers?.cookie || "");
  } else {
    return parse(document.cookie);
  }
}

export function getTokenCookie(req?: IncomingMessage) {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME];
}
