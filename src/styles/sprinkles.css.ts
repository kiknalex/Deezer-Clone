import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { colors } from "./colors.css";
import { fontFamily, fontWeight, lineHeight, fontSize } from "./typography.css";
import { position, size, sizePx } from "./sizes.css";
import { borderSize, borderRadius } from "./border.css";

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
    width: position
    
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
    color: colors,
    background: colors,
    fontFamily: fontFamily,
    fontSize: fontSize,
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  systemProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];