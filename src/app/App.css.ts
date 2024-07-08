import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import { mediaSize } from "@/styles/sizes.css";

export const container = style({
  padding: 24,
  marginInline: "auto",
  '@media': {
    [`screen and (min-width: ${mediaSize["size-xs"]})`]: { width: '716px' },
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: { width: '826px' },
    [`screen and (min-width: ${mediaSize["size-md"]})`]: { width: '902px' },
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: { width: '1034px' },
    [`screen and (min-width: ${mediaSize["size-xl"]})`]: { width: '1154px' },
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: { width: '1452px' },
  },
});

export const app = style({
  color: vars.colorsVars.textPrimary,
  backgroundColor: vars.colorsVars.background,
  paddingBottom: "var(--player-height)",
});

export const smallScreenHide = style({
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "none",
    },
  },
});
export const bigScreenHide = style({
  "@media": {
    "screen and (min-width: 1160px)": {
      display: "none",
    },
  },
});
globalStyle("h1, h2, h3, h4, h5, h6, p, ul", {
  margin: "0",
});
globalStyle("a", {
  textDecoration: "none",
  color: "unset",
});
globalStyle("input[type='range']", {
  margin: "0",
});
globalStyle("ul", {
  listStyle: "none",
  padding: "0",
});

globalStyle("*, :after, :before", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: ["system-ui", "roboto"],
});
globalStyle("#root", {
  minHeight: "100vh",
  vars: {
    "--sidebar-width": "0px",
    "--header-height": "80px",
    "--player-height": "80px",
  },
});
globalStyle("button", {
  all: "unset",
});
