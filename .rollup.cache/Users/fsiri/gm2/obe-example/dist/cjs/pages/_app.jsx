import React from "react";
import ThemeProvider from "../theme-provider";
import "../styles/globals.css";
import "../fonts/line-awesome-1.3.0/css/line-awesome.css";
import "../styles/index.scss";
import "rc-slider/assets/index.css";
import { ColorThemeProvider } from "../context/ColorThemeContext";
export default function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<ThemeProvider>
      <ColorThemeProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps}/>
      </ColorThemeProvider>
    </ThemeProvider>);
}
//# sourceMappingURL=_app.jsx.map