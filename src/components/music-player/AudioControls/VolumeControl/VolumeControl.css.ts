import { vars } from "@/app/theme.css";
import { colors } from "@/styles/colors.css";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const volumeInputWrapper = style({
  width: "240px",
});

export const volumeTrack = style({
  position: "relative",
  left: "0",
  right: "0",
  height: "2px",
  backgroundColor: vars.colorsVars.sliderTrack,
  borderRadius: "6px",
});
export const volumeInput = style({
  WebkitAppearance: "none",
  appearance: "none",
  backgroundColor: "transparent",
  height: "12px",
  cursor: "pointer",
  width: calc.add("100%", "12px"),
  background: "transparent",
  position: "absolute",
  left: "-6px",
  top: "-4px",

  "::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    backgroundColor: "white",
    border: "1px solid gray",
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
});

export const activeVolumeTrack = style({
  height: "100%",
  backgroundColor: vars.colorsVars.buttonImportant,
});