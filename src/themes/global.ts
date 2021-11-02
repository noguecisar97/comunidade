import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font: 400 12px Roboto, sans-serif;
  }

  @media screen and (max-width: 1200px) {
    body, html {
      font: 400 10px Roboto, sans-serif;
    }
  }

  @media screen and (max-width: 800px) {
    body, html {
      font: 400 9px Roboto, sans-serif;
    }
  }

  @media screen and (max-width: 600px) {
    body, html {
      font: 400 8px Roboto, sans-serif;
    }
  }
`
