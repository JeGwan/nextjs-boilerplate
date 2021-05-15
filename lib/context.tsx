import React, { createContext, ReactNode, useState, useEffect } from "react";
import { User } from "./types";
import { getApi } from "./api";
import { parseCookies, removeTokenCookie } from "./cookies";
import { TOKEN_NAME } from "./constants";

interface AppContextType {
  me?: User | null;
  setMe: (me: User) => void;
}
interface AppContextProviderProps {
  children?: ReactNode;
}
export const AppContext = createContext<AppContextType>({
  me: undefined,
  setMe: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [me, setMe] = useState<User | null>();

  useEffect(() => {
    if (me === undefined) {
      const token = parseCookies()?.[TOKEN_NAME];
      if (token) {
        // todo 로그인 처리 후 user 데이터 가져와서 setMe
        setMe(null);
      } else {
        // todo 로그인되지 않았을 때 redirect 하려면 여기
        setMe(null);
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ me, setMe }}>{children}</AppContext.Provider>
  );
};
