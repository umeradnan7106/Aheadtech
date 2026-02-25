// app/story/page.tsx
// Story Collection — Dedicated page
// GHL_FORM_URL ko apna actual GoHighLevel URL se replace karein

const GHL_FORM_URL = 'https://api.aheadtech360.com/widget/form/M9lnpLwLk2GGlZDTSHIU' // ← Apna GHL story form URL yahan daalen

const STEPS = [
  { num: '1', bg: '#EDFBF3', title: 'We read it personally', desc: 'Not a bot. Iqrar or Ikrash read every story within 48 hours.' },
  { num: '2', bg: '#EEF2F9', title: 'We send you a free tip', desc: 'One specific, actionable recommendation based on your situation.' },
  { num: '3', bg: '#FFFAEB', title: 'You might get featured', desc: 'Best stories (with your permission) become blog posts or podcast episodes.' },
  { num: '4', bg: '#F3E8FF', title: 'Patterns become guides', desc: 'We analyze every story to find patterns and publish free guides that help everyone.' },
]

function StoryForm() {
  return (
    <div style={{ background: '#fff', borderRadius: '24px', padding: '30px', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED', position: 'sticky', top: '100px' }}>
      <div style={{ background: '#EDFBF3', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1C8F5A', fontFamily: 'var(--font-jakarta)' }}>📖 47 stories collected so far</span>
      </div>
      <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#080E1C', marginBottom: '3px', textAlign: 'center', fontFamily: 'var(--font-bricolage)' }}>Your story matters</h3>
      <p style={{ fontSize: '13px', color: '#6E8098', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-jakarta)', lineHeight: 1.55 }}>3 minutes. We'll send you a personalized tip back.</p>
      {[
        { label: 'Your name', type: 'text', placeholder: 'John' },
        { label: 'Business name', type: 'text', placeholder: "Joe's Gym" },
        { label: 'Email (for your free tip)', type: 'email', placeholder: 'john@company.com' },
      ].map(f => (
        <div key={f.label} style={{ marginBottom: '13px' }}>
          <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>{f.label}</label>
          <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }} />
        </div>
      ))}
      <div style={{ marginBottom: '13px' }}>
        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>Industry</label>
        <select style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }}>
          <option>Pick one...</option>
          <option>Ecommerce / DTC</option><option>Local Services</option><option>Fitness / Health</option>
          <option>Food / Restaurant</option><option>Fashion / Apparel</option><option>SaaS / Tech</option>
          <option>Real Estate</option><option>Education</option><option>Other</option>
        </select>
      </div>
      {[
        { label: "What's your biggest marketing challenge right now?", placeholder: "Be as specific as you can — the more detail, the better tip we can give back." },
        { label: "What have you already tried to fix it?", placeholder: "E.g., hired a freelancer, tried Facebook ads myself, boosted posts..." },
      ].map(f => (
        <div key={f.label} style={{ marginBottom: '13px' }}>
          <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>{f.label}</label>
          <textarea rows={3} placeholder={f.placeholder} style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none', resize: 'vertical' }} />
        </div>
      ))}
      <div style={{ marginBottom: '13px' }}>
        <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 700, color: '#3E5068', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)' }}>If marketing could fix ONE thing, what would it be?</label>
        <input type="text" placeholder="E.g., Get my ads profitable, fix my website conversion..." style={{ width: '100%', padding: '11px 14px', border: '1.5px solid #DFE5ED', borderRadius: '9px', fontSize: '14px', fontFamily: 'var(--font-jakarta)', color: '#080E1C', background: '#F2F5F8', outline: 'none' }} />
      </div>
      <button style={{ width: '100%', padding: '13px', background: '#25B472', color: '#fff', border: 'none', borderRadius: '9px', fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-jakarta)', cursor: 'pointer' }}>Share My Story →</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '13px', paddingTop: '13px', borderTop: '1px solid #DFE5ED', fontSize: '11.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>
        {['100% private', 'Free tip in 48hrs', 'No spam ever', 'Unsubscribe anytime'].map(b => <span key={b}><span style={{ color: '#25B472', fontWeight: 800 }}>✓</span> {b}</span>)}
      </div>
    </div>
  )
}

export default function StoryPage() {
  return (
    <section style={{ background: 'linear-gradient(160deg,#EEF2F9 0%,#fff 50%,#EDFBF3 100%)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(33,61,121,.04),transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '60px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start', position: 'relative', zIndex: 1 }} className="story-page-grid">

        {/* LEFT */}
        <div>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#25B472' }}>Share your story</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#080E1C', marginBottom: '16px' }}>
            We're collecting <em style={{ color: '#25B472', fontStyle: 'italic' }}>real stories</em> from real business owners.
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', lineHeight: 1.7, marginBottom: '24px', fontFamily: 'var(--font-jakarta)' }}>Not case studies. Not testimonials. Just real stories from real people — what's working, what's not, and what you wish you knew sooner. We read every single one.</p>

          {/* What happens */}
          <div style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#080E1C', marginBottom: '8px', fontFamily: 'var(--font-bricolage)' }}>What happens with your story:</h4>
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < STEPS.length - 1 ? '10px' : 0, alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: s.bg, display: 'grid', placeItems: 'center', fontSize: '14px', fontWeight: 700, color: '#080E1C', flexShrink: 0, fontFamily: 'var(--font-bricolage)' }}>{s.num}</div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#080E1C', marginBottom: '2px', fontFamily: 'var(--font-jakarta)' }}>{s.title}</h4>
                  <p style={{ fontSize: '12.5px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why we do this */}
          <div style={{ background: '#080E1C', borderRadius: '16px', padding: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#34D48A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontFamily: 'var(--font-jetbrains)' }}>Why we do this</div>
            <p style={{ fontSize: '14px', color: '#A4B3C4', lineHeight: 1.65, fontFamily: 'var(--font-jakarta)' }}>"We started AheadTech360 because we saw too many good businesses wasting money on bad marketing. We built this story collection to understand what's really happening on the ground — not what marketing Twitter says, but what actual business owners are dealing with every day."</p>
            <p style={{ fontSize: '12px', color: '#6E8098', marginTop: '8px', fontFamily: 'var(--font-jakarta)' }}>— Iqrar & Ikrash, Founders</p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div>
          {GHL_FORM_URL
            ? <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(8,14,28,.15)', border: '1px solid #DFE5ED', position: 'sticky', top: '100px' }}>
                <iframe src={GHL_FORM_URL} style={{ width: '100%', height: '700px', border: 'none', display: 'block' }} loading="lazy" title="Story Form" />
              </div>
            : <StoryForm />
          }
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .story-page-grid{grid-template-columns:1fr!important;padding:52px 16px!important}
        }
      `}</style>
    </section>
  )
}