import { vars } from "@/app/theme.css";
import { mediaSize } from "@/styles/sizes.css";
import { style } from "@vanilla-extract/css";

export const carouselStyle = style({
  overflow: "hidden",
  width: "100%",
  minWidth: "600px",
  vars: { "--carousel-gap": "24px" },
  "@media": {
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: {
      vars: { "--carousel-gap": "34px" },
    },
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
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: {
      gridAutoColumns: "calc(20% - var(--carousel-gap))",
    },
  },
});

export const controlButton = style({
  cursor: "pointer",
  color: vars.colorsVars.buttonCommon,
  textAlign: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  transition: "background-color 0.2s, opacity 0.2s",
  ":hover": {
    backgroundColor: vars.colorsVars.linkHover,
  },
  ":active": {
    backgroundColor: vars.colorsVars.linkActive,
  },
  ":disabled": {
    cursor: "not-allowed",
    opacity: "0.2",
  },
  selectors: {
    "&:hover:disabled": {
      backgroundColor: "transparent",
    },
  },
});
