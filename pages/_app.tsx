import "@lib/global.less";
import { AppContextProvider } from "@lib/context";

export default function App({ Component, pageProps }: any) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
