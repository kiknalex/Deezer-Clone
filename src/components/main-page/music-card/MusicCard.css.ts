import { linkHover } from "@/components/music-player/TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import colors from "@/styles/colors.css";
import { size } from "@/styles/sizes.css";
import { fontSize } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";


export const link = linkHover;

export const artistLink = style([{
  marginTop: size["size-1"],
  fontSize: size["size-4"],
  color: colors["--gray-6"]
}])
export const tracksNumber = style({
  fontSize: fontSize["font-size-1"],
  color: colors["--gray-6"],
  marginTop: size["size-1"]
})