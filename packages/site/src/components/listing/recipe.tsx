import styled from 'styled-components'
import Recipe from '../../types/recipe'


interface Props {
  item: Recipe
}


const Listing = ({ item }: Props) => (
  <Wrapper>
    <Title>{ item.name }</Title>
    <Para>{ item.desc }</Para>
  </Wrapper>
)


export default Listing


const Wrapper = styled.article`
  * + & {
    margin-top: 1.5rem;
  }
`


const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.gentium};
  font-size: 1.5rem;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
`


const Para = styled.p`
  * + & {
    margin-top: 1rem;
  }
`
