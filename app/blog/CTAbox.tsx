// ═══════════════════════════════════════════════════════════════
// FILE 1: components/blog/CTABox.tsx
// Reusable CTA box — use in blog body OR at end of post
// ═══════════════════════════════════════════════════════════════

import Link from 'next/link'

interface CTABoxProps {
  heading?: string
  description?: string
  linkText?: string
  linkUrl?: string
  emoji?: string
  variant?: 'blue' | 'green' | 'dark'
}

export default function CTABox({
  heading     = 'Want to know where your website stands right now?',
  description = 'At AheadTech360, we help small businesses build strategies that bring in real leads — not just traffic numbers.',
  linkText    = 'Get your FREE audit at: aheadtech360.com/contact',
  linkUrl     = '/contact',
  emoji       = '👉',
  variant     = 'blue',
}: CTABoxProps) {

  const styles: Record<string, React.CSSProperties> = {
    blue: {
      background: '#EEF2F9',
      border: '1.5px solid #C7D4ED',
      color: '#213D79',
    },
    green: {
      background: '#EDFBF3',
      border: '1.5px solid #A7EACC',
      color: '#1C8F5A',
    },
    dark: {
      background: '#080E1C',
      border: '1.5px solid #1A2540',
      color: '#fff',
    },
  }

  const s = styles[variant]

  return (
    <div style={{
      ...s,
      borderRadius: '14px',
      padding: '24px 28px',
      margin: '32px 0',
      textAlign: 'center',
    }}>
      {/* Heading */}
      <p style={{
        fontFamily: 'var(--font-bricolage)',
        fontSize: '16px',
        fontWeight: 800,
        color: variant === 'dark' ? '#fff' : '#080E1C',
        marginBottom: '8px',
        lineHeight: 1.35,
      }}>
        {heading}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-jakarta)',
        fontSize: '14px',
        color: variant === 'dark' ? '#A4B3C4' : '#374151',
        lineHeight: 1.65,
        marginBottom: '14px',
      }}>
        {description}
      </p>

      {/* CTA Link */}
      <Link href={linkUrl} style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-jakarta)',
          fontSize: '14px',
          fontWeight: 800,
          color: s.color as string,
        }}>
          {emoji} {linkText}
        </span>
      </Link>
    </div>
  )
}


// ═══════════════════════════════════════════════════════════════
// FILE 2: ADD TO sanity/schemas/blogPost.ts
//
// Inside the body array (of: [...]) add this new block type
// so editors can insert CTA boxes anywhere in the article:
// ═══════════════════════════════════════════════════════════════

/*

// ADD this inside body → of: [ ...existing, THIS ]

{
  type: 'object',
  name: 'ctaBox',
  title: 'CTA Box',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Want to know where your website stands right now?',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue: 'At AheadTech360, we help small businesses build strategies that bring in real leads — not just traffic numbers.',
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Get your FREE audit at: aheadtech360.com/contact',
    },
    {
      name: 'linkUrl',
      title: 'Link URL',
      type: 'string',
      initialValue: '/contact',
    },
    {
      name: 'emoji',
      title: 'Emoji / Icon',
      type: 'string',
      initialValue: '👉',
      description: 'Single emoji shown before the link',
    },
    {
      name: 'variant',
      title: 'Color Style',
      type: 'string',
      options: {
        list: [
          { title: '🔵 Blue (default)', value: 'blue' },
          { title: '🟢 Green', value: 'green' },
          { title: '⚫ Dark', value: 'dark' },
        ],
        layout: 'radio',
      },
      initialValue: 'blue',
    },
  ],
  preview: {
    select: { title: 'heading', subtitle: 'variant' },
    prepare: ({ title, subtitle }: any) => ({
      title: `📦 CTA Box`,
      subtitle: title,
    }),
  },
},

*/


// ═══════════════════════════════════════════════════════════════
// FILE 3: UPDATE app/blog/[slug]/page.tsx
//
// In the RenderBody function, add this case for ctaBox blocks:
// ═══════════════════════════════════════════════════════════════

/*

// Inside RenderBody, add BEFORE the final return null:

if (block._type === 'ctaBox') {
  return (
    <CTABox
      key={i}
      heading={block.heading}
      description={block.description}
      linkText={block.linkText}
      linkUrl={block.linkUrl}
      emoji={block.emoji}
      variant={block.variant || 'blue'}
    />
  )
}

// Also import CTABox at the top of the file:
// import CTABox from '@/components/blog/CTABox'

*/


// ═══════════════════════════════════════════════════════════════
// FILE 4: Auto CTA at end of every blog post
//
// In app/blog/[slug]/page.tsx, after <RenderBody body={post.body} />
// add this to auto-show a default CTA box at the bottom:
// ═══════════════════════════════════════════════════════════════

/*

// After the RenderBody component in the article section:

<CTABox
  heading="Want to know where your website stands right now?"
  description={`At AheadTech360, we help small businesses build ${post.category || 'marketing'} strategies that bring in real leads — not just traffic numbers.`}
  linkText="Get your FREE audit at: aheadtech360.com/contact"
  linkUrl="/contact"
  emoji="👉"
  variant="blue"
/>

*/