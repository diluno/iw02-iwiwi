import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    }),
    defineField({
      name: 'imageOverlays',
      title: 'Image overlays',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'aboutHeadline',
      title: 'About Headline',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
    }),
    defineField({
      name: 'mainRelease',
      title: 'Main Release',
      type: 'reference',
      to: [{type: 'release'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
