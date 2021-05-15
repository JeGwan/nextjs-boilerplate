import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
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
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
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
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  input,
  select,
  button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  main {
    box-sizing: border-box;
    display: block;
  }

  html {
    // 1rem = 10px
    font-size: 10px;
    line-height: 1.6;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Lato, Roboto, "Segoe UI",
      "Helvetica Neue", Helvetica, Verdana, Arial, sans-serif;
    // 모달이 열릴 경우 스크롤 막기 위해
    font-size: 1.6rem;
    &.modal-open {
      overflow: hidden;
    }
  }

  button,
  input,
  select {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  p {
    word-break: keep-all;
  }

  // font 변경될 경우 password의 특수문자를 지원하지 않는 폰트 때문에 sans-serif로 고정
  input[type="password"] {
    font-family: sans-serif;
  }

  a {
    color: #1b1b1b;
    transition: color 0.3s;
    &:hover {
      color: #0050ff;
    }
  }
`;

export default GlobalStyle;
