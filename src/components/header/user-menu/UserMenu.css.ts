import { vars } from "@/app/theme.css";
import colors from "@/styles/colors.css";
import { sizePx } from "@/styles/sizes.css";
import { fontWeight } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const loginLink = style({
     border: `1px solid ${colors["--gray-5"]}`,
     backgroundColor: vars.colorsVars.background,
     borderRadius: "9px",
     minHeight: "32px",
     padding: `${sizePx["size-1"]} ${sizePx["size-6"]}`,
     fontWeight: fontWeight["font-weight-6"],
     cursor: "pointer",
     transition: "filter 0.2s",
     ":hover":  {
        filter: "contrast(0.9)",
     },
     
})