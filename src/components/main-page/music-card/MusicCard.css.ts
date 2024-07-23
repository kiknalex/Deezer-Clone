import { vars } from "@/app/theme.css";
import { linkHover } from "@/components/music-player/TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import { size } from "@/styles/sizes.css";
import { fontSize } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";


export const link = linkHover;

export const artistLink = style([{
  marginTop: size["size-1"],
  fontSize: size["size-4"],
  color: vars.colorsVars.textSecondary,
}])
export const tracksNumber = style({
  fontSize: fontSize["font-size-1"],
  color: vars.colorsVars.textSecondary,
  marginTop: size["size-1"]
})