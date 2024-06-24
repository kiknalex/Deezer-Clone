import { vars } from "@/app/theme.css";
import { sizePx } from "@/styles/sizes.css";
import { style } from "@vanilla-extract/css";

export const searchWrapper = style({
  width: "375px",
  position: "relative",
});

export const searchInput = style({
  all: "unset",
  backgroundColor: vars.colorsVars.linkHover,
  width: "100%",
  height: "100%",
  border: "3px solid transparent",
  borderRadius: "9px",
  paddingInlineStart: sizePx["size-11"],
  paddingInlineEnd: sizePx["size-11"],

  ":hover": {
    backgroundColor: vars.colorsVars.linkActive,
    transition: "background-color 0.2s",
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

export const buttonClear = style({
  cursor: "pointer",
  opacity: 0,
  transition: "opacity 0.150s",
});

export const buttonClearShow = style({
  opacity: 1,
});
