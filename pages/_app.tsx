import { NextPage } from "next";
import { AppProps } from "next/app";
import ThemeProvider from "../theme-provider";
import "../styles/globals.css";
import "../fonts/line-awesome-1.3.0/css/line-awesome.css";
import "../styles/index.scss";
import "rc-slider/assets/index.css";
import { ColorThemeProvider } from "../context/ColorThemeContext";

interface WrapperAppProps extends AppProps {
  Component: NextPage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: Record<string, unknown>;
}

export default function App({ Component, pageProps }: WrapperAppProps) {
  return (
    <ThemeProvider>
      <ColorThemeProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
