import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class SoftMapsDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <meta name="HandheldFriendly" content="True" />
          <meta httpEquiv="cleartype" content="on" />
        </Head>
        <body data-app="">
          <Main />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400" rel="preconnect" />
          <NextScript />
          <script id="__SOFTMAPS_GLOBAL_DATA__" type="application/json">
            window.__SOFTMAPS_GLOBAL_DATA__ = {}
          </script>
        </body>
      </Html>
    )
  }
}

export default SoftMapsDocument
