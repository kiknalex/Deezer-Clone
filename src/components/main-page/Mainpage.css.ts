import { vars } from "@/app/theme.css";
import { style } from "@vanilla-extract/css";

export const mainLayout = style({
    display: "block",
  paddingTop: "var(--header-height)",
  paddingBottom: "24px",
  marginLeft: vars.isLoggedInVars.sidebarWidth,
});
