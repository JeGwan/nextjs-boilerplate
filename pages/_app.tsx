import { AppContextProvider } from "@app/lib/context";
import store from "@app/redux/store";
import GlobalStyle from "@app/styles/GlobalStyle";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }: any) {
  return (
    <ReduxProvider store={store}>
      <AppContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppContextProvider>
    </ReduxProvider>
  );
}
