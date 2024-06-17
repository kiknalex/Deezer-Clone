import { style } from "@vanilla-extract/css";
import { colors } from "../../../styles/colors.css";
import { vars } from "../../../app/theme.css";
export const baseButton = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "opacity 0.3s, background-color 0.3s",
});

export const commonButton = style([
  baseButton,
  {
    ":hover": {
      backgroundColor: vars.colorsVars.buttonCommonHover,
    },
  },
]);

export const playButton = style([
  baseButton,
  {
    backgroundColor: colors.purple,
    ":hover": {
    opacity: "0.8",
  },
  },
]);

export const hoverButton = style([
  baseButton,
  commonButton,
  {
    position: "relative"
  }
]);
