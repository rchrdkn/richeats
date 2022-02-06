import styled from 'styled-components'

const Listing = ({ items, of }) => (
  <Wrapper>
    {[].concat(items).map(
      item => of({ item })
    )}
  </Wrapper>
)


export default Listing


const Wrapper = styled.div`
`
