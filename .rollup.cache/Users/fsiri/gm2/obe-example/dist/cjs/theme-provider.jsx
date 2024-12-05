import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
export default function ThemeProvider(_a) {
    var children = _a.children;
    return (<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ""}>
      {children}
    </APIProvider>);
}
//# sourceMappingURL=theme-provider.jsx.map