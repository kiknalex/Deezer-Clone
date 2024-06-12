import { style } from "@vanilla-extract/css";
import { vars } from "../../app/theme.css";
import { colors } from "../../styles/colors.css";
export const playerPosition = style({
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0"
})

export const playerLayout = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: vars.colorsVars.background,
    borderTop: `1px solid ${vars.colorsVars.borderColor}`,
    height: 80
})