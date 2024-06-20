import { style } from "@vanilla-extract/css";

export const previewWidth = style({
    width: "300px",
})

export const imageSize = style({
    width: "42px",
    height: "auto",
})

export const linkHover = style({
    ":hover": {
      textDecoration: "underline",
    },
  });