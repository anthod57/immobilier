import { ThemeProvider } from "styled-components"
import { useEffect } from 'react'
import { GlobalStyle, Theme, SelectStyle } from "../styles/GlobalStyle"
import store from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from '../firebase/auth';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <AuthProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider >
  )
}

export default MyApp
