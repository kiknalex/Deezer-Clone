import { vars } from "@/app/theme.css";
import { fontSize } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const trackContainer = style({
  display: "flex",
  alignItems: "center",
  height: "56px",
  padding: "0 8px",
  ":hover": {
    backgroundColor: vars.colorsVars.buttonCommonHover,
  },
  fontSize: fontSize["font-size-2"],
});

export const trackRowActive = style({
  color: vars.colorsVars.buttonImportant,
});

globalStyle(`${trackContainer}>:not(:first-child)`, {
  marginLeft: "16px",
});
export const trackInfo = style({
  minWidth: "0",
  flex: "1",
});

export const imgButtonContainer = style({
  width: "40px",
  height: "40px",
  display: "grid",
  placeItems: "center",
});

export const buttonImage = style({
  width: "40px",
  height: "auto",
});
export const buttonHidden = style({
  visibility: "hidden",
});
export const buttonPlay = style({
  position: "absolute",
  selectors: {
    [`${trackContainer}:hover &`]: {
      visibility: "visible",
    },
  },
});
const link = style({
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const trackNameButton = style([
  link,
  {
    marginInline: "12px 8px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
]);

export const linkWrapper = style({
  width: "15%",
  display: "flex",
});

export const albumLink = link;
export const artistLink = link;

export const addedDate = style({
  color: vars.colorsVars.textSecondary,
  width: "100px",
});

export const durationInfo = style({
  width: "40px",
  color: vars.colorsVars.textSecondary,
});

export const durationSpan = style({
  fontSize: fontSize["font-size-4"],
  color: vars.colorsVars.textSecondary,
});
