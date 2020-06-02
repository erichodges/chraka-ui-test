
import { Box, Heading, useColorMode } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import React from "react";
import { DocsStyles } from "./DocsLayoutStyles";
import Header from "./header";



const Layout = ({ children }) => {
  
  const { colorMode } = useColorMode();
  
  const h1Style = {    
    font: '700 2rem Roboto',
    fontWeight: 'bold'
  }

  const h2Style = {
    font: '700 1rem Roboto',
    fontWeight: 'bold'
  }

  const components = {
    h1: props => <Heading as="h1" style={h1Style} mb=".75rem" mt="-3px" {...props} />,
    h2: props => <Heading as="h2" style={h2Style}  mb="1rem" {...props} />,
    h3: props => <Heading as="h3" size="md" mb="1rem" {...props} />
  }
  
  return (
    <>
      <Global styles={DocsStyles} />
      <Header />
      <Box className="container" bg={colorMode === "light"? "gray.50" : "gray.900"}>
        <Box className="body">
          <Box ml={4} display={{ sm: 'none', md: 'block' }} className="sidebar" color={colorMode === "light"? "#000" : "#ccc"}>
            <ul className='sidenav'>
            <li></li>
              <li><Link to="/docs/getting-started/">Getting Started</Link></li>
              <li><Link to="/docs/auth/">Auth Provider</Link></li>
              <li><Link to="/docs/callback">Callback Page</Link></li>
              <li><Link to="/docs/enjoy">Enjoy</Link></li>
            </ul>
          </Box>
          <MDXProvider components={components}>
          <Box fontSize={["sm", "md", "lg", "xl"]} maxW="40rem" pl='2rem' pr='1rem' width={{sm: 'full'}} color={colorMode === "light"? "#000" : "#ccc"} display='block' className="content">
            {children}
          </Box>
          </MDXProvider>
        </Box>
        {/* <Box>
            <h3>docs footer</h3>
          </Box> */}
        </Box>      
    </>
  )
}



export default Layout;
