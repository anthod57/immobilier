import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, SelectStyle } from "../styles/GlobalStyle"
import Head from 'next/head'
import Select from 'react-select'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
