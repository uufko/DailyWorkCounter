import { useSelector } from "react-redux"

let themeState = true

export const Colors = {
    headerColor: themeState ? "#E3F4F4" : "#252e3d",
    textColor: themeState ? "black" : "white",
    listColor: themeState ? "#C4DFDF" : "#363c48",
}
