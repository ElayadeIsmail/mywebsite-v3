import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { ScrollAnimation } from "../animation"

const StyledAboutSection = styled.section`
  max-width: 900px;

  h2 {
    display: flex;
    align-items: flex-end;
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
const StyledText = styled.div`
  p {
    color: var(--medium);
  }
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-size: var(--fz-xs);
      color: var(--medium);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--red);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-red);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--dark);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--red);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "NextJs",
  "Node.js",
  "Graphql",
  "PostgreSQL",
  "Tailwindcss"
]

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "me.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#e20001" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const heading = useRef(null)
  const content = useRef(null)
  const imageContainer = useRef(null)
  useEffect(() => {
    ScrollAnimation([heading.current, content.current, imageContainer.current])
  }, [])
  return (
    <StyledAboutSection id="about">
      <h2 ref={heading} className="numbered-heading gs_reveal">
        About Me
      </h2>
      <div className="inner">
        <StyledText ref={content} className="gs_reveal gs_reveal_fromLeft">
          <div>
            <p>A 23-years old male from Temara, Morocco.</p>
            <p>
              Passionate about everything related to web development. I enjoy
              creating things that live on the internet,whether that be
              websites, applications, or anything in between.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic
          ref={imageContainer}
          className="gs_reveal gs_reveal_fromRight"
        >
          <div className="wrapper">
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              alt="Avatar"
              className="img"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
}

export default About
