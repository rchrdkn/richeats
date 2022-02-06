import RecipeStep from './recipe-step'


interface Source {
  name: string,
  url: URL,
}


interface Recipe {
  name: string,
  slug?: string,
  desc: string,
  image?: string,
  intro?: string,
  steps?: RecipeStep[],
  source?: Source,
}


export default Recipe
