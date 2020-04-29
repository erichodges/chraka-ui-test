import { ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { css, Global } from '@emotion/core';
import 'focus-visible/dist/focus-visible';
import React from "react";
import DocsHeader from "./Docsheader";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;




const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <ColorModeProvider>
      <DocsHeader />
      <div>
        <main>{children}</main>
        <footer>
          <h3>docs footer</h3>
        </footer>
      </div>
      </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}



export default Layout;
