import React, { createContext, useContext, useEffect, useState } from "react";
export var CustomTheme;
(function (CustomTheme) {
    CustomTheme["LIGHT_BLUE_COOL_GREY"] = "theme-lightBlue-coolGrey";
    CustomTheme["PINK_COOL_GREY"] = "theme-pink-coolGrey";
    CustomTheme["GREEN_GREY"] = "theme-green-grey";
    CustomTheme["YELLOW_GREY"] = "theme-yellow-grey";
    CustomTheme["ORANGE_GREY"] = "theme-orange-grey";
    CustomTheme["FUCHSIA_BLUE_GREY"] = "theme-fuchsia-blueGrey";
    CustomTheme["GREEN_ELECTRIC_GREEN"] = "theme-green-electricGreen";
})(CustomTheme || (CustomTheme = {}));
var ColorThemeContext = createContext(null);
var useTheme = function () {
    var context = useContext(ColorThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
var ColorThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(CustomTheme.GREEN_ELECTRIC_GREEN), selectedTheme = _b[0], setSelectedTheme = _b[1];
    useEffect(function () {
        var $body = document.querySelector("body");
        if (!$body)
            return;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        selectedTheme && $body.classList.add(selectedTheme);
        return function () {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            selectedTheme && $body.classList.remove(selectedTheme);
        };
    }, [selectedTheme]);
    var changeTheme = function (theme) {
        setSelectedTheme(theme);
    };
    return (<ColorThemeContext.Provider value={{ selectedTheme: selectedTheme, changeTheme: changeTheme }}>
      {children}
    </ColorThemeContext.Provider>);
};
export { ColorThemeProvider, useTheme };
//# sourceMappingURL=ColorThemeContext.jsx.map