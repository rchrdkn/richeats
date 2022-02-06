import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const origRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => origRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
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
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital@0;1&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>

          <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }

}
