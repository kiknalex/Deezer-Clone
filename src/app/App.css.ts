import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  paddingInline: 20,
});

export const app = style({
  color: vars.colorsVars.textPrimary,
  background: vars.colorsVars.background
})

globalStyle("a", {
  textDecoration: "none",
  color: "unset",
  
});
globalStyle("input[type='range']", {
  margin: "0",
});
globalStyle("p", {
  margin: 0
})

globalStyle("*, :after, :before", {
  boxSizing: "border-box",
});



globalStyle("body", {
  margin: 0,
  minHeight: "100vh",
  fontFamily: ["system-ui", "roboto"],

});
globalStyle("#root", {
  
})
globalStyle("button", {
  all: "unset",
});
