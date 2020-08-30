import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500');
  }  
  * {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    height: 100%;
  }
  body {
    font-family: ${fonts.family};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    width: 100%;
  }
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  p {
    line-height: 1.5;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  #root{
    width:100%;
    height:100%;
  }
`
