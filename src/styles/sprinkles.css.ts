import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import ColorsHSL, { colors } from "./colors.css";
import { fontFamily, fontSize, fontWeight } from "./typography.css";
import { position, size, sizePx } from "./sizes.css";

const responsiveProperties = defineProperties({
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    gap: sizePx,
    paddingTop: sizePx,
    paddingBottom: sizePx,
    paddingLeft: sizePx,
    paddingRight: sizePx,
    marginTop: size,
    marginBottom: size,
    marginLeft: size,
    marginRight: size,
    height: position,
    width: position,
    position: ["relative", "absolute", "fixed", "sticky", "static"],
    top: position,
    right: position,
    bottom: position,
    left: position,
    overflow: ["visible", "hidden", "clip", "scroll", "auto"],
    borderRadius: ["3px", "4px", "5px", "6px", "7px", "8px", "9px", "12px", "50%"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const systemProperties = defineProperties({
  properties: {
    color: ColorsHSL,
    background: ColorsHSL,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  systemProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
