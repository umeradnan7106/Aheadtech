'use client'
// app/services/page.tsx
// Why Us icons: public/icons/ folder mein rakhein

import Image from 'next/image'
import ServicesSection from '@/components/sections/ServicesSection'
import GuaranteeBar from '@/components/sections/GuaranteeBar'

const WHY_US = [
  {
    icon: 'icons8-outcome-64.png',   // public/icons/outcome.svg
    iconBg: '',
    title: 'Outcome-obsessed',
    description: 'We track revenue, not impressions. Every decision is measured against "Did this make the client more money?"',
  },
  {
    icon: 'icons8-test-tube-100.png',   // public/icons/cooking.svg
    iconBg: '',
    title: "We eat our own cooking",
    description: "We run ecommerce brands with the same strategies we use for clients. If it doesn't work for us, we don't sell it.",
  },
  {
    icon: 'icons8-handshake-64.png',      // public/icons/team.svg
    iconBg: '',
    title: 'Small team, not a factory',
    description: "You'll know your strategist by name. We take on max 3 new clients/month.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Our services</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', marginBottom: '12px', letterSpacing: '-0.3px' }}>
            The full stack to <em style={{ color: '#25B472', fontStyle: 'italic' }}>scale your revenue.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>Every service connects to one goal: more revenue per dollar you spend.</p>
        </div>
      </section>

      {/* Services list */}
      <ServicesSection
        heading="Everything you need. [em]Nothing you don't.[/em]"
        subheading="Six services. Each one built to grow your revenue."
      />

      {/* Why Us */}
      <section style={{ background: '#F2F5F8', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Why us</div>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42', marginBottom: '40px', lineHeight: 1.1 }}>
            We're not like <em style={{ color: '#25B472', fontStyle: 'italic' }}>other agencies.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="why-grid">
            {WHY_US.map((w, i) => (
              <div key={i} style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', padding: '28px' }}>
                {/* Icon */}
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: w.iconBg, display: 'grid', placeItems: 'center', marginBottom: '14px' }}>
                  <Image
                    src={`/images/${w.icon}`}
                    alt={w.title}
                    width={50}
                    height={50}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', fontFamily: 'var(--font-bricolage)' }}>{w.title}</h3>
                <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.6, fontFamily: 'var(--font-jakarta)' }}>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeBar />

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            Not sure which service <em style={{ color: '#34D48A', fontStyle: 'italic' }}>fits?</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>Free audit. We'll tell you exactly where to focus first.</p>
          <a href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1C8F5A'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#25B472'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}>
            Get My Free Audit →
          </a>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}