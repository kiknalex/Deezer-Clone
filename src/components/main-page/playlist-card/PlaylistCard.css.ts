import { linkHover } from "@/components/music-player/TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import colors from "@/styles/colors.css";
import { size } from "@/styles/sizes.css";
import { fontSize } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const cardImg = style({
  width: "100%",
  height: "auto",
  borderRadius: "9px",
});

export const link = linkHover;

export const tracksNumber = style({
  fontSize: fontSize["font-size-1"],
  color: colors["--gray-6"],
  marginTop: size["size-1"]
})