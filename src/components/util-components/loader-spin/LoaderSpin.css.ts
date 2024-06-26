import { vars } from "@/app/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

const rotate = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  });

export const spinWrapper = style({
    height: "calc(100vh - var(--player-height) - var(--header-height))",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "100px",
    justifyContent: "center",
})


export const spinner = style({
    border: `5px solid ${vars.colorsVars.backgroundSecondary}`,
    borderRadius: "50%",
    borderTop: `5px solid ${vars.colorsVars.buttonCommon}`,
    width: "50px",
    height: "50px",
    
    animation: `${rotate} 0.750s linear infinite`,
})