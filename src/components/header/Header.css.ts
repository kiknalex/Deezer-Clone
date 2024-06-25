import { style } from "@vanilla-extract/css";
import { vars } from "@/app/theme.css";


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