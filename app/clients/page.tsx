// app/clients/page.tsx
// "Our Clients" — the proof hub. New route, hardcoded copy (no Sanity wiring), matching the
// mockup. Case-study pages now exist, so each card links to its own page.
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Clients — AheadTech360',
  description: 'Real stores. Real numbers. Sources named. Every figure we publish is verified against store order data.',
}

interface Client {
  href: string
  logo: string
  name: string
  vertical: string
  summary: string
  verified: boolean
}

const CLIENTS: Client[] = [
  { href: '/case-ez', logo: '/images/portfolio/Ezdtf.png', name: 'EZDTFMaker', vertical: 'Custom & Print · Chicago, US', summary: '$3,835 to $29,147 a month over 17 months. Conversion 3.43% to 8.20%.', verified: true },
  { href: '/case-man', logo: '/images/portfolio/Maniyas.png', name: 'Maniyas', vertical: 'Retail Fashion & D2C · Pakistan', summary: 'PKR 37M and 7.98x ROAS, without discounting or paid influencers.', verified: true },
  { href: '/case-fresh', logo: '/images/portfolio/freshfits.png', name: 'FreshFits', vertical: 'Retail Fashion & D2C · Pakistan', summary: 'Zero to roughly PKR 2M in 90 days, on one hero product.', verified: true },
  { href: '/case-ezt', logo: '/images/portfolio/EZTmart.png', name: 'EzTmart', vertical: 'Wholesale & Blank · United States', summary: '39.36% checkout conversion on a wholesale catalog rebuilt from scratch.', verified: true },
  { href: '/case-afblanks', logo: '/images/portfolio/AF-Apparels.png', name: 'AF Blanks', vertical: 'Wholesale & Blank', summary: 'Case study being finalized. Numbers published once verified.', verified: false },
  { href: '/case-effinggear', logo: '/images/portfolio/Effing-Gear.png', name: 'Effing Gear', vertical: 'Accessories & Streetwear', summary: 'Case study being finalized. Numbers published once verified.', verified: false },
  { href: '/case-trashedpunk', logo: '/images/portfolio/TrashedPunk.png', name: 'TrashedPunk', vertical: 'Accessories & Streetwear', summary: 'Case study being finalized. Numbers published once verified.', verified: false },
  { href: '/case-lofty', logo: '/images/portfolio/Lofty.png', name: 'Lofty Creations', vertical: 'Custom & Print · United Kingdom', summary: 'Case study being finalized. Numbers published once verified.', verified: false },
]

const eyebrow: React.CSSProperties = { display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', color: '#1C8F5A', fontWeight: 600, marginBottom: '14px' }
const h2: React.CSSProperties = { fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#1C2A42', lineHeight: 1.13, letterSpacing: '-0.02em' }
const ctaGreen: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }
const ctaGhost: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.95rem', padding: '.7rem 1.3rem', borderRadius: '10px', border: '1px solid #DFE5ED', color: '#213D79', textDecoration: 'none' }

function ClientCard({ c }: { c: Client }) {
  return (
    <Link href={c.href} style={{ display: 'block', background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)', textDecoration: 'none' }}>
      <div style={{ aspectRatio: '16/10', background: '#F2F5F8', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '28px' }}>
        <Image src={c.logo} alt={c.name} width={220} height={110} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
      </div>
      <div style={{ padding: '20px 22px' }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-jetbrains)', fontSize: '.58rem', letterSpacing: '.1em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: '99px', marginBottom: '8px', background: c.verified ? '#EDFBF3' : '#F2F5F8', color: c.verified ? '#1C8F5A' : '#6E8098', border: `1px solid ${c.verified ? '#b9e6ce' : '#DFE5ED'}` }}>
          {c.verified ? 'Verified case' : 'In progress'}
        </span>
        <div style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.13em', textTransform: 'uppercase', color: '#1C8F5A' }}>{c.vertical}</div>
        <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', margin: '6px 0' }}>{c.name}</h3>
        <p style={{ color: '#6E8098', fontSize: '.94rem', lineHeight: 1.6 }}>{c.summary}</p>
      </div>
    </Link>
  )
}

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 70px', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <span style={{ ...eyebrow, color: '#8ff0c0' }}>The proof</span>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(2rem,4.6vw,3.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13, letterSpacing: '-0.02em', maxWidth: '22ch' }}>
            Real stores. Real numbers. Sources named.
          </h1>
          <p style={{ fontSize: '1.18rem', color: '#e6edf9', maxWidth: '56ch', marginTop: '14px', fontFamily: 'var(--font-jakarta)', lineHeight: 1.62 }}>
            Every figure we publish is verified against store order data. Four full case studies are live below.
            The rest are being finalized and show no numbers until they are verified.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Client grid */}
      <section style={{ padding: '80px 32px', background: '#fff' }}>
        <div className="clients-grid" style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {CLIENTS.map((c) => <ClientCard key={c.name} c={c} />)}
        </div>
      </section>

      {/* Rebuild wall */}
      <section style={{ padding: '80px 32px', background: '#F2F5F8' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <span style={eyebrow}>The craft</span>
          <h2 style={{ ...h2, textAlign: 'center', marginBottom: '8px' }}>Stores we rebuilt.</h2>
          <p style={{ textAlign: 'center', color: '#6E8098', maxWidth: '60ch', margin: '0 auto 32px' }}>
            Before and after, unedited. No numbers on these visuals by design.
          </p>
          <div className="clients-rebuild-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '22px' }}>
            {[
              { name: 'EZtmart rebuild', gradient: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' },
              { name: 'EZDTFMaker rebuild', gradient: 'linear-gradient(135deg,#213D79 0%,#1f6f6d 80%,#25B472 130%)' },
              { name: 'TrashedPunk rebuild', gradient: 'linear-gradient(135deg,#1c8f75 0%,#25B472 70%,#57c98f 100%)' },
              { name: 'Lofty Creations rebuild', gradient: 'linear-gradient(135deg,#2a4d92 0%,#3a63ad 60%,#6f8fc9 100%)' },
            ].map((r) => (
              <figure key={r.name} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/10', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', padding: '18px', background: r.gradient }}>
                <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.7rem', textAlign: 'center', color: '#eef4ff' }}>{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews pointer */}
      <section style={{ padding: '60px 32px', background: '#fff' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <p style={{ color: '#6E8098', maxWidth: '70ch', marginBottom: '20px' }}>What clients say in their own words is on the reviews page.</p>
          <Link href="/reviews" style={ctaGhost}>Read Reviews</Link>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ ...h2, color: '#fff' }}>Want us to look at your store the way we looked at these?</h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={ctaGreen}>Talk to Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .clients-grid { grid-template-columns: 1fr !important; }
          .clients-rebuild-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  )
}
