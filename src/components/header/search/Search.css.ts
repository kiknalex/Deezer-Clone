import { vars } from "@/app/theme.css";
import { sizePx } from "@/styles/sizes.css";
import { style } from "@vanilla-extract/css";

export const searchWrapper = style({
  width: "375px",
  position: "relative",
});

export const searchInput = style({
  all: "unset",
  background: vars.colorsVars.linkHover,
  width: "100%",
  height: "100%",
  border: "3px solid transparent",
  borderRadius: "9px",
  paddingInlineStart: sizePx["size-11"],
  paddingInlineEnd: sizePx["size-11"],
  transition: "filter 0.2s",

  ":hover": {
    filter: "contrast(0.9)",
  },
  "::placeholder": {
    color: vars.colorsVars.inputPlaceholder,
  },
  ":active": {
    borderColor: vars.colorsVars.buttonImportant,
  },
  ":focus": {
    borderColor: vars.colorsVars.buttonImportant,
  },
  "::-webkit-search-cancel-button": {
    display: "none",
  },
});

export const buttonSearch = style({
  zIndex: "2",
})

export const buttonClear = style({
  opacity: 0,
  transition: "opacity 0.150s",
  color: vars.colorsVars.textSecondary,
});

export const buttonClearShow = style({
  opacity: 1,
  cursor: "pointer",
});
