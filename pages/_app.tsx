import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Cyborg Checklist re:tune</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
