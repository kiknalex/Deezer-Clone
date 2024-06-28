import { mediaSize } from "@/styles/sizes.css";
import { style } from "@vanilla-extract/css";

export const carouselStyle = style({
  overflow: "hidden",
  width: "100%",
  minWidth: "600px",
  vars: { "--carousel-gap": "24px" },
  "@media": {
    [`screen and (min-width: ${mediaSize["size-xs"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: {
      vars: { "--carousel-gap": "34px" },
    },
    [`screen and (min-width: ${mediaSize["size-md"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xl"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: {},
  },
});

export const carouselInner = style({
  width: "100%",
  transition: "transform 0.6s ease-in-out",
});

export const carouselList = style({
  width: `calc(100% + var(--carousel-gap))`,
  display: "grid",
  overflow: "visible",
  gridAutoColumns: `calc(25% - var(--carousel-gap))`,
  gridAutoFlow: "column",
  columnGap: "var(--carousel-gap)",
  "@media": {
    [`screen and (min-width: ${mediaSize["size-xs"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: {
    },
    [`screen and (min-width: ${mediaSize["size-md"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xl"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: {gridAutoColumns: "calc(20% - var(--carousel-gap))"},
  },
});
export const slideStyle = style({});
