import React, {useEffect} from 'react'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href={"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"} rel="preload" as="style" />
            <link href={"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap"} rel="preload" as="style"></link>
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}