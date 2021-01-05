import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import useScrollDirection from "../hooks/useScrollDirection"
import Menu from "./Menu"
import { navLinks } from "../config"
import { fadeAnimation } from "./animation"

const HeaderContainer = styled.header`
  width: 100%;
  height: var(--nav-height);
  padding: 0 50px;
  position: fixed;
  top: 0px;
  z-index: 11;
  background-color: var(--black);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${props =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: var(--dark);
      box-shadow: 0 10px 30px -10px var(--dark-shadow);
    `};

  ${props =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--dark-shadow);
    `};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

const HeaderInner = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  ${({ theme }) => theme.mixins.flexBetween};
  visibility: hidden;
`

const Logo = styled.div`
  a {
    font-weight: 700;
    font-size: 20px;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: var(--light-red);
  }
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-md);

      a {
        padding: 10px;

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--light-red);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

const Header = () => {
  const scrollDirection = useScrollDirection("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  const header = useRef(null)
  const logo = useRef(null)
  const about = useRef(null)
  const work = useRef(null)
  const contact = useRef(null)
  const resume = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    fadeAnimation({
      parent: header.current,
      nodes: [
        logo.current,
        about.current,
        work.current,
        contact.current,
        resume.current,
      ],
      direction: "down",
    })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const refs = [about, work, contact]
  return (
    <HeaderContainer
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <HeaderInner ref={header}>
        <Logo ref={logo}>
          <Link to="#home">ELAYADE</Link>
        </Logo>
        <Navigation>
          <ol>
            {navLinks &&
              navLinks.map(({ name, url }, i) => {
                return (
                  <li ref={refs[i]} key={i}>
                    <Link to={url}>{name}</Link>
                  </li>
                )
              })}
          </ol>
          <div>
            <a ref={resume} href="/resume.pdf" className="resume-button">
              Resume
            </a>
          </div>
        </Navigation>
        <Menu />
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header
