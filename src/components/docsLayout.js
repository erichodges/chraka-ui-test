
import { Box, ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import 'focus-visible/dist/focus-visible';
import { Link } from "gatsby";
import React from "react";
import DocsHeader from "./Docsheader";
import { DocsStyles } from "./DocsLayoutStyles";

const Layout = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={DocsStyles} />
      <ColorModeProvider>
      <DocsHeader />
      <Box className="container">
      <Box className="body">
        <Box ml={4} display={{ sm: 'none', md: 'block' }} className="sidebar">
          <ul className='sidenav'>
            <li>
              <Link to="/docs/test">
                  Getting Started
              </Link>
            </li>
            <li>AuthProvider</li>
            <li>Callback page</li>
            <li>Enoy</li>
          </ul>
        </Box>
        <Box fontSize={["sm", "md", "lg", "xl"]} maxW="36rem" pl='2rem' pr='1rem'     width={{sm: 'full'}} display='block' className="content">{children}</Box>        
      </Box>
      <Box>
          <h3>docs footer</h3>
        </Box>
      </Box>
      </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}



export default Layout;
