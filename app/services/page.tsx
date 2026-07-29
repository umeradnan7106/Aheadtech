// app/services/page.tsx
// Services hub — fashion/apparel repositioning. Hardcoded copy (no Sanity wiring), matching
// the mockup: hero, 11-service grid, "why one system" dark split, CTA band.
import type { Metadata } from 'next'
import Link from 'next/link'
import ServicesSection from '@/components/sections/ServicesSection'
import LeadConnectorWidget from '@/components/LeadConnectorWidget'

export const metadata: Metadata = {
  title: 'Services — AheadTech360',
  description: 'Everything here grows your revenue. Nothing here works alone. Eleven pieces. One machine.',
}

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '2px solid rgba(255,255,255,.5)', color: '#fff', background: 'rgba(255,255,255,.14)', textDecoration: 'none' }

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>Services</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '24ch' }}>
            Everything here grows your revenue. Nothing here works alone.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            Most agencies sell you channels. We run a system. Pick the piece you came for, and we will show you how
            it connects to the rest.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/how" style={ctaGhost}>See How This Works</Link>
          </div>
        </div>
      </section>

      {/* 11-service grid */}
      <ServicesSection />

      {/* Why one system */}
      <section style={{ padding: '80px 32px', background: '#162952' }}>
        <div className="services-why-split" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '46px', alignItems: 'start' }}>
          <div>
            <span style={{ ...eyebrow, color: '#7fe7b4' }}>Why one system</span>
            <h2 style={{ ...h2, color: '#fff', marginBottom: '12px' }}>Why one system beats five vendors.</h2>
            <p style={{ fontSize: '1rem', color: '#cdd8ee', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', maxWidth: '62ch' }}>
              When your ads, store, creative, and email are run by different hands, every problem becomes someone
              else&rsquo;s fault. When one team runs the system, the leak gets found wherever it lives. Sometimes the
              ad is fine and the cart is the problem. A media vendor cannot fix a cart. We can.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link href="/fgs" style={ctaGreen}>See the Program</Link>
            </div>
          </div>
          <figure style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', minHeight: '260px', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', textAlign: 'center', color: '#fff', padding: '24px', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px', opacity: 0.9 }}>
              <path d="M4 9l1-5h14l1 5M4 9v10h16V9M4 9h16M9 19v-5h6v5" />
            </svg>
            <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.74rem', color: '#eef4ff' }}>Mobile checkout</figcaption>
          </figure>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Not sure which piece you need? That is exactly what the first conversation is for.</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Chat Widget — services page only, unmounts automatically on route change */}
      <LeadConnectorWidget />

      <style>{`
        @media(max-width:900px){ .services-why-split { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
