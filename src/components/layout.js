
import 'focus-visible/dist/focus-visible';
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
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
    <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
          </footer>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
