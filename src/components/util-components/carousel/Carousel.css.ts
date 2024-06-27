import { style } from "@vanilla-extract/css";

export const carouselStyle = style({
  position: "relative",
  overflow: "hidden",
  width: "100%",
});

export const carouselInner = style({
  width: "100%",
  transition: "transform 0.5s ease",
});

export const carouselList = style({
  display: "flex",
  overflow: "visible",
  flexWrap: "nowrap"
});

export const slideStyle = style({
  minWidth: "25%",
});
