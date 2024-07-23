import { vars } from "@/app/theme.css";
import { fontSize } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const trackContainer = style({
  display: "flex",
  paddingBottom: "10px",
  paddingInline: "8px",
  textTransform: "uppercase",
  fontSize: fontSize["font-size-2"],
  borderBottom: `1px solid ${vars.colorsVars.borderColor}`,
  color: vars.colorsVars.textSecondary,
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


export const rowSkeletonContainer = style({
  paddingInline: "10px",
  height: "56px",
  width: "100%",
  display: "flex",
  alignItems: "center",
})

export const imageSkeleton = style({
  width: "40px",
  height: "40px",
  backgroundColor: vars.colorsVars.borderColor,
})

export const textSkeleton = style({
  height: "10px",
  width: "95%",
  marginLeft: "10px",
  borderRadius: "12px",
  backgroundColor: vars.colorsVars.borderColor,
})