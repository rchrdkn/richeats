import { createGlobalStyle, DefaultTheme } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    font-family: inherit;
    color: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  html {
    min-height: 100%;
    font-size: 16px;
    color: ${props => props.theme.colour.void};
    background-color: ${props => props.theme.colour.mistyRose};
    font-family: ${props => props.theme.fontFamily.openSans};
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  [id="__next"] {
    overflow-x: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle
