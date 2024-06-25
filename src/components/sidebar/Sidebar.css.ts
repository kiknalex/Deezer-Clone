import { playerHeight } from "../music-player/Player.css";
import { vars } from "@/app/theme.css";
import { fontSize } from "@/styles/typography.css";
import { createVar, style } from "@vanilla-extract/css";

export const sidebarWidth = createVar();


export const sidebar = style({
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  width: vars.isLoggedInVars.sidebarWidth,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  paddingBottom: playerHeight,
  color: vars.colorsVars.textPrimary,
  background: vars.colorsVars.backgroundSecondary,
  borderRight: `solid ${vars.colorsVars.borderColor} 1px`,
  zIndex: "100",
});

export const link = style({
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
})

export const navLink = style({
  borderRadius: "9px",
  transition: "background-color 0.150s",
  ":hover": {
    backgroundColor: vars.colorsVars.linkHover,
  },
  ":active": {
    backgroundColor: vars.colorsVars.linkActive
  },
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "flex",
      justifyContent: "center",
    },
  },
})
export const deezerHeartLogo = style({
  height: "32px",
  "@media": {
    "screen and (min-width: 1160px)": {
      display: "none",
    },
  },
});

export const deezerTextLogo = style({
  "@media": {
    "screen and (max-width: 1160px)": {
      display: "none",
    },
  },
})

export const navLogoSpan = style({
  width: "24px",
  fontSize: fontSize["font-size-6"],
  color: vars.colorsVars.textPrimary,
  display: "flex",
  justifyContent: "center",
})
