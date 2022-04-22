import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, SelectStyle } from "../styles/GlobalStyle"
import Head from 'next/head'
import store from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider >
  )
}

export default MyApp
