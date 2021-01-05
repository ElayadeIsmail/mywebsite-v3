import React from "react"
import styled from "styled-components"
import { socialMedia } from "../config"
import { Icon } from "./icons"

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--medium);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledCredit = styled.div`
  color: var(--medium);
  font-size: var(--fz-xs);
  line-height: 1;

  a {
    padding: 10px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, link }, i) => (
              <li key={i}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  aria-label={name}
                >
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://brittanychiang.com/"
        >
          <div>Inspired by Brittany Chiang</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  )
}

export default Footer
