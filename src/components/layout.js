
import { Box, ChakraProvider } from "@chakra-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import theme from "./gatsby-plugin-chakra-ui/theme";
import Header from "./header";



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  


  return (    
    <ChakraProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Box as="main">
          {children}
        </Box>
        <footer>
        </footer>
      </div>      
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
