import { ColorModeProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/core";
import { css, Global } from '@emotion/core';
import 'focus-visible/dist/focus-visible';
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Header from "./header";

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;


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
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global styles={GlobalStyles} />
        <ColorModeProvider>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div>
            <main>{children}</main>
            <footer>
            </footer>
          </div>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
