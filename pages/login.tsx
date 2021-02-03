import { AppContext } from "@lib/context";
import { checkValidEmailAddress, login, errHandler, logout } from "@lib/utils";
import { useContext, useEffect, useState } from "react";
import { Label } from "@components/Container";
import styled, { keyframes } from "styled-components";
import { Button, Checkbox, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { getApi } from "@lib/api";
import { useRouter } from "next/router";
const csAnim = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const proAnim = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const loginAnim = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;
const HomeContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  & > .logo {
    position: relative;
    height: 250px;
    font-family: "Montserrat", "NanumSquare", sans-serif;
    font-size: 140px;
    font-weight: bold;
    font-style: italic;
    .cs {
      position: absolute;
      top: 0;
      left: 0;
      color: #111;
      text-shadow: 10px 10px 0 #eee;
      opacity: 0;
      animation: ${csAnim} 1s ease-in-out forwards;
    }
    .pro {
      position: absolute;
      opacity: 0;
      bottom: 0;
      left: 100px;
      color: #ff6a24;
      text-shadow: 10px 10px 0 #eee;
      animation: ${proAnim} 1s ease-in-out forwards;
    }
  }
  & > .login {
    margin-top: 100px;
    width: 300px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: ${loginAnim} 1s ease-in-out forwards;
    & > .buttons {
      display: flex;
      margin-top: 12px;
      & > .submit {
        margin-left: auto;
      }
    }
  }
  &.already {
    height: 100vh;
    align-items: center;
    justify-content: center;
    .message {
      margin-bottom: 10px;
    }
  }
`;
const LoginPage = () => {
  const Api = getApi();
  const router = useRouter();
  const { me, appMessage } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const isValidEmail = checkValidEmailAddress(email);
  const submitReady = isValidEmail && password !== "";
  const handleLogin = () => {
    if (!email || !password)
      return appMessage.error("아이디와 비밀번호 모두 입력해주세요");
    if (loading) return appMessage.warn("처리중입니다...");
    setLoading(true);
    Api.post<{ token: string }>("/users/login", { email, password })
      .then(({ data }) => {
        if (data.success) {
          let nextUrl: undefined | string | string[] =
            router.query?.["prevUrl"];
          if (nextUrl && !Array.isArray(nextUrl)) {
            nextUrl = decodeURI(nextUrl);
          } else {
            nextUrl = undefined;
          }
          login(data.result.token, { expires: autoLogin ? 365 : undefined });
          setTimeout(() => {
            location.href = "/";
          }, 500);
        } else {
          appMessage.error(data.usrMsg);
          setLoading(false);
        }
      })
      .catch((err) => {
        errHandler(err);
        setLoading(false);
      });
  };
  if (me)
    return (
      <HomeContainer className="already">
        <p className="message">이미 로그인 되어있습니다.</p>
        <Button
          type="primary"
          onClick={() => {
            logout();
            location.reload();
          }}
        >
          로그아웃
        </Button>
      </HomeContainer>
    );
  return (
    <HomeContainer>
      <div className="logo">
        <span className="cs">CS</span>
        <span className="pro">PRO</span>
      </div>
      <form
        className="login"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Label>
          이메일
          {email !== "" && !isValidEmail && (
            <span className="tip warn">
              <ExclamationCircleOutlined translate="no" /> 이메일 형식이
              올바르지 않습니다.
            </span>
          )}
        </Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="large"
          placeholder="user@csinno.kr"
          disabled={loading}
        />
        <Label>비밀번호</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          size="large"
          placeholder="password"
          disabled={loading}
        />
        <div className="buttons">
          <Checkbox
            checked={autoLogin}
            onChange={(e) => setAutoLogin(e.target.checked)}
          >
            자동 로그인
          </Checkbox>
          <Button
            className="submit"
            type="primary"
            size="large"
            htmlType="submit"
            disabled={!submitReady}
            loading={loading}
          >
            로그인
          </Button>
        </div>
      </form>
    </HomeContainer>
  );
};

export default LoginPage;
