import React from "react";
export declare enum CustomTheme {
    LIGHT_BLUE_COOL_GREY = "theme-lightBlue-coolGrey",
    PINK_COOL_GREY = "theme-pink-coolGrey",
    GREEN_GREY = "theme-green-grey",
    YELLOW_GREY = "theme-yellow-grey",
    ORANGE_GREY = "theme-orange-grey",
    FUCHSIA_BLUE_GREY = "theme-fuchsia-blueGrey",
    GREEN_ELECTRIC_GREEN = "theme-green-electricGreen"
}
declare const useTheme: () => {
    selectedTheme: CustomTheme;
    changeTheme: (theme: CustomTheme) => void;
};
declare const ColorThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => React.JSX.Element;
export { ColorThemeProvider, useTheme };
