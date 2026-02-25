export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroParagraph1', title: 'Hero Paragraph 1', type: 'text' },
    { name: 'heroParagraph2', title: 'Hero Paragraph 2', type: 'text' },
    { name: 'heroImage', title: 'Team Photo', type: 'image',
      options: { hotspot: true } },
    { name: 'valuesHeading', title: 'Values Section Heading', type: 'string' },
    { name: 'values', title: 'Values (3)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}]
    },
    { name: 'teamHeading', title: 'Team Section Heading', type: 'string' },
    { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'CTA Subtext', type: 'string' },
  ],
}
