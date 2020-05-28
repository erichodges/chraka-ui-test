
import { Box, Heading, useColorMode } from "@chakra-ui/core";
import { Global } from '@emotion/core';
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import React from "react";
import { DocsStyles } from "./DocsLayoutStyles";
import Header from "./header";

const components = {
  h1: props => <Heading as="h1" size="xl" fontWeight="700" mb="1.2rem" mt="-3px" {...props} />,
  h2: props => <Heading as="h2" size="lg" fontWeight="900" mb="1rem" {...props} />,
  h3: props => <Heading as="h3" size="md" mb="1rem" {...props} />
}

const Layout = ({ children }) => {
  
  const { colorMode } = useColorMode();

  return (
    <>
      <Global styles={DocsStyles} />
      <Header />
      <Box className="container" bg={colorMode === "light"? "gray.50" : "gray.900"}>
        <Box className="body">
          <Box ml={4} display={{ sm: 'none', md: 'block' }} className="sidebar">
            <ul className='sidenav'>
            <li></li>
              <li><Link to="./docs/getting-started/">Getting Started</Link></li>
              <li><Link to="./docs/auth/">Auth Provider</Link></li>
              <li><Link to="./docs/callback">Callback page</Link></li>
              <li><Link to="./docs/enjoy">Enjoy</Link></li>
            </ul>
          </Box>
          <MDXProvider components={components}>
          <Box fontSize={["sm", "md", "lg", "xl"]} maxW="40rem" pl='2rem' pr='1rem' width={{sm: 'full'}} display='block' className="content">
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
