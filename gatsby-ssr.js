const ColorModeScript = require('@chakra-ui/core')

export { wrapRootElement } from './gatsby-browser';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="dark" key="chakra-ui-no-flash" />,
  ])
}