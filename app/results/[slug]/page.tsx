// app/results/[slug]/page.tsx
// Dynamic case study detail page
// In production: fetch from Sanity using the slug param

const CASE_DATA: Record<string, {
    badge: string; industry: string; title: string; subtitle: string;
    metrics: { value: string; label: string }[];
    problem: string[]; solution: string[]; result: string[];
  }> = {
    'dtf-brand-roas': {
      badge: 'Case Study · Ecommerce', industry: 'Ecommerce',
      title: '0.39x to 7.05x ROAS. 90 days.',
      subtitle: "They were losing money on every dollar spent on ads. We fixed their tracking, rebuilt their campaigns, and turned it around in three months.",
      metrics: [{ value: '7.05x', label: 'ROAS' }, { value: '90 days', label: 'Timeline' }, { value: '-60%', label: 'Waste cut' }, { value: '9.3/10', label: 'Tracking score' }],
      problem: ["This brand sold DTF transfers online. They were spending good money on Meta Ads but getting 0.39x back. For every dollar in, they got 39 cents out. They were bleeding money on every sale.", "Their tracking was broken. Meta didn't know which ads were working. The ad account was flying blind."],
      solution: ["Step 1: Fixed the tracking. We rebuilt their Conversions API integration. Match quality score went from 4/10 to 9.3/10. Now Meta knew exactly which ads drove sales.", "Step 2: Rebuilt the campaigns. Killed everything that wasn't working. Built new campaigns using our angle-first creative testing system — 6 messaging angles, tested one at a time.", "Step 3: Scaled the winners. By week 6, ROAS hit 3.2x. By day 90, it reached 7.05x. Cut wasted spend by 60% and tripled budget on what worked."],
      result: ["They went from thinking about turning off ads to making ads their #1 growth channel. Same business. Same products. Different system."],
    },
  }
  
  // Fallback for slugs not in static data
  const FALLBACK = CASE_DATA['dtf-brand-roas']
  
  export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const cs = CASE_DATA[params.slug] || FALLBACK
  
    return (
      <>
        {/* Hero */}
        <section style={{ background: '#080E1C', padding: '60px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#34D48A' }}>{cs.badge}</div>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(38px,5.5vw,58px)', fontWeight: 800, color: '#fff', lineHeight: 1.06, marginBottom: '16px', letterSpacing: '-0.5px', maxWidth: '700px' }}>
              {cs.title.split('. ').map((part, i, arr) =>
                i === arr.length - 1
                  ? <em key={i} style={{ color: '#34D48A', fontStyle: 'italic' }}>{part}</em>
                  : <span key={i}>{part}. </span>
              )}
            </h1>
            <p style={{ fontSize: '15px', color: '#A4B3C4', maxWidth: '600px', lineHeight: 1.65, marginBottom: '28px', fontFamily: 'var(--font-jakarta)' }}>{cs.subtitle}</p>
            {/* Metrics */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {cs.metrics.map((m, i) => (
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
          <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '60px 32px' }}>
            <div style={{ maxWidth: '760px' }}>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '0 0 12px' }}>The problem</h2>
              {cs.problem.map((p, i) => <p key={i} style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.8, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{p}</p>)}
  
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '32px 0 12px' }}>What we did</h2>
              {cs.solution.map((p, i) => <p key={i} style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.8, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }} dangerouslySetInnerHTML={{ __html: p.replace(/^(Step \d+:[^.]+\.)/, '<strong style="color:#080E1C">$1</strong>') }} />)}
  
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: '#080E1C', margin: '32px 0 12px' }}>The result</h2>
              {cs.result.map((p, i) => <p key={i} style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.8, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{p}</p>)}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
              Want us to look at <em style={{ color: '#34D48A', fontStyle: 'italic' }}>your ads?</em>
            </h2>
            <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We'll tell you what's broken and how to fix it.</p>
            <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>Get My Free Audit →</a>
          </div>
        </section>
      </>
    )
  }