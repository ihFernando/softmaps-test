import { createGlobalStyle, css } from 'styled-components'

const resetCSS = css`
  button {
    -webkit-font-smoothing: antialiased;
    font: inherit;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    line-height: inherit;
    user-select: none;
    -webkit-appearance: none;
  }
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  address,
  code,
  em,
  img,
  small,
  strong,
  sub,
  sup,
  tt,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  embed,
  figure,
  figcaption,
  footer,
  header,
  menu,
  nav,
  section,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  b {
    font: inherit;
    font-size: 100%;
    font-weight: 900;
    vertical-align: baseline;
  }
`

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  :root {
    --text-title-g: 2.5rem;
    --text-title-m: 2rem;
    --text-title-p: 1.75rem;
    --text-body-g: 1.25rem;
    --text-body-m: 1rem;
    --text-body-p: 0.75rem;
    --text-body-pp: 0.5rem;

    --color-dark: 0, 8, 38;
    --color-dark-high: rgba(0, 8, 38, 0.8);
    --color-dark-medium: rgba(0, 8, 38, 0.6);
    --color-dark-low: rgba(0, 8, 38, 0.44);

    --color-light-high: 255, 255, 255;
    --color-light-medium: 230, 234, 238;
    --color-light-low: 212, 218, 224;
    --color-light-gray: 246 246 246;

    --color-primary: rgb(121, 75, 196);
    --color-secondary: rgba(121, 75, 196, .6);
    --color-warning: rgb(255, 80, 41);

    --theme-shadow-light: 0 1px 6px 0 var(--color-light-low);
    --theme-shadow-dark: 0 1px 6px 0 #d0d0d0;
    --theme-border-radius: 0.375rem;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    word-wrap: break-word;
    font-kerning: normal;
    padding: 0;
    margin: 0;
    background-color: var(---color-light-low);
  }

  a {
    width: 100%; // Arummar depois
    display: inline-block;
    font-weight: 900;
    text-decoration: none;
    color: var(--color-primary);
  }

  a:hover {
    text-decoration: none;
  }

  ul, li {
    width: 100%;
  }

  li {
    list-style: none;
  }

  li:hover {
    color: var(--color-primary);
    font-weight: 900;
  }

  strong {
    font-weight: 900;
  }
`

export default GlobalStyle
