import { vars } from "@/app/theme.css";
import { fontSize } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const marqueeWrapper = style({
  minWidth: "0px",
});
export const imageSize = style({
  width: 46,
  height: "auto",
});

export const musicTrack = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
});
export const link = style({
  ":hover": {
    textDecoration: "underline",
  },
});
export const artistName = style([
  link,
  {
    color: vars.colorsVars.textSecondary,
    fontSize: fontSize["font-size-2"],
  },
]);
