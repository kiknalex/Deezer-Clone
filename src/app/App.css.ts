import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  paddingInline: 20,
});

export const app = style({
  color: vars.colorsVars.textPrimary,
  background: vars.colorsVars.background,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: "0",
})
globalStyle("a", {
  textDecoration: "none",
  color: "unset",
});
globalStyle("input[type='range']", {
  margin: "0",
});
globalStyle("p", {
  margin: 0,
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
});
globalStyle("button", {
  all: "unset",
});
