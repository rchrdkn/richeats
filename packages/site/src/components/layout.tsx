import styled from 'styled-components'
import SiteHeader from './site-header'

const Layout = ({ children }) => (
  <>
    <SiteHeader />

    <Wrapper>
      {children}
    </Wrapper>
  </>
)


export default Layout


const Wrapper = styled.main`
  max-width: 77rem;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
`
