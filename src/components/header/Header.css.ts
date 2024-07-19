import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";
import { fontSize } from "@/styles/typography.css";


export const headerStyle = style({
    position: "fixed",
    top: "0px",
    left: vars.isLoggedInVars.sidebarWidth,
    right: "0px",
    height: "var(--header-height)",
    borderBottom: `1px solid ${vars.colorsVars.borderColor}`,
    backgroundColor: vars.colorsVars.background,
    zIndex: "90",
})

export const darkmodeButton = style({
    cursor: "pointer",
    fontSize: fontSize["font-size-4"],
    padding: "8px",
    marginRight: "12px",
})