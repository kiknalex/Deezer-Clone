import { mediaSize } from "@/styles/sizes.css";
import { fontSize, fontWeight } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  minWidth: "100px",
  minHeight: "75px",

  color: "white",
  fontSize: fontSize["font-size-3"],
  fontWeight: fontWeight["font-weight-6"],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "9px",
  transition: "opacity 0.250s",
  ":hover": {
    opacity: "0.8",
  },
  "@media": {
    [`screen and (min-width: ${mediaSize["size-xs"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: {
      fontSize: fontSize["font-size-4"],
    },
    [`screen and (min-width: ${mediaSize["size-md"]})`]: {
      fontSize: fontSize["font-size-5"],
      height: "80px",
    },
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: {
      fontSize: fontSize["font-size-6"],
      height: "110px",
    },
    [`screen and (min-width: ${mediaSize["size-xl"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: { height: "130px" },
  },
});
