
import { ColorModeScript } from "@chakra-ui/core"
import React from "react"
export { wrapRootElement } from "./gatsby-browser"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />])
}