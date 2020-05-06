
import { Box, ColorModeProvider, CSSReset, Heading, theme, ThemeProvider } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import { MDXProvider } from "@mdx-js/react";
import 'focus-visible/dist/focus-visible';
import { Link } from "gatsby";
import React from "react";
import DocsHeader from "./Docsheader";
import { DocsStyles } from "./DocsLayoutStyles";

const components = {
  h1: props => <Heading as="h1" size="lg" mb="10px" mt="-3px" {...props} />,
  h2: props => <Heading as="h2" size="md" mb="8px" {...props} />
}

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
              <li><Link to="/docs/test">Getting Started</Link></li>
              <li as="a" target="_blank" href='http://localhost:8000/docs/test#set%20up%20auth%20provider'>Auth Provider</li>
              <li><Link to="/docs/test">Callback page</Link></li>
              <li><Link to="/docs/test">Enjoy</Link></li>

            </ul>
          </Box>
          <MDXProvider 
          components={components}
        >
          <Box fontSize={["sm", "md", "lg", "xl"]} maxW="40rem" pl='2rem' pr='1rem'     width={{sm: 'full'}} display='block' className="content" 
          >
            {children}
          </Box>
          </MDXProvider>
        </Box>
        {/* <Box>
            <h3>docs footer</h3>
          </Box> */}
        </Box>
      
      </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}



export default Layout;
