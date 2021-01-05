import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { loadingAnimation } from "./components/animation"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 99;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    z-index: 99;
    background-color: var(--dark-red);
  }
  .two {
    left: 33.3%;
  }
  .there {
    left: 66.6%;
  }
`

const Loader = ({ setLoading }) => {
  const first = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  useEffect(() => {
    loadingAnimation([first.current, second.current, third.current], setLoading)
  }, [])
  return (
    <Container>
      <div ref={first} className="overlay one"></div>
      <div ref={second} className="overlay two"></div>
      <div ref={third} className="overlay there"></div>
    </Container>
  )
}

export default Loader
