import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const IndexPage = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
)

export default IndexPage
