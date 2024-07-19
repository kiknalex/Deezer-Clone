import { vars } from "@/app/theme.css";
import colors from "@/styles/colors.css";
import { fontSize } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const cardImg = style({
  display: "block",
  width: "100%",
  height: "auto",

  selectors: {
    "&::after": {
      backgroundColor: vars.colorsVars.backgroundSecondary,
      content: "",
      inset: "0",
      position: "absolute",
      opacity: "0",
      transitionDuration: "0.15s",
      transitionProperty: "opacity,background-color",
    },
    "&:hover::after": {
      opacity: "0.24",
    },
    "&:hover": {
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
  },
});

export const linkContainer = style({
  cursor: "pointer",
  position: "relative",
});

export const squareImg = style([
  cardImg,
  {
    borderRadius: "9px",
    "::after": {
      borderRadius: "9px",
    },
  },
]);

export const circleImg = style([
  cardImg,
  {
    borderRadius: "50%",
    selectors: {
      "&::after": {
        borderRadius: "50%",
      },
    },
  },
]);
export const listButtons = style({
  position: "absolute",
  zIndex: "10",
  bottom: "10px",
  left: "10px",
  display: "flex",
  justifyContent: "center",
});
export const listButtonsCenter = style([
  listButtons,
  {
    left: "50%",
    transform: "translateX(-50%)",
  },
]);
export const listVisible = style({});
export const buttonAction = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  backgroundColor: colors.white,
  zIndex: "20",
  transition: "opacity 0.2s",
  opacity: "0",
  selectors: {
    [`${linkContainer}:hover &`]: {
      opacity: "1",
    },
  },
});
export const buttonVisible = style({
  opacity: "1",
});
export const buttonIcon = style({
  color: "black",
  fontSize: fontSize["font-size-6"],
});
