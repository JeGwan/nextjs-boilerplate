import Head from "next/head";
import Link from "next/link";
import { Layout, Button, Spin, Menu } from "antd";
import { CSSProperties, HTMLAttributes, ReactNode, useContext } from "react";
import styled from "styled-components";
import {
  LoadingOutlined,
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AppContext } from "@lib/context";
import { SpinProps } from "antd/lib/spin";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export const Label = styled.label`
  margin: 12px 0 6px;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #555;
  .tip {
    margin-left: 4px;
    &.warn {
      color: #ff6a24;
    }
    &.success {
    }
  }
`;
const TransitionPageComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  & > .message {
    margin: 20px 0;
  }
`;
interface TransitionPageProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  loading?: boolean;
  loginNeed?: boolean;
}
export const TransitionPage = ({
  message,
  loading,
  loginNeed,
  ...props
}: TransitionPageProps) => {
  return (
    <TransitionPageComp {...props}>
      {loginNeed ? (
        <>
          <p className="message">로그인이 필요합니다.</p>
          <Link href="/login">
            <Button type="primary">로그인 하러 가기</Button>
          </Link>
        </>
      ) : (
        <>
          {loading && <Loading />}
          <p className="message">{message}</p>
        </>
      )}
    </TransitionPageComp>
  );
};
export const Loading = (props: SpinProps) => {
  const antIcon = <LoadingOutlined spin translate="no" />;
  return <Spin size="large" {...props} indicator={antIcon} />;
};
const LoginOrLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > .title {
    font-size: 18px;
    font-weight: bold;
  }
  & > .desc {
    font-size: 12px;
    margin: 10px 0 30px;
  }
  & > button:first-of-type {
    margin-bottom: 10px;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  padding: 0 24px;
  & > h1.logo {
    margin-right: 24px;
    font-size: 18px;
    font-weight: bolder;
    letter-spacing: 4px;
    color: white;
  }
  & > .info {
    margin-left: auto;
    color: white;
    .ant-btn {
      color: white;
    }
  }
`;
interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  headerTitle?: string;
  header?: ReactNode;
  mainStyle?: CSSProperties;
  loading?: boolean;
  loginNeed?: boolean;
}
const Container = ({
  title,
  headerTitle,
  children,
  header,
  mainStyle = {},
  loading = false,
  loginNeed = false,
  ...rest
}: Props) => {
  const { me } = useContext(AppContext);
  return (
    <Layout style={{ minHeight: "100vh" }} {...rest}>
      <Head>
        <title>CSPRO {title ? ` : ${title}` : ""}</title>
      </Head>
      <Header style={{ padding: 0 }}>
        <HeaderContent>
          <h1 className="logo">CSPRO</h1>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Link href="/" passHref>
                <a>접수</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/" passHref>
                <a>수리</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/" passHref>
                <a>자재</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/" passHref>
                <a>보고서</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/" passHref>
                <a>회원관리</a>
              </Link>
            </Menu.Item>
          </Menu>
          <div className="info">
            {me?.name} 님
            <Button
              type="text"
              icon={<LogoutOutlined translate="no" />}
              href="/logout"
            />
          </div>
        </HeaderContent>
      </Header>
      <Layout style={{ flex: "1 0 0" }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined translate="no" />}
              title="회원관리"
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<LaptopOutlined translate="no" />}
              title="메뉴2"
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined translate="no" />}
              title="메뉴3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: 24, margin: 0 }}>
            {loginNeed ? (
              <LoginOrLoading className="content">
                <h2 className="title">로그인이 필요한 서비스입니다</h2>
                <p className="desc"> 회원이 아니시라면 회원가입을 해주세요</p>
                <Link href="/login">
                  <Button className="full" type="primary" size="large">
                    로그인하러 가기
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="full" size="large">
                    회원가입하러 가기
                  </Button>
                </Link>
              </LoginOrLoading>
            ) : loading ? (
              <LoginOrLoading className="content">
                <Loading />
              </LoginOrLoading>
            ) : (
              <div className="content" style={mainStyle}>
                {children}
              </div>
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Container;
