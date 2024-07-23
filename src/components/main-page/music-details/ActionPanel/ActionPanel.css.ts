import { vars } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonList = style({
  display: "flex",
});

export const buttonAction = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: vars.colorsVars.buttonImportant,
  cursor: "pointer",
  fontSize: "24px",
});


