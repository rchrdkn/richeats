export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },

    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
    },

    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [ { type: 'recipeStep' }],
      validation: Rule => Rule.required(),
    },

    {
      name: 'source',
      title: 'Source',
      type: 'object',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'url', title: 'Url', type: 'url' },
      ],
    }
  ]
}
