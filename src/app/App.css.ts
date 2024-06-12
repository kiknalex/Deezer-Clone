import { style, globalStyle } from "@vanilla-extract/css";




export const container = style({
  paddingInline: 20,
});

globalStyle("a", {
  textDecoration: "none",
  color: "unset"
})

globalStyle("*, :after, :before", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: ["system-ui", "roboto"],
});

globalStyle("button", {
  all: "unset"
})