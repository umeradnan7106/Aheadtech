export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    { name: 'pageHeading', title: 'Page Heading', type: 'string' },
    { name: 'pageSubheading', title: 'Page Subheading', type: 'string' },
    { name: 'services', title: 'Services List', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'icon', title: 'Emoji Icon', type: 'string' },
        { name: 'iconBg', title: 'Icon Background Color (Tailwind class)', type: 'string',
          description: 'e.g. bg-blue-bg or bg-green-bg' },
        { name: 'title', title: 'Service Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'resultValue', title: 'Result Value (e.g. 3.2x)', type: 'string' },
        { name: 'resultLabel', title: 'Result Label (e.g. Avg ROAS)', type: 'string' },
      ]}]
    },
    { name: 'whyUsHeading', title: 'Why Us Heading', type: 'string' },
    { name: 'whyUsCards', title: 'Why Us Cards (3)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'emoji', title: 'Emoji', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}]
    },
    { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'CTA Subtext', type: 'string' },
    { name: 'ctaGHLFormUrl', title: 'CTA GoHighLevel Form URL', type: 'url' },
  ],
}
