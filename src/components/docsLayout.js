
import { ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import 'focus-visible/dist/focus-visible';
import React from "react";
import DocsHeader from "./Docsheader";
import { GlobalStyles } from "./DocsLayoutStyles";

const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={GlobalStyles} />
      <ColorModeProvider>
      <DocsHeader />
      <div className="container">
      <div className="body">
        <div className="sidebar">Sidebar</div>
        <div className="content">{children}</div>        
      </div>
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
