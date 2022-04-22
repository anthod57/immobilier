import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, SelectStyle } from "../styles/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
