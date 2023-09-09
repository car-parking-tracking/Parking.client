import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  :root {
    --bg-color: lightgray;
    --bg-active: #3C4158;
    --txt-white: #FFF;
    --txt-black: #000;
    --button-bg-default: #1D65ED;
    --blue-light: #f2f9ff;
    --grey-button: #e0e0e0;
    --grey: #878787;
    --grey-light: #F8FAFB;
    --button-bg-hover: #1655BB;
    --button-bg-active: #3D3ACE;
    --button-bg-disabled: #F4F3FE;
    --button-text-disabled: #C5C0DB;
    --search-item-hover: #F8FAFB;
    --item-desc: #1B1F3BA6;
    --item-name: #191C30E5;
    --parking-card-width: 16.6875rem;
    --parking-card-height: 15.6875rem;
    --red: #FF2121;
    --new-white: #FFFFFF;
    --new-dark: #3C4158;
    --new-grey: #878787;
    --new-grey-light: #E0E0E0;
    --new-grey-extra: #F8FAFB;
    --new-bg-hover: #1655BB;
    --new-bg-active: #1D65ED;
  }

  html,
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    min-width: 20rem;
    min-height: 100vh;
    background-color: var(--grey-light);
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    font-style: normal;
    font-variant-numeric: lining-nums proportional-nums;
    line-height: 1.5rem;
    color: var(--txt-white);
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
    color: var(--txt-white)
  }
}`
