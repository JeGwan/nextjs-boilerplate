import React, { createContext, ReactNode, useState, useEffect } from "react";
import { message } from "antd";
import { User } from "./types";
import { getApi } from "./api";
import { logout, parseCookies } from "./utils";

type AppMessageFunction = (
  content: string,
  duration?: number,
  onClose?: () => void
) => void;

interface AppMessage {
  info: AppMessageFunction;
  error: AppMessageFunction;
  warn: AppMessageFunction;
  success: AppMessageFunction;
}
interface AppContextType {
  me?: User | null;
  setMe: (me: User) => void;
  appMessage: AppMessage;
}
interface AppContextProviderProps {
  children?: ReactNode;
}
export const AppContext = createContext<AppContextType>({
  me: undefined,
  setMe: () => {},
  appMessage: {
    info: () => {},
    error: () => {},
    success: () => {},
    warn: () => {},
  },
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [me, setMe] = useState<User | null>();
  const [messageIds, setMessageIds] = useState<string[]>([]);
  const method = (
    name: "info" | "error" | "warn" | "success"
  ): AppMessageFunction => {
    return (content: string, duration?: number, onClose = () => {}) => {
      if (!messageIds.some((messageId) => messageId === content)) {
        setMessageIds([...messageIds, content]);
        message[name](content, duration, () => {
          setMessageIds(
            messageIds.filter((messageId) => messageId !== content)
          );
          onClose();
        });
      }
    };
  };

  const appMessage: AppMessage = {
    info: method("info"),
    error: method("error"),
    warn: method("warn"),
    success: method("success"),
  };

  useEffect(() => {
    if (!me) {
      // 로그인 정보가 없을 때 할 동작.
      const token = parseCookies().token;
      if (token) {
        const Api = getApi();
        Api.get<{ me: User }>("/users/me")
          .then(({ data }) => {
            if (data.success) {
              setMe(data.result.me);
            } else {
              location.href = "/logout";
            }
          })
          .catch((error) => {
            if (process.env.NODE_ENV !== "production") console.error(error);
            logout();
            appMessage.error(
              "회원 정보를 가져올 수 없습니다. 다시 로그인 해주세요"
            );
            setMe(null);
          });
      } else {
        setMe(null);
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ me, setMe, appMessage }}>
      {children}
    </AppContext.Provider>
  );
};
