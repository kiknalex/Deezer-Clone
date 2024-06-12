import { style } from "@vanilla-extract/css";

export const TrackInfoLayout = style({
    display: "flex",
})

export const imageSize = style({
    width: 46,
    height: "auto"
})

export const linkHover = style({
    ":hover": {
        textDecoration: "underline"
    }
})

export const titleContainer = style({
    height: "100%"
})
