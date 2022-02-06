import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../lib/theme'
import GlobalStyle from '../lib/global-style'
import Layout from '../components/layout'


const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)


export default App
