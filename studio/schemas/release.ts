import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'youtubeId',
      title: 'Youtube ID',
      type: 'string',
    }),
    defineField({
      name: 'albumCover',
      title: 'Album Cover',
      type: 'image',
    }),
    defineField({
      name: 'spotifyLink',
      title: 'Spotify Link',
      type: 'url',
    }),
    defineField({
      name: 'appleMusicLink',
      title: 'Apple Music Link',
      type: 'url',
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
