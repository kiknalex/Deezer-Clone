import { style } from "@vanilla-extract/css";
import { vars } from "../../../../app/theme.css";
import { calc } from "@vanilla-extract/css-utils";

export const timePassedInput = style({
  WebkitAppearance: "none",
  appearance: "none",
  background: "transparent",
  width: calc.add("100%", "12px"),
  height: 12,
  cursor: "pointer",
  position: "absolute",
  left: "-6px",
  top: "-6px",

  "::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    backgroundColor: "transparent",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },
  "::-moz-range-thumb": {
    border: "none",
    background: "transparent",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },
  selectors: {
    ["&:hover::-webkit-slider-thumb"]: {
      backgroundColor: "white",
      border: "1px solid gray",
    },
    ["&:hover::-moz-range-thumb"]: {
      backgroundColor: "white",
      border: "1px solid gray",
    },
  },
});

export const sliderTrack = style({
  position: "relative",
  left: "0",
  right: "0",
  height: "2px",
  backgroundColor: vars.colorsVars.sliderTrack,
  borderRadius: "6px",
  ":hover": {
    height: "4px",
  },
});

export const activeTrack = style({
  height: "100%",
  backgroundColor: vars.colorsVars.buttonImportant,
});

export const hoverTimeDiv = style({
  backgroundColor: vars.colorsVars.borderColorSecondary,
  position: "absolute",
  top: "-40px",
  transform: "translateX(-50%)",
  padding: "5px",
  paddingInline: "10px",
  borderRadius: "6px",
});
