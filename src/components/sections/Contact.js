import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { email } from "../../config"
import { ScrollAnimation } from "../animation"

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--red);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  p {
    color: var(--medium);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`

const Contact = () => {
  const container = useRef(null)
  useEffect(() => {
    ScrollAnimation([container.current])
  }, [])
  return (
    <StyledContactSection
      id="contact"
      className="gs_reveal gs_reveal_fromRight"
      ref={container}
    >
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        If you are looking for a full-time employee. or a freelancer. I'm the
        right choice for you, otherwise, if you have a question or just want to
        say hi,I'll get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Get In Touch
      </a>
    </StyledContactSection>
  )
}

export default Contact
