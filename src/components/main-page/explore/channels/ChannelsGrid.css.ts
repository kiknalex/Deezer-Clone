import { mediaSize } from "@/styles/sizes.css";
import { style } from "@vanilla-extract/css";

export const gridLayout = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(150px , 250px))",
  gridTemplateRows: "auto",
  columnGap: "24px",
  rowGap: "24px",
  justifyContent: "center",
  "@media": {
    [`screen and (min-width: ${mediaSize["size-xs"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-sm"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-md"]})`]: { columnGap: "34px" },
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xl"]})`]: {},
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: { gridTemplateColumns: "repeat(5, 250px)"},
  },
});
