import { style } from "@vanilla-extract/css";
import { sidebarWidth } from "@/components/sidebar/Sidebar.css.ts"
import { vars } from "@/app/theme.css";


export const headerStyle = style({
    position: "fixed",
    top: "0px",
    left: "var(--sidebar-width)",
    right: "0px",
    height: "80px",
    borderBottom: `1px solid ${vars.colorsVars.borderColor}`,
    backgroundColor: vars.colorsVars.background,
})