import { style } from "@vanilla-extract/css";
import { vars } from "../../../app/theme.css";

export const tooltip = style({
  visibility: "hidden",
  position: "absolute",
  top: "-30px",
  backgroundColor: vars.colorsVars.backgroundSecondary,
  padding: "5px",
  borderRadius: "6px",
  boxShadow: "1px 6px 4px -1px rgba(0,0,0,0.47)",
  left: "50%",
  transform: "translate(-50%, 1px)",
  zIndex: "-1",
  transition: "opacity 0.3s ease, visibility 0.1s ease, transform 0.1s ease",
  textWrap: "nowrap",
  fontSize: "0.625rem",
  opacity: 0,
  "::after": {
    content: " ",
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: `${vars.colorsVars.backgroundSecondary} transparent transparent transparent`,
  },
});

export const tooltipVisible = style({
  visibility: "initial",
  zIndex: "10",
  opacity: "1",
  transform: "translate(-50%, 0)",
  scale: "1",
});
