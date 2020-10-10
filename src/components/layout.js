
import { ChakraProvider, CSSReset, useColorMode } from "@chakra-ui/core";
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

  const colorMode = useColorMode();

  return (    
    <ChakraProvider theme={theme}>
      
      <CSSReset />
      <Header theme={theme} siteTitle={data.site.siteMetadata.title} />
      <div>
        <main bg={colorMode === "light"? "gray.50" : "gray.900"}>{children}</main>
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
