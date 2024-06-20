import { style } from "@vanilla-extract/css";

export const marquee = style({
  position: "relative",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const maskImage = style({
  maskImage:
    "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 2.42%, rgb(0, 0, 0) 23.26%)",
  WebkitMaskImage:
    "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 2.42%, rgb(0, 0, 0) 23.26%)",
});

export const marqueeWrapper = style({
  display: "flex",
});
