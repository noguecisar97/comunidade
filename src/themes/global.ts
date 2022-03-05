import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    font: 400 13px Roboto, sans-serif;
    overflow-x: hidden ;
    width: 101vw;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.fifth};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.fourth};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.primary};
    }

    scrollbar-color: ${(props) => props.theme.colors.fourth} ${(props) =>
  props.theme.colors.fifth} ;
    scrollbar-width: thin;
  }
  @media screen and (max-width: 1200px) {
    body, html {
      font: 400 12px Roboto, sans-serif;
    }
  }
  @media screen and (max-width: 900px) {
    body, html {
      font: 400 11px Roboto, sans-serif;
    }
  }
  @media screen and (max-width: 700px) {
    body, html {
      font: 400 10px Roboto, sans-serif;
    }
  }
`
