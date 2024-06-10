// button.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../app/theme.css";

// Base button style
export const baseButton = style({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ':hover': {
    backgroundColor: vars.colorPrimary.black, 
  },
  ':focus': {
    outline: `2px solid ${vars.colorPrimary.purple}`,
  },
});

export const playButton = style([
  baseButton,
  {
    backgroundColor: vars.colorPrimary.purple,
  },
]);

