import React, { createContext, useContext, useEffect, useState } from "react";

export enum CustomTheme {
  LIGHT_BLUE_COOL_GREY = "theme-lightBlue-coolGrey",
  PINK_COOL_GREY = "theme-pink-coolGrey",
  GREEN_GREY = "theme-green-grey",
  YELLOW_GREY = "theme-yellow-grey",
  ORANGE_GREY = "theme-orange-grey",
  FUCHSIA_BLUE_GREY = "theme-fuchsia-blueGrey",
  GREEN_ELECTRIC_GREEN = "theme-green-electricGreen",
}

const ColorThemeContext = createContext<{
  selectedTheme: CustomTheme;
  changeTheme: (theme: CustomTheme) => void;
} | null>(null);

const useTheme = () => {
  const context = useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ColorThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState<CustomTheme>(
    CustomTheme.GREEN_ELECTRIC_GREEN
  );

  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    selectedTheme && $body.classList.add(selectedTheme);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      selectedTheme && $body.classList.remove(selectedTheme);
    };
  }, [selectedTheme]);

  const changeTheme = (theme: CustomTheme) => {
    setSelectedTheme(theme);
  };

  return (
    <ColorThemeContext.Provider value={{ selectedTheme, changeTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export { ColorThemeProvider, useTheme };
