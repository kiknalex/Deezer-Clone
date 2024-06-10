import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from './theme.css';

export const heading = style({
  fontSize: vars.typography.xl,
  color: vars.colorPrimary.purple,
});

export const subheading = style({
  fontSize: vars.typography.lg,
  color: vars.colorPrimary.black,
});

export const bodyText = style({
  fontSize: vars.typography.md,
  color: vars.colorPrimary.black,
});

export const smallText = style({
  fontSize: vars.typography.sm,
  color: vars.colorPrimary.black,
});
export const container = style({
  paddingInline: 20,
});

globalStyle("*, :after, :before", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontFamily: ["system-ui", "roboto"],
});
