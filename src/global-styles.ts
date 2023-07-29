import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  :root {
    --color-bg-main: lightgray;
    --color-bg-panel: #333333;
    --color-bg-menu: #F6F6F6;
    --color-bg-element: #808080;
    --color-text: #fff;
    --color-accend: #CBCBCB;
    --color-text-menu: #000;
    --color-face: gray;

    --font-main: 'Manrope', sans-serif;
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
    font-family: var(--font-main);
    font-size: 0.938rem;
    font-weight: 500;
    font-style: normal;
    line-height: 1.5rem;
    color: var(--color-text);
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
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
    color: inherit;
  }
  
  .small {
    font-size: .75em;
  }
  `
