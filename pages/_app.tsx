import { AppContextProvider } from "@lib/context";
import GlobalStyle from "@styles/GlobalStyle";

export default function App({ Component, pageProps }: any) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppContextProvider>
  );
}
