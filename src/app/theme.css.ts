import colors from "@/styles/colors.css";
import {
  assignVars,
  createTheme,
  createThemeContract,
  style,
} from "@vanilla-extract/css";

const colorsVars = createThemeContract({
  textPrimary: null,
  textSecondary: null,
  buttonImportant: null,
  buttonCommon: null,
  buttonCommonHover: null,
  background: null,
  backgroundSecondary: null,
  borderColor: null,
  borderColorSecondary: null,
  sliderTrack: null,
  linkHover: null,
  linkActive: null,
  inputPlaceholder: null,
});

export const lightTheme = createTheme(colorsVars, {
  textPrimary: "#0f0d13",
  textSecondary: "#6f6d71",
  buttonImportant: "#A238FF",
  buttonCommon: "#0F0D13",
  buttonCommonHover: "#D1CFD3",
  background: "#FDFCFE",
  backgroundSecondary: "#F5F2F8",
  borderColor: "#C2C0C4",
  borderColorSecondary: "#E1DDE4",
  sliderTrack: "#EBE7EE",
  linkHover: "#ebe7ee",
  linkActive: "#e1dde4",
  inputPlaceholder: colors["--stone-6"],
});

export const darkTheme = createTheme(colorsVars, {
  textPrimary: "#FDFCFE",
  textSecondary: "#A9A6AA",
  buttonImportant: "#A238FF",
  buttonCommon: "#FDFCFE",
  buttonCommonHover: "#3A393D",
  background: "#0F0D13",
  backgroundSecondary: "#1B191F",
  borderColor: "#555257",
  borderColorSecondary: "#3A393D",
  sliderTrack: "#29282D",
  linkHover: "#29282d",
  linkActive: "#3a393d",
  inputPlaceholder: colors["--stone-8"],
});

const isLoggedInVars = createThemeContract({
  sidebarWidth: null,
});

export const loggedIn = style({
  "@media": {
    "screen and (min-width: 1160px)": {
      vars: assignVars(isLoggedInVars, {
        sidebarWidth: "272px",
      }),
    },
    "screen and (max-width: 1160px)": {
      vars: assignVars(isLoggedInVars, {
        sidebarWidth: "80px",
      }),
    },
  },
});

export const loggedOut = createTheme(isLoggedInVars, {
  sidebarWidth: "0px",
})
export const vars = { colorsVars, isLoggedInVars };
