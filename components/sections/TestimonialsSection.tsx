// components/sections/TestimonialsSection.tsx

interface Testimonial {
    quote: string
    boldPart?: string
    clientName: string
    clientRole: string
    resultTag: string
    avatarInitial: string
  }
  
  const DEFAULT_TESTIMONIALS: Testimonial[] = [
    { quote: "They didn't just run ads — they understood our business and built a system that actually works.", boldPart: 'understood our business', clientName: '[Real Client Name]', clientRole: 'Owner, [Real Company]', resultTag: '📈 0.4x → 7x ROAS', avatarInitial: 'R' },
    { quote: 'Within 3 months we had more booked clients than we could handle. Had to hire two new people.', boldPart: 'more booked clients than we could handle.', clientName: '[Real Client Name]', clientRole: 'Founder, [Real Company]', resultTag: '📈 40 new clients / 90 days', avatarInitial: 'M' },
    { quote: 'Other agencies gave us reports full of impressions. AheadTech360 gave us revenue.', boldPart: 'revenue.', clientName: '[Real Client Name]', clientRole: 'CEO, [Real Company]', resultTag: '📈 1 → 3 locations', avatarInitial: 'S' },
  ]
  
  function TestimonialCard({ t }: { t: Testimonial }) {
    const renderQuote = () => {
      if (!t.boldPart || !t.quote.includes(t.boldPart)) return <span>"{t.quote}"</span>
      const [before, after] = t.quote.split(t.boldPart)
      return <span>"{before}<strong style={{ color: '#fff', fontWeight: 700 }}>{t.boldPart}</strong>{after}"</span>
    }
    return (
      <div style={{ background: '#0F1729', border: '1px solid rgba(255,255,255,.05)', borderRadius: '16px', padding: '28px' }}>
        <div style={{ color: '#FBBF24', fontSize: '14px', letterSpacing: '2px', marginBottom: '14px' }}>★★★★★</div>
        <p style={{ fontSize: '14.5px', color: '#A4B3C4', lineHeight: 1.7, marginBottom: '18px', fontFamily: 'var(--font-jakarta)' }}>{renderQuote()}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#213D79', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: '14px', fontFamily: 'var(--font-bricolage)', flexShrink: 0 }}>{t.avatarInitial}</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-jakarta)' }}>{t.clientName}</div>
            <div style={{ fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{t.clientRole}</div>
          </div>
        </div>
        <div style={{ display: 'inline-block', background: 'rgba(37,180,114,.12)', border: '1px solid rgba(37,180,114,.2)', borderRadius: '6px', padding: '5px 10px', marginTop: '12px', fontSize: '12px', color: '#34D48A', fontWeight: 700, fontFamily: 'var(--font-jakarta)' }}>{t.resultTag}</div>
      </div>
    )
  }
  
  export default function TestimonialsSection({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: Testimonial[] }) {
    return (
      <section style={{ background: '#080E1C' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="test-container">
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#34D48A' }}>What clients say</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#fff', marginBottom: '40px' }}>Don't take our word for it.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="test-grid">
            {testimonials.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){
            .test-container{padding:52px 16px!important}
            .test-grid{grid-template-columns:1fr!important}
          }
        `}</style>
      </section>
    )
  }
  