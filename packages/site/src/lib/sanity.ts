import { setupNextSanity } from 'next-sanity-extra'


const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: 'production' === process.env.NODE_ENV,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2022-02-06',
}


export const {
  sanityClient,
  imageUrlBuilder,
  PortableText,
  sanityStaticProps,
  useSanityQuery
} = setupNextSanity(config)
