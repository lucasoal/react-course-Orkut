import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
/* RESET CSS */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #d9e6f6;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100px;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
