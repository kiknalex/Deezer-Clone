// theme.css.ts
import { createTheme, createThemeContract } from "@vanilla-extract/css";

const colorsVars = createThemeContract({
  textPrimary: null,
  textSecondary: null,
  buttonImportant: null,
  buttonCommon: null,
  background: null,
  backgroundSecondary: null,
  borderColor: null,
  borderColorSecondary: null
})

export const lightTheme = createTheme(colorsVars, {
  textPrimary: "#0f0d13",
  textSecondary: "#6f6d71",
  buttonImportant: "#A238FF",
  buttonCommon: "#0F0D13",
  background: "#FDFCFE",
  backgroundSecondary: "#F5F2F8",
  borderColor: "#C2C0C4",
  borderColorSecondary: "#E1DDE4"
})


export const darkTheme = createTheme(colorsVars, {
  textPrimary: "#FDFCFE",
  textSecondary: "#A9A6AA",
  buttonImportant: "#B560FF",
  buttonCommon: "#FDFCFE",
  background: "#0F0D13",
  backgroundSecondary: "#1B191F",
  borderColor: "#555257",
  borderColorSecondary: "#3A393D"
})

export const vars = { colorsVars };