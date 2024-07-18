import { vars } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export const baseButton = style({
  backgroundColor: vars.colorsVars.buttonImportant,
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "opacity 0.3s, background-color 0.3s",
});
