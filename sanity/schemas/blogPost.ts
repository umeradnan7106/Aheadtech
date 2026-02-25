export default {
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    { name: 'title', title: 'Post Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'excerpt', title: 'Short Excerpt', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Blog Content', type: 'array',
      of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'publishedAt', title: 'Published Date', type: 'datetime' },
  ],
}
