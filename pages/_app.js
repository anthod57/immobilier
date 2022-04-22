import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, SelectStyle } from "../styles/GlobalStyle"
import Head from 'next/head'
import Select from 'react-select'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href={"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"} rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
