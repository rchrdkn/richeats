import groq from 'groq'


const recipes = groq`*[ _type == 'recipe' ]{
  name,
  'slug': slug.current,
  desc,
  image
} | order(date desc)`


export default recipes
