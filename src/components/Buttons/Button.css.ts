import { style } from "@vanilla-extract/css";
import { colors } from "../../styles/colors.css";

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
      backgroundColor: colors.backgroundHover,
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
