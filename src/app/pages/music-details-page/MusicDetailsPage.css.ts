import { vars } from "@/app/theme.css";
import { mediaSize } from "@/styles/sizes.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const headingContainer = style({
  display: "flex",
  gap: "32px",
});

export const mainImageContainer = style({
  flex: "0 1 auto",
});

export const mainImage = style({
  display: "block",
  width: "238px",
  height: "auto",
  "@media": {
    [`screen and (min-width: ${mediaSize["size-md"]})`]: { width: "264px" },
    [`screen and (min-width: ${mediaSize["size-lg"]})`]: { width: "280px" },
    [`screen and (min-width: ${mediaSize["size-xxl"]})`]: { width: "324px" },
  },
});

export const description = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: "1 1 0%",
});

export const creatorBadgeImg = style({
  width: "24px",
  height: "auto",
  borderRadius: "50%",
});

export const creatorBadgeLink = style({
  ":hover": {
    textDecoration: "underline",
  },
});
export const musicInfoList = style({
  display: "flex",
  color: vars.colorsVars.textSecondary,
});

globalStyle(`${musicInfoList} > li:not(:first-child)::before`, {
  content: "|",
  marginInline: "5px",
})