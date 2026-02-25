'use client'
// components/layout/Header.tsx
// ─────────────────────────────────────────────────────────────
// HEADER — sticky, white/blur, logo left, nav center, CTA right
// Mobile: hamburger hides nav, shows "Free Audit →" button only
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavLink {
  label: string
  href: string
}

interface HeaderProps {
  logoText?: string
  navLinks?: NavLink[]
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/results' },
  { label: 'Share Your Story', href: '/story' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
]

export default function Header({
  logoText = 'AheadTech360',
  navLinks = DEFAULT_NAV_LINKS,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #DFE5ED',
          top: '34px', // height of topbar (approx 34px)
          zIndex: 99,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
          transition: 'box-shadow 0.2s',
          boxShadow: scrolled ? '0 4px 16px rgba(8,14,28,.08)' : 'none',
        }}
      >
        {/* LOGO */}
        <Link href="/" aria-label="AheadTech360 Home">
          <div className="flex items-center gap-2 cursor-pointer">
            <div
              style={{
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg,#213D79,#25B472)',
                borderRadius: '7px',
                display: 'grid',
                placeItems: 'center',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 900,
                fontFamily: 'var(--font-bricolage)',
                flexShrink: 0,
              }}
            >
              A
            </div>
            <span
              style={{
                fontWeight: 800,
                fontSize: '18px',
                color: '#213D79',
                fontFamily: 'var(--font-bricolage)',
                lineHeight: 1,
              }}
            >
              {logoText}
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="items-center gap-6"
          style={{
            display: 'flex',
          }}
          aria-label="Main navigation"
        >
          {/* Hide on mobile via inline style + JS — matches wireframe exactly */}
          <div
            id="desktop-nav-links"
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: '#3E5068',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  fontFamily: 'var(--font-jakarta)',
                  whiteSpace: 'nowrap',
                }}
                className="hover-blue-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button — always visible */}
          <Link
            href="/contact"
            style={{
              background: '#25B472',
              color: '#fff',
              padding: '9px 20px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '13px',
              fontFamily: 'var(--font-jakarta)',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              lineHeight: 1.4,
            }}
            className="hover-cta"
          >
            Free Audit →
          </Link>

          {/* HAMBURGER — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              background: 'none',
              border: '1px solid #DFE5ED',
              borderRadius: '6px',
              padding: '6px 8px',
              cursor: 'pointer',
              display: 'none', // shown via CSS below
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hamburger-btn"
          >
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '2px',
                background: '#3E5068',
                borderRadius: '2px',
                transition: 'all 0.2s',
                transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '2px',
                background: '#3E5068',
                borderRadius: '2px',
                opacity: mobileOpen ? 0 : 1,
                transition: 'opacity 0.2s',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '18px',
                height: '2px',
                background: '#3E5068',
                borderRadius: '2px',
                transition: 'all 0.2s',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '34px', // below topbar
            left: 0,
            right: 0,
            background: '#fff',
            borderBottom: '1px solid #DFE5ED',
            zIndex: 98,
            padding: '16px 20px 20px',
            boxShadow: '0 8px 24px rgba(8,14,28,.12)',
          }}
          className="mobile-drawer"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: '#3E5068',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '10px 12px',
                  borderRadius: '8px',
                  transition: 'background 0.15s',
                  fontFamily: 'var(--font-jakarta)',
                }}
                className="hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                background: '#25B472',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '14px',
                textAlign: 'center',
                marginTop: '8px',
                display: 'block',
                fontFamily: 'var(--font-jakarta)',
              }}
            >
              Get Free Audit →
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
