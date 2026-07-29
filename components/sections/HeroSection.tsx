// components/sections/HeroSection.tsx
// Fashion & Apparel repositioning hero.
import Image from 'next/image'
import Link from 'next/link'

interface HeroData {
  eyebrow?: string
  heading?: string // Use [em]text[/em] for green italic
  lead?: string
}

const DEFAULTS: Required<HeroData> = {
  eyebrow: 'Fashion and apparel only',
  heading: 'Growth Marketing for [em]$500K–$10M[/em] Fashion & Apparel Brands',
  lead: 'We turn the traffic you already pay for into more orders, higher order value, and customers who come back.',
}

function parseHeading(text: string) {
  const parts = text.split(/(\[em\].*?\[\/em\])/g)
  return parts.map((part, i) => {
    if (part.startsWith('[em]')) {
      const content = part.replace('[em]', '').replace('[/em]', '')
      return (
        <em key={i} style={{ color: '#8ff0c0', fontStyle: 'italic' }}>
          {content}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const BADGES = [
  { src: '/images/reviews/shopify.png', alt: 'Shopify Partner' },
  { src: '/images/reviews/goodfirms.png', alt: 'GoodFirms' },
  { src: '/images/reviews/clutch.png', alt: 'Clutch' },
]

export default function HeroSection({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  lead = DEFAULTS.lead,
}: HeroData) {
  return (
    <section
      style={{
        position: 'relative',
        color: '#fff',
        padding: '110px 32px 84px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)',
      }}
    >
      {/* legibility overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))',
        }}
      />
      {/* decorative motif */}
      <div
        aria-hidden
        style={{ position: 'absolute', right: '-60px', bottom: '-60px', opacity: 0.1, color: '#fff', pointerEvents: 'none' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 'min(560px,60vw)', height: 'auto' }}
        >
          <path d="M8 3l4 2 4-2 5 4-3 3-1-1v11H7V9L6 10 3 7z" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains)',
            fontSize: '.72rem',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: '#8ff0c0',
            fontWeight: 600,
            marginBottom: '14px',
          }}
        >
          {eyebrow}
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-bricolage)',
            fontSize: 'clamp(2rem,4.6vw,3.3rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.13,
            letterSpacing: '-0.02em',
            maxWidth: '22ch',
          }}
        >
          {parseHeading(heading)}
        </h1>
        <p
          style={{
            fontSize: '1.18rem',
            color: '#e6edf9',
            maxWidth: '56ch',
            marginTop: '14px',
            fontFamily: 'var(--font-jakarta)',
            lineHeight: 1.62,
          }}
        >
          {lead}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px' }}>
          <Link
            href="/apply"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '.82rem 1.55rem',
              borderRadius: '12px',
              background: '#25B472',
              color: '#05261a',
              boxShadow: '0 6px 18px rgba(37,180,114,.26)',
              textDecoration: 'none',
            }}
          >
            Talk to Us
          </Link>
          <Link
            href="/clients"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-bricolage)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '.82rem 1.55rem',
              borderRadius: '12px',
              background: 'rgba(255,255,255,.14)',
              color: '#fff',
              border: '2px solid rgba(255,255,255,.5)',
              textDecoration: 'none',
            }}
          >
            See Our Clients
          </Link>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
          <span
            style={{
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '.7rem',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: '#9fb2d6',
            }}
          >
            Verified by
          </span>
          {BADGES.map((b) => (
            <span
              key={b.alt}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: 'rgba(255,255,255,.12)',
                border: '1px solid rgba(255,255,255,.28)',
                borderRadius: '9px',
                padding: '6px 12px',
              }}
            >
              <Image
                src={b.src}
                alt={b.alt}
                width={100}
                height={40}
                style={{ objectFit: 'contain', height: '18px', width: 'auto' }}
              />
              <span style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '.82rem', color: '#fff' }}>
                {b.alt}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
