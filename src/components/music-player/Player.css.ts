import { style } from "@vanilla-extract/css";
import { vars } from "../../app/theme.css";
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
    padding: 24,
    backgroundColor: vars.colorNeutral.background,
    borderTop: `1px solid ${vars.colorNeutral.backgroundBorderMain}`
})