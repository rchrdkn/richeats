import { NextPage, GetStaticProps } from 'next'
import Recipe from '../types/recipe'
import { sanityClient } from '../lib/sanity'
import recipesQuery from '../queries/recipes'
import Listing from '../components/listing'
import ListingRecipe from '../components/listing/recipe'


interface Props {
  recipes: Recipe[]
}


const Page: NextPage<Props> = ({ recipes }: Props) => (
  <>
    <Listing items={recipes} of={ListingRecipe} />
  </>
)


export default Page


export const getStaticProps: GetStaticProps<Props> = async () => {
  const recipes = await sanityClient('anonymous').fetch(recipesQuery)

  return {
    props: {
      recipes,
    }
  }
}
