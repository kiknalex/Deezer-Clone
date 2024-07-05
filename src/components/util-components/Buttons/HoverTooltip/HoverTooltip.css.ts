import { style, createVar } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";

export const arrowPosition = createVar();

export const tooltip = style({
  visibility: "hidden",
  position: "absolute",
  textWrap: "nowrap",
  bottom: "calc(100%  + 7px)",
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.colorsVars.backgroundSecondary,
  borderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 25px 10px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;",
  left: "50%",
  transform: "translate(-50%)",
  zIndex: "-1",
  transition: "opacity 0.3s ease, visibility 0.1s ease, transform 0.1s ease",
  fontSize: "0.625rem",
  opacity: 0,
  "::after": {
    content: " ",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: `translateX(${arrowPosition})`,
    marginLeft: "-7px",
    borderWidth: "7px",
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

export const backgroundStyle = style({
  backgroundColor: vars.colorsVars.backgroundSecondary
})