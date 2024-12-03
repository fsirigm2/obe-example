export type TailwindConfig = {
  content: string[];
  darkMode: "class";
  theme: {
    container: {
      center: boolean;
      padding: Record<string, string>;
    };
    fontFamily: {
      display: string[];
      body: string[];
      heading: string[];
    };
    extend: {
      colors: {
        primary: Record<string, string>;
        secondary: Record<string, string>;
        neutral: Record<string, string>;
      };
    };
  };
  variants: {
    extend: Record<string, unknown>;
  };
  plugins: unknown[];
};
