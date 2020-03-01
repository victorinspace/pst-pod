/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            backgroundColor: `#110700`,
            color: `#b9b19a`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              fontStyle: `italic`,
              color: `#5f4727`
            }}
          >
            ©2019 - {new Date().getFullYear()} Public Space Travel Podcast | {` `} Header image from 
            <a 
              style={{
                color: `#e69d3d`,
                textDecoration: `none`
              }} 
              target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@pawelj"> Pawel Janiak</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
