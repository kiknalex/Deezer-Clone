import { vars } from "@/app/theme.css";
import colors from "@/styles/colors.css";
import { fontSize } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const trackContainer = style({
  display: "flex",
  paddingBottom: "10px",
  paddingInline: "8px",
  textTransform: "uppercase",
  fontSize: fontSize["font-size-2"],
  borderBottom: `1px solid ${vars.colorsVars.borderColor}`,
  color: colors["--stone-7"],
});

globalStyle(`${trackContainer}>:not(:first-child)`, {
  marginLeft: "16px",
});
export const trackInfo = style({
  minWidth: "0",
  flex: "1",
});

export const artistInfo = style({
  width: "15%",
});

export const albumInfo = style({
  width: "15%",
});

export const addedInfo = style({
  width: "100px",
});

export const durationInfo = style({
  width: "40px",
  display: "flex",
  justifyContent: "center",
});

export const durationSpan = style({
  fontSize: fontSize["font-size-4"],
});
