export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'isRoot',
      title: 'Is Root Page',
      type: 'boolean'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'childPages',
      title: 'Child Pages',
      type: 'array',
      of: [{type: 'reference', to: {type: 'page'}}]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title,
        subtitle: slug ? slug.current : null
      }
    }
  }
}
