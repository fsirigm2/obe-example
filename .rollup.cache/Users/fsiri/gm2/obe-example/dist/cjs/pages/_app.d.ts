import React from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../fonts/line-awesome-1.3.0/css/line-awesome.css";
import "../styles/index.scss";
import "rc-slider/assets/index.css";
interface WrapperAppProps extends AppProps {
    Component: NextPage;
    pageProps: Record<string, unknown>;
}
export default function App({ Component, pageProps }: WrapperAppProps): React.JSX.Element;
export {};
