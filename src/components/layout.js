import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"
import Header from "./header"
import Social from "./social"
import Email from "./email"
import Footer from "./footer"
import Loader from "../Loader"
import Head from "./head"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    handleExternalLinks()
  }, [])
  return (
    <>
      <Head />
      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {loading ? (
            <Loader setLoading={setLoading} />
          ) : (
            <StyledContent>
              <Header />
              <Social />
              <Email />
              <div id="content">
                {children}
                <Footer />
              </div>
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
