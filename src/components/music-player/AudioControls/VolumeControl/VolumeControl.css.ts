import { vars } from "@/app/theme.css";

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
  MozAppearance: "none",
  appearance: "none",
  backgroundColor: "transparent",
  height: "12px",
  cursor: "pointer",
  width: calc.add("100%", "12px"),
  background: "transparent",
  position: "absolute",
  left: "-6px",
  top: "-5px",

  "::-webkit-slider-thumb": {
    WebkitAppearance: "none",
    backgroundColor: "white",
    border: "1px solid gray",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
  },
  "::-moz-range-thumb": {
    backgroundColor: "white",
    border: "1px solid gray",
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    
  },
});

export const activeVolumeTrack = style({
  height: "2px",
  backgroundColor: vars.colorsVars.buttonImportant,
});
