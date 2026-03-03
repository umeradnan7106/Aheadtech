// app/blog/[slug]/page.tsx
export const revalidate = 60

import { sanityFetch } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  category,
  excerpt,
  publishedAt,
  "image": mainImage.asset->url,
  body
}`

const CAT_COLORS: Record<string, string> = {
  'Meta Ads': '#213D79', 'Google Ads': '#25B472', 'CRO': '#7C3AED',
  'Tracking': '#F79009', 'Email': '#F04438', 'Strategy': '#0891B2',
}

// Portable Text block → plain text/HTML
function renderBody(body: any[]) {
  if (!body?.length) return null

  return body.map((block: any, i: number) => {
    if (!block) return null

    // Regular paragraph block
    if (block._type === 'block') {
      const text = block.children?.map((child: any) => {
        let t = child.text || ''
        // Bold
        if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`
        // Italic
        if (child.marks?.includes('em')) t = `<em>${t}</em>`
        return t
      }).join('') || ''

      if (!text.trim()) return <br key={i} />

      // Headings
      if (block.style === 'h1') return <h1 key={i} style={{ fontFamily: 'var(--font-bricolage)', fontSize: '36px', fontWeight: 800, color: '#080E1C', margin: '40px 0 12px', lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: text }} />
      if (block.style === 'h2') return <h2 key={i} style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '36px 0 10px', lineHeight: 1.1 }} dangerouslySetInnerHTML={{ __html: text }} />
      if (block.style === 'h3') return <h3 key={i} style={{ fontFamily: 'var(--font-bricolage)', fontSize: '22px', fontWeight: 700, color: '#080E1C', margin: '28px 0 8px', lineHeight: 1.2 }} dangerouslySetInnerHTML={{ __html: text }} />
      if (block.style === 'blockquote') return (
        <blockquote key={i} style={{ borderLeft: '4px solid #25B472', paddingLeft: '20px', margin: '28px 0', fontStyle: 'italic', color: '#6E8098', fontSize: '16px', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}
          dangerouslySetInnerHTML={{ __html: text }} />
      )

      // Normal paragraph
      return <p key={i} style={{ fontSize: '16px', color: '#374151', lineHeight: 1.85, marginBottom: '18px', fontFamily: 'var(--font-jakarta)' }} dangerouslySetInnerHTML={{ __html: text }} />
    }

    // Bullet list
    if (block._type === 'block' && block.listItem === 'bullet') {
      const text = block.children?.map((c: any) => c.text || '').join('') || ''
      return <li key={i} style={{ fontSize: '16px', color: '#374151', lineHeight: 1.8, marginBottom: '6px', fontFamily: 'var(--font-jakarta)' }}>{text}</li>
    }

    // Image block
    if (block._type === 'image' && block.asset?.url) {
      return (
        <div key={i} style={{ margin: '32px 0', borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '400px' }}>
          <Image src={block.asset.url} alt="Blog image" fill style={{ objectFit: 'cover' }} unoptimized />
        </div>
      )
    }

    return null
  })
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await sanityFetch<any>(QUERY, { slug })

  if (!post) notFound()

  const catColor = CAT_COLORS[post.category] || '#213D79'

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px 0' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Back link */}
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#6E8098', fontFamily: 'var(--font-jakarta)', textDecoration: 'none', marginBottom: '24px', fontWeight: 600 }}>
            ← Back to Blog
          </Link>

          {/* Category */}
          <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 800, color: catColor, textTransform: 'uppercase', letterSpacing: '1.5px', background: `${catColor}15`, borderRadius: '6px', padding: '4px 10px', marginBottom: '14px', fontFamily: 'var(--font-jetbrains)' }}>
            {post.category}
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', color: '#080E1C', lineHeight: 1.1, marginBottom: '14px', letterSpacing: '-0.3px' }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p style={{ fontSize: '17px', color: '#6E8098', lineHeight: 1.7, marginBottom: '20px', fontFamily: 'var(--font-jakarta)' }}>
              {post.excerpt}
            </p>
          )}

          {/* Date */}
          {post.publishedAt && (
            <div style={{ fontSize: '12px', color: '#A4B3C4', fontFamily: 'var(--font-jetbrains)', marginBottom: '32px' }}>
              {formatDate(post.publishedAt)}
            </div>
          )}
        </div>

        {/* Cover image */}
        {post.image && (
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', height: '420px', borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
            <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
        )}
      </section>

      {/* Body */}
      <section style={{ background: '#fff', padding: '60px 32px 80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {post.body?.length ? (
            renderBody(post.body)
          ) : (
            <p style={{ fontSize: '16px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
              Content coming soon.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(30px,4vw,44px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Want this working for <em style={{ color: '#34D48A', fontStyle: 'italic' }}>your business?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We'll show you exactly what to fix first.</p>
          <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>
            Get My Free Audit →
          </a>
        </div>
      </section>
    </>
  )
}