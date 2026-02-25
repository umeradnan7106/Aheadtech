// app/results/page.tsx
'use client'

import Link from 'next/link'

const STATS = [
  { value: '75+', label: 'Brands', color: '#213D79', bg: '#EEF2F9' },
  { value: '$1.56M+', label: 'Revenue', color: '#1C8F5A', bg: '#EDFBF3' },
  { value: '7.05x', label: 'Best ROAS', color: '#213D79', bg: '#EEF2F9' },
  { value: '$6.48', label: 'Lowest CPL', color: '#1C8F5A', bg: '#EDFBF3' },
]

const CASES = [
  { slug: 'dtf-brand-roas', badge: 'Ecommerce', title: 'DTF brand: 0.39x → 7.05x ROAS in 90 days', description: 'Fixed tracking (CAPI 4/10 → 9.3/10), restructured campaigns, cut 60% waste.', metrics: [{ value: '7.05x', label: 'ROAS' }, { value: '90d', label: 'Time' }, { value: '-60%', label: 'Waste' }] },
  { slug: 'college-leads', badge: 'Education', title: 'College: 1,185 qualified leads at $6.48 CPL', description: 'Multi-platform ads. Angle-first creative testing. 12 messaging angles.', metrics: [{ value: '1,185', label: 'Leads' }, { value: '$6.48', label: 'CPL' }] },
  { slug: 'streetwear-roas', badge: 'Fashion', title: 'Streetwear brand: $130 AOV, 6x peak ROAS', description: 'Angle-first creative testing + UGC pipeline + full CRO overhaul.', metrics: [{ value: '6x', label: 'Peak' }, { value: '$130', label: 'AOV' }] },
  { slug: 'gym-locations', badge: 'Fitness', title: 'Gym owner: 1 location → 3 in one year', description: 'Email automation + Meta lead gen + 14-day nurture system.', metrics: [{ value: '4x', label: 'ROAS' }, { value: '3', label: 'Locations' }] },
  { slug: 'service-biz-leads', badge: 'Local Biz', title: 'Service biz: 40 booked clients, $18/lead', description: 'New website + Google Ads exact-match + booking funnel (12% CVR).', metrics: [{ value: '40', label: 'Clients' }, { value: '$18', label: 'CPL' }] },
  { slug: 'fashion-roas', badge: 'Ecommerce', title: 'Pakistani fashion brand: 6.94x ROAS from scratch', description: 'Built from zero — brand positioning, Meta ads, CRO, email flows.', metrics: [{ value: '6.94x', label: 'ROAS' }, { value: '75%', label: 'Margin' }] },
]

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Our results</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', letterSpacing: '-0.3px', marginBottom: '32px' }}>
            Numbers don't lie. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Here are ours.</em>
          </h1>
          {/* Top stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ background: s.bg, border: '1.5px solid #DFE5ED', borderRadius: '10px', padding: '14px 22px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '3px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="results-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {CASES.map((cs, i) => (
              <Link key={i} href={`/results/${cs.slug}`}
                style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '220px 1fr', transition: 'all 0.3s', textDecoration: 'none' }}
                className="case-card-link"
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = '0 12px 40px rgba(8,14,28,.12)'; el.style.transform = 'translateY(-2px)'; el.style.borderColor = '#25B472' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)'; el.style.borderColor = '#DFE5ED' }}
              >
                <div style={{ background: '#DFE5ED', display: 'grid', placeItems: 'center', position: 'relative', minHeight: '140px' }}>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#080E1C', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '3px 9px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.3px', fontFamily: 'var(--font-jetbrains)' }}>{cs.badge}</div>
                  <span style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Client photo</span>
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#080E1C', marginBottom: '5px', fontFamily: 'var(--font-bricolage)' }}>{cs.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.5, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{cs.description}</p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {cs.metrics.map((m, j) => (
                      <div key={j} style={{ background: '#EDFBF3', borderRadius: '6px', padding: '7px 14px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1C8F5A', fontFamily: 'var(--font-bricolage)' }}>{m.value}</div>
                        <div style={{ fontSize: '9px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Want numbers <em style={{ color: '#34D48A', fontStyle: 'italic' }}>like these?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>It starts with a free audit.</p>
          <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>Get My Free Audit →</a>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .results-container{padding:52px 16px!important}
          .case-card-link{grid-template-columns:1fr!important}
          .case-card-link>div:first-child{height:140px}
        }
      `}</style>
    </>
  )
}
