export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'badge', title: 'Industry Badge (e.g. Ecommerce)', type: 'string' },
    { name: 'clientImage', title: 'Client Photo', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Short Excerpt', type: 'text' },
    { name: 'metrics', title: 'Metrics (2-4 items)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value (e.g. 7.05x)', type: 'string' },
        { name: 'label', title: 'Label (e.g. ROAS)', type: 'string' },
      ]}]
    },
    { name: 'problem', title: 'The Problem', type: 'array', of: [{ type: 'block' }] },
    { name: 'solution', title: 'What We Did', type: 'array', of: [{ type: 'block' }] },
    { name: 'result', title: 'The Result', type: 'array', of: [{ type: 'block' }] },
  ],
}
