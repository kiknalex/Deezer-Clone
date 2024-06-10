// theme.css.ts
import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colorPrimary: {
    purple: "#A238FF",
    black: "black",
    white: "white",
  },
  colorSecondary: {
    red: "#ff0000",
    yellow: "#ffed00",
    magenta: "#ff0092",
    lime: "#c2ff00",
    blue: "#00c7f2",
    lightBlue: "#c1f1fc",
    lightGreen: "#ebffac",
    lightPink: "#ffc2e5",
    lightRed: "#ffaaaa",
  },
  colorNeutral: {
    background: "#f5f2f8",
    backgroundBorderMain: "#c2c0c4",
    backgroundBorderSecondary: "#e1dde4",
  },
  typography: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4rem",
  },
});
