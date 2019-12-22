import { createGlobalStyle } from 'styled-components';

import { media } from '@core/static';


export const GlobalStyles = createGlobalStyle`
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  html {
    -webkit-text-size-adjust: 100%;
    line-height: initial;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 10px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: 0;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  input, textarea, button {
    border: none;
    outline: none;
    background: unset;
  }

  button {
    cursor: pointer;
  }
    
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  a:hover {
      color: revert;
      text-decoration: none;
  }
          
  fieldset {
    border: none;
    outline: none;
    padding: 0 0;
    margin: 0 0;
    display: block;
  }

  ul, li {
    padding: 0 0;
    margin: 0 0;
  }

  ul {
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
    padding: 0 0;
    margin: 0 0;
  }

  *:before, *:after {
    box-sizing: border-box;
  }
    
  html {
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  .no-overflow {
      overflow: hidden !important;
  }
      
  strong {
    font-weight: 600;
  }

  b {
    font-weight: 700;
  }

  .hidden-xs {
    ${media.xs} {
      display: none !important;
    }
  }

  .hidden-sm {
    ${media.sm} {
      display: none !important;
    }
  }

  .hidden-smPlus {
    ${media.smPlus} {
      display: none !important;
    }
  }

  .hidden-smMinus {
    ${media.smMinus} {
      display: none !important;
    }
  }
  
  .hidden-md {
    ${media.md} {
      display: none !important;
    }
  }

  .hidden-lg {
    ${media.lg} {
      display: none !important;
    }
  }

  .visible-xs {
      display: none;
    ${media.xs} {
      display: block !important;
    }
  }

  .visible-sm {
      display: none;
    ${media.sm} {
      display: block !important;
    }
  }

  .visible-smPlus {
    display: none;
    ${media.smPlus} {
      display: block !important;
    }
  }

  .visible-smMinus {
    display: none;
    ${media.smMinus} {
      display: block !important;
    }
  }
  
  .visible-md {
    display: none;
    ${media.md} {
      display: block !important;
    }
  }

  .visible-lg {
    display: none;
    ${media.lg} {
      display: block !important;
    }
  }

  .center {
    margin: 0 auto;
    width: 1022px;
    max-width: 100%;
    position: relative;
    ${media.sm} {
      width: 768px;
    }
    ${media.xs} {
      width: 100%;
    }
  }
`;

export default GlobalStyles;
