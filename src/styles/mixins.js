import { css, keyframes } from "styled-components"

const button = css`
  color: var(--red-clr);
  background-color: transparent;
  border: 1px solid var(--red);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--light-red);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`

const slideRight = keyframes`
   0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const nav = css`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transition-timing-function: linear;
  }
`

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: var(--red);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: var(--red);
    &:hover,
    &:focus,
    &:active {
      color: var(--red);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--red) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--red);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  nav,

  slideRight,

  smallButton: css`
    color: var(--light-red);
    background-color: transparent;
    border: 1px solid var(--red);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      border: 1px solid var(--dark-red);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--light-red);
    background-color: transparent;
    border: 1px solid var(--red);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
      border: 1px solid var(--dark-red);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--dark-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--dark-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--red);
      }
    }
  `,
}

export default mixins
