import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { email } from "../../config"
import { fadeAnimation } from "../animation"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  background-color: var(--black);
  position: relative;
  visibility: hidden;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--light-red);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin: 10px 0 25px 0;
    color: var(--dark-red);
    line-height: 0.9;
  }

  p {
    max-width: 500px;
    color: var(--medium);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`

const Hero = () => {
  const hero = useRef(null)
  const headlineFirst = useRef(null)
  const headlineSecond = useRef(null)
  const headlineThird = useRef(null)
  const contentP = useRef(null)
  const contentButton = useRef(null)
  const one = {
    ref: headlineFirst,
    content: <h1>Hi, my name is</h1>,
  }
  const two = {
    ref: headlineSecond,
    content: <h2 className="big-heading">Elayade Ismail.</h2>,
  }
  const three = {
    ref: headlineThird,
    content: <h3 className="big-heading">Full-Stack JavaScript Developer.</h3>,
  }
  const four = {
    ref: contentP,
    content: (
      <p>
        I'm a full-stack JavaScript developer based in Temara, Morocco.
        specializing in building exceptional websites, applications, and
        everything in between.
      </p>
    ),
  }
  const five = {
    ref: contentButton,
    content: (
      <a href={`mailto:${email}`} className="email-link">
        Get In Touch
      </a>
    ),
  }

  const items = [one, two, three, four, five]
  useEffect(() => {
    setTimeout(
      () =>
        fadeAnimation({
          parent: hero.current,
          nodes: [
            headlineFirst.current.children,
            headlineSecond.current.children,
            headlineThird.current.children,
            contentP.current,
            contentButton.current,
          ],
          direction: "up",
        }),
      1000
    )
  }, [])

  return (
    <StyledHeroSection ref={hero} id="home">
      {items.map((item, i) => (
        <div ref={item.ref} key={i}>
          {item.content}
        </div>
      ))}
    </StyledHeroSection>
  )
}

export default Hero
