// components/sections/CaseStudiesPreview.tsx
'use client'

interface CaseMetric { value: string; label: string }
interface CaseStudy {
  badge: string
  title: string
  description: string
  metrics: CaseMetric[]
}

const DEFAULT_CASES: CaseStudy[] = [
  { badge: 'Ecommerce', title: 'DTF brand: 0.39x → 7.05x ROAS in 90 days', description: 'Fixed tracking (CAPI 4/10 → 9.3/10). Restructured campaigns. Cut 60% waste.', metrics: [{ value: '7.05x', label: 'ROAS' }, { value: '90d', label: 'Timeline' }, { value: '-60%', label: 'Waste cut' }] },
  { badge: 'Education', title: 'College: 1,185 leads at $6.48 CPL', description: 'Multi-platform ads with angle-first creative testing. 12 messaging angles tested.', metrics: [{ value: '1,185', label: 'Leads' }, { value: '$6.48', label: 'CPL' }] },
  { badge: 'Fashion', title: 'Streetwear brand: $130 AOV, 6x peak ROAS', description: 'Angle-first creative testing + UGC pipeline + CRO overhaul.', metrics: [{ value: '6x', label: 'Peak ROAS' }, { value: '$130', label: 'AOV' }] },
  { badge: 'Fitness', title: 'Gym owner: 1 location → 3 in one year', description: 'Email automation + Meta lead gen + 14-day nurture close system.', metrics: [{ value: '4x', label: 'ROAS' }, { value: '3', label: 'Locations' }] },
]

function CaseCard({ cs }: { cs: CaseStudy }) {
  return (
    <div
      className="case-card"
      style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '220px 1fr', transition: 'all 0.3s' }}
      onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 12px 40px rgba(8,14,28,.12)'; el.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}
    >
      {/* Image placeholder */}
      <div style={{ background: '#DFE5ED', display: 'grid', placeItems: 'center', position: 'relative', minHeight: '140px' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#080E1C', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '3px 9px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.3px', fontFamily: 'var(--font-jetbrains)' }}>{cs.badge}</div>
        <span style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Client photo</span>
      </div>
      {/* Content */}
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#080E1C', marginBottom: '5px', fontFamily: 'var(--font-bricolage)' }}>{cs.title}</h3>
        <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.5, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{cs.description}</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {cs.metrics.map((m, i) => (
            <div key={i} style={{ background: '#EDFBF3', borderRadius: '6px', padding: '7px 14px' }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#1C8F5A', fontFamily: 'var(--font-bricolage)' }}>{m.value}</div>
              <div style={{ fontSize: '9px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesPreview({ cases = DEFAULT_CASES }: { cases?: CaseStudy[] }) {
  return (
    <section style={{ background: '#F2F5F8' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="cases-container">
        <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Proof</div>
        <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '12px' }}>
          Real results. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Real businesses.</em>
        </h2>
        <p style={{ fontSize: '15px', color: '#6E8098', marginBottom: '44px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.7 }}>Not theory. Not projections. Here's what happened.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="cases-list">
          {cases.map((cs, i) => <CaseCard key={i} cs={cs} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="/results" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '13px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-jakarta)', background: '#213D79', color: '#fff', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#162952' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#213D79' }}>
            See All Results →
          </a>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){
          .cases-container{padding:52px 16px!important}
          .case-card{grid-template-columns:1fr!important}
          .case-card>div:first-child{height:140px}
        }
      `}</style>
    </section>
  )
}
