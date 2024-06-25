import { style } from "@vanilla-extract/css";
import { vars } from "../../app/theme.css";
export const playerPosition = style({
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0",
});

export const playerLayout = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: vars.colorsVars.backgroundSecondary,
  borderTop: `1px solid ${vars.colorsVars.borderColor}`,
  height: "var(--player-height)",
  zIndex: "200",
});
