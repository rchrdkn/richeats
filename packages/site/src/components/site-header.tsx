import styled from 'styled-components'


const Component = () => (
  <SiteHeader>
    <SiteName>RichEats</SiteName>
  </SiteHeader>
)


export default Component


const SiteHeader = styled.header`
  padding: 1rem 2rem;
`


const SiteName = styled.h1`
  font-family: ${props => props.theme.fontFamily.gentium};
  font-style: italic;
  font-weight: 400;
  font-size: 3rem;
  text-align: center;
`
