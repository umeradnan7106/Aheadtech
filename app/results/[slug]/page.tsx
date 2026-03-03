// app/results/[slug]/page.tsx
export const revalidate = 60

import { sanityFetch } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'

const QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  badge, title, subtitle,
  metrics,
  problem,
  solution,
  result
}`

// Sanity can return Portable Text blocks OR plain strings — handle both
function extractText(item: any): string {
  if (typeof item === 'string') return item
  if (item?._type === 'block' && Array.isArray(item.children)) {
    return item.children.map((child: any) => child.text || '').join('')
  }
  return String(item ?? '')
}

function renderContent(items: any[]) {
  if (!items?.length) return null
  return items.map((item, i) => {
    const text = extractText(item)
    if (!text.trim()) return null
    return (
      <p key={i} style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.8, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>
        {text}
      </p>
    )
  })
}

// Static fallback shown when Sanity has no content yet for a slug
const STATIC_CASES: Record<string, any> = {
  'dtf-brand-roas': {
    badge: 'Ecommerce',
    title: '0.39x to 7.05x ROAS. 90 days.',
    subtitle: "They were losing money on every dollar spent on ads. We fixed their tracking, rebuilt their campaigns, and turned it around in three months.",
    metrics: [{ value: '7.05x', label: 'ROAS' }, { value: '90 days', label: 'Timeline' }, { value: '-60%', label: 'Waste cut' }, { value: '9.3/10', label: 'Tracking score' }],
    problem: ["This brand sold DTF transfers online. They were spending good money on Meta Ads but getting 0.39x back. For every dollar in, they got 39 cents out. They were bleeding money on every sale.", "Their tracking was broken. Meta didn't know which ads were working. The ad account was flying blind."],
    solution: ["Step 1: Fixed the tracking. We rebuilt their Conversions API integration. Match quality score went from 4/10 to 9.3/10. Now Meta knew exactly which ads drove sales.", "Step 2: Rebuilt the campaigns. Killed everything that wasn't working. Built new campaigns using our angle-first creative testing system — 6 messaging angles, tested one at a time.", "Step 3: Scaled the winners. By week 6, ROAS hit 3.2x. By day 90, it reached 7.05x. Cut wasted spend by 60% and tripled budget on what worked."],
    result: ["They went from thinking about turning off ads to making ads their #1 growth channel. Same business. Same products. Different system."],
  },
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sanityData = await sanityFetch<any>(QUERY, { slug })
  const cs = sanityData ?? STATIC_CASES[slug]

  if (!cs) notFound()

  const badgeLabel = cs.badge?.startsWith('Case Study') ? cs.badge : `Case Study · ${cs.badge}`
  const subtitleText = cs.subtitle ? extractText(cs.subtitle) : null

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#080E1C', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#34D48A' }}>
            {badgeLabel}
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(38px,5.5vw,58px)', fontWeight: 800, color: '#fff', lineHeight: 1.06, marginBottom: '16px', letterSpacing: '-0.5px', maxWidth: '700px' }}>
            {cs.title}
          </h1>
          {subtitleText && (
            <p style={{ fontSize: '15px', color: '#A4B3C4', maxWidth: '600px', lineHeight: 1.65, marginBottom: '28px', fontFamily: 'var(--font-jakarta)' }}>
              {subtitleText}
            </p>
          )}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {cs.metrics?.map((m: any, i: number) => (
              <div key={i} style={{ background: '#1A2540', border: '1px solid rgba(255,255,255,.06)', borderRadius: '10px', padding: '14px 22px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#34D48A', lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontSize: '10px', color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '3px' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 32px' }}>
          {cs.problem?.length > 0 && (
            <>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '0 0 12px' }}>The problem</h2>
              {renderContent(cs.problem)}
            </>
          )}
          {cs.solution?.length > 0 && (
            <>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '32px 0 12px' }}>What we did</h2>
              {renderContent(cs.solution)}
            </>
          )}
          {cs.result?.length > 0 && (
            <>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '32px 0 12px' }}>The result</h2>
              {renderContent(cs.result)}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Want us to look at <em style={{ color: '#34D48A', fontStyle: 'italic' }}>your ads?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We&apos;ll tell you what&apos;s broken and how to fix it.</p>
          <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>
            Get My Free Audit →
          </a>
        </div>
      </section>
    </>
  )
}
