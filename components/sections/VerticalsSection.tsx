// components/sections/VerticalsSection.tsx
// "Who we work with" — the four apparel verticals. Home page only, no existing counterpart.
import type { ReactNode } from 'react'

interface Vertical {
  gradient: string
  icon: ReactNode
  title: string
  description: string
}

const VERTICALS: Vertical[] = [
  {
    gradient: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)',
    icon: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8 8l12 10M8 16L20 6" />
      </>
    ),
    title: 'Custom & Print',
    description: 'DTF, screen print, embroidery, and POD shops that need orders, not quote chaos.',
  },
  {
    gradient: 'linear-gradient(135deg,#213D79 0%,#1f6f6d 80%,#25B472 130%)',
    icon: <path d="M8 3l4 2 4-2 5 4-3 3-1-1v11H7V9L6 10 3 7z" />,
    title: 'Retail Fashion & D2C',
    description: 'Clothing brands that need traffic to turn into sales.',
  },
  {
    gradient: 'linear-gradient(135deg,#1c8f75 0%,#25B472 70%,#57c98f 100%)',
    icon: <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10" />,
    title: 'Wholesale & Blank Apparel',
    description: 'B2B suppliers whose buyers stall at minimums and bulk pricing.',
  },
  {
    gradient: 'linear-gradient(135deg,#2a4d92 0%,#3a63ad 60%,#6f8fc9 100%)',
    icon: <path d="M4 4v3M20 4v3M4 7h16M7 7l-1 13M17 7l1 13M12 7v13" />,
    title: 'Accessories, Niche & Streetwear',
    description: 'Drop driven brands that need momentum between releases.',
  },
]

export default function VerticalsSection() {
  return (
    <section style={{ padding: '80px 32px', background: '#fff' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '.72rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#1C8F5A',
            fontWeight: 600,
            marginBottom: '14px',
          }}
        >
          Who we work with
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(1.55rem,3.2vw,2.3rem)',
            fontWeight: 800,
            color: '#1C2A42',
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Fashion and apparel. Nothing else.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#6E8098', maxWidth: '60ch', marginTop: '8px', marginBottom: '32px' }}>
          Different apparel businesses leak revenue in different places. We work in four, and only four.
        </p>

        <div className="verticals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '22px' }}>
          {VERTICALS.map((v) => (
            <div
              key={v.title}
              title="Coming soon"
              style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(8,14,28,.07)' }}
            >
              <figure
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'center',
                  color: '#fff',
                  padding: '24px',
                  background: v.gradient,
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px', opacity: 0.9 }}>
                  {v.icon}
                </svg>
                <figcaption style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.74rem', letterSpacing: '.06em', maxWidth: '24ch', color: '#eef4ff' }}>
                  {v.title}
                </figcaption>
              </figure>
              <div style={{ padding: '20px 22px' }}>
                <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '.64rem', letterSpacing: '.13em', textTransform: 'uppercase', color: '#1C8F5A' }}>Vertical</span>
                <h3 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1.16rem', color: '#1C2A42', margin: '6px 0' }}>{v.title}</h3>
                <p style={{ color: '#6E8098', fontSize: '.94rem', lineHeight: 1.6 }}>{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .verticals-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
