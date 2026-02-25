import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/layout/Topbar'

export const metadata: Metadata = {
  title: 'AheadTech360 — We make your marketing make money.',
  description: 'We help small businesses make more money from their marketing. Meta Ads, Google Ads, SEO, CRO, Email, Web Design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-gray-900 bg-white antialiased leading-relaxed">
        <Topbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
