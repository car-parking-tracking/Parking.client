import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  
  :root {
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
    min-height: -webkit-fill-available;
    background-color: var(--new-grey-extra);
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-variant-numeric: lining-nums proportional-nums;
    line-height: 1.5rem;
    color: var(--new-white);

    @media (max-width: 48rem) {
      height: 90%;
      min-height: 90%;
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
    color: var(--new-white)
  }
}`
