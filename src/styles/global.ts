import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
    --toastify-color-dark: ${({ theme }) => theme.colors.input};
    --toastify-color-error: #bc5146;
    --toastify-text-color-dark: ${(props) => props.theme.colors.title};
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
  width: 6px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.background};        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.border};    /* color of the scroll thumb */
  border: none  
}

  body, input, textarea, button {
    font: 400 ${(props) => props.theme.font.sizes.md} / 160% Nunito, sans-serif;
  }
`
