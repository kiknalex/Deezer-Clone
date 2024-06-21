import { vars } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  color: "white",
  padding: "size-6",
  fontSize: "font-size-2",
  borderRadius: "3px",
  backgroundColor: vars.colorsVars.buttonImportant,
});
export const cardLink = style({
  width: "min-content",
  cursor: "pointer",
  border: "1px solid white",
});

export const hideOnSmallScreen = style({
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "none",
    },
  },
});

export const hideOnBigScreen = style({
    "@media": {
    "screen and (min-width: 1160px)": {
      display: "none",
    },
  },
})