// app/fss/page.tsx
// Fashion Scale System — coming-soon waitlist page. New route. Waitlist form is a static
// capture UI for now (no backend wired), matching the mockup's own prototype form.
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Fashion Scale System — AheadTech360',
  description: 'Built for brands ready for their next stage. Be the first to know when doors open.',
}

const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }

export default function FSSPage() {
  return (
    <>
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', textAlign: 'center', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 600, borderRadius: '99px', padding: '4px 11px', background: '#F2F5F8', color: '#6E8098' }}>
            Launching soon
          </span>
          <h1 style={{ marginTop: '16px', fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em' }}>
            The Fashion Scale System
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', margin: '14px auto 0', maxWidth: '56ch', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            Built for brands ready for their next stage. Be the first to know when doors open.
          </p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '24px auto 0', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="you@brand.com"
              aria-label="Email"
              style={{ flex: '1 1 220px', padding: '.7rem .85rem', borderRadius: '9px', border: '1px solid rgba(255,255,255,.3)', background: 'rgba(255,255,255,.08)', color: '#fff' }}
            />
            <button type="button" style={{ ...ctaGreen, border: 'none', cursor: 'pointer' }}>Join the Waitlist</button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Not at scale stage yet? The Fashion Growth System is open now.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/fgs" style={ctaGreen}>See the Fashion Growth System</Link>
          </div>
        </div>
      </section>
    </>
  )
}
