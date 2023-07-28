import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  :root {
    --color-bg-main: lightgray;
    --color-bg-panel: #333333;
    --color-text: #fff;
  }

  html,
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    min-width: 20rem;
    min-height: 100vh;
    background-color: var(--color-bg-main);
    font-family: 'Manrope', sans-serif;
    font-size: 0.938rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.5rem;
    color: var(--color-text);
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--color-text)
  }
  
  .small {
    font-size: .75rem;
  }
  `
