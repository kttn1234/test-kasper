import { openSans, prompt } from "@/fonts/fonts";
import "@/styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
config.autoAddCss = true;
function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${openSans.variable} ${prompt.variable} ${openSans.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
export default appWithTranslation(App /*, nextI18NextConfig */);
