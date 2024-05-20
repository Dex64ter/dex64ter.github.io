import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background: ${(props) => props.theme.colors['base-text']};
    opacity: 0.5;

    &-thumb {
      background: ${(props) => props.theme.colors.white};
      border-radius: 10px;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }
`
