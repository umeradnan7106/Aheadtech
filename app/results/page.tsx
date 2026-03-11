// // app/results/page.tsx
// export const revalidate = 60

// import { sanityFetch } from '@/sanity/lib/client'
// import Link from 'next/link'
// import Image from 'next/image'

// const QUERY = `*[_type == "caseStudy"] | order(_createdAt asc) {
//   "slug": slug.current,
//   badge, title, excerpt,
//   "imageUrl": clientImage.asset->url,
//   "imageAlt": clientImage.alt,
//   metrics
// }`

// const STATS = [
//   { value: '75+',     label: 'Brands',     color: '#213D79', bg: '#EEF2F9' },
//   { value: '$1.56M+', label: 'Revenue',    color: '#1C8F5A', bg: '#EDFBF3' },
//   { value: '7.05x',   label: 'Best ROAS',  color: '#213D79', bg: '#EEF2F9' },
//   { value: '$6.48',   label: 'Lowest CPL', color: '#1C8F5A', bg: '#EDFBF3' },
// ]

// const FALLBACK_CASES = [
//   { slug: 'dtf-brand-roas', badge: 'Ecommerce', image: null, title: 'DTF brand: 0.39x → 7.05x ROAS in 90 days', excerpt: 'Fixed tracking (CAPI 4/10 → 9.3/10). Restructured campaigns. Cut 60% waste.', metrics: [{ value: '7.05x', label: 'ROAS' }, { value: '90d', label: 'Time' }, { value: '-60%', label: 'Waste' }] },
//   { slug: 'college-leads', badge: 'Education', image: null, title: 'College: 1,185 qualified leads at $6.48 CPL', excerpt: 'Multi-platform ads. Angle-first creative testing. 12 messaging angles.', metrics: [{ value: '1,185', label: 'Leads' }, { value: '$6.48', label: 'CPL' }] },
//   { slug: 'streetwear-roas', badge: 'Fashion', image: null, title: 'Streetwear brand: $130 AOV, 6x peak ROAS', excerpt: 'Angle-first creative testing + UGC pipeline + full CRO overhaul.', metrics: [{ value: '6x', label: 'Peak' }, { value: '$130', label: 'AOV' }] },
//   { slug: 'gym-locations', badge: 'Fitness', image: null, title: 'Gym owner: 1 location → 3 in one year', excerpt: 'Email automation + Meta lead gen + 14-day nurture system.', metrics: [{ value: '4x', label: 'ROAS' }, { value: '3', label: 'Locations' }] },
//   { slug: 'service-biz-leads', badge: 'Local Biz', image: null, title: 'Service biz: 40 booked clients, $18/lead', excerpt: 'New website + Google Ads exact-match + booking funnel (12% CVR).', metrics: [{ value: '40', label: 'Clients' }, { value: '$18', label: 'CPL' }] },
//   { slug: 'fashion-roas', badge: 'Ecommerce', image: null, title: 'Pakistani fashion brand: 6.94x ROAS from scratch', excerpt: 'Built from zero — brand positioning, Meta ads, CRO, email flows.', metrics: [{ value: '6.94x', label: 'ROAS' }, { value: '75%', label: 'Margin' }] },
// ]

// export default async function ResultsPage() {
//   const cases = await sanityFetch<any[]>(QUERY)
//   const displayCases = cases?.length ? cases : FALLBACK_CASES

//   return (
//     <>
//       {/* Hero */}
//       <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
//           <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Our results</div>
//           <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', letterSpacing: '-0.3px', marginBottom: '32px' }}>
//             Numbers don&apos;t lie. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Here are ours.</em>
//           </h1>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
//             {STATS.map((s, i) => (
//               <div key={i} style={{ background: s.bg, border: '1.5px solid #DFE5ED', borderRadius: '10px', padding: '14px 22px', textAlign: 'center' }}>
//                 <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
//                 <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '3px' }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section style={{ background: '#fff' }}>
//         <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '80px 32px' }} className="results-container">
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//             {displayCases.map((cs: any, i: number) => (
//               <Link key={i} href={`/results/${cs.slug}`}
//                 style={{ background: '#fff', border: '1.5px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '220px 1fr', transition: 'all 0.3s', textDecoration: 'none' }}
//                 className="case-card-link">
//                 <div style={{ position: 'relative', background: '#DFE5ED', minHeight: '140px' }}>
//                   {cs.imageUrl ? (
//                     <Image src={cs.imageUrl} alt={cs.imageAlt || cs.title} fill style={{ objectFit: 'cover' }} unoptimized />
//                   ) : (
//                     <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Client photo</div>
//                   )}
//                   <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#080E1C', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '3px 9px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.3px', fontFamily: 'var(--font-jetbrains)', zIndex: 1 }}>{cs.badge}</div>
//                 </div>
//                 <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                   <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#080E1C', marginBottom: '5px', fontFamily: 'var(--font-bricolage)' }}>{cs.title}</h3>
//                   <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.5, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{cs.excerpt}</p>
//                   <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
//                     {cs.metrics?.map((m: any, j: number) => (
//                       <div key={j} style={{ background: '#EDFBF3', borderRadius: '6px', padding: '7px 14px' }}>
//                         <div style={{ fontSize: '16px', fontWeight: 800, color: '#1C8F5A', fontFamily: 'var(--font-bricolage)' }}>{m.value}</div>
//                         <div style={{ fontSize: '9px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)' }}>{m.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ background: 'linear-gradient(160deg,#080E1C,#162952)', padding: '90px 32px', textAlign: 'center' }}>
//         <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//           <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(34px,4.5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
//             Want numbers <em style={{ color: '#34D48A', fontStyle: 'italic' }}>like these?</em>
//           </h2>
//           <p style={{ fontSize: '15px', color: '#A4B3C4', marginBottom: '32px', fontFamily: 'var(--font-jakarta)' }}>It starts with a free audit.</p>
//           <a href="/contact" style={{ display: 'inline-flex', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: 700, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)' }}>Get My Free Audit →</a>
//         </div>
//       </section>

//       <style>{`
//         .case-card-link:hover {
//           box-shadow: 0 12px 40px rgba(8,14,28,.12);
//           transform: translateY(-2px);
//           border-color: #25B472 !important;
//         }
//         @media(max-width:900px){
//           .results-container { padding: 52px 16px !important; }
//           .case-card-link { grid-template-columns: 1fr !important; }
//           .case-card-link > div:first-child { height: 140px; min-height: unset; }
//         }
//       `}</style>
//     </>
//   )
// }

// app/results/page.tsx
import { sanityFetch } from '@/sanity/lib/client'
import Link from 'next/link'
import Image from 'next/image'

const QUERY = `*[_type == "caseStudy"] | order(_createdAt asc) {
  "slug": slug.current,
  badge, title, description,
  "image": image.asset->url,
  metrics,
  serviceTags
}`

const HERO_STATS = [
  { value: '75+', label: 'Brands Served' },
  { value: '$1.56M+', label: 'Revenue Generated' },
  { value: '7.05x', label: 'Best ROAS' },
  { value: '$6.48', label: 'Lowest CPL' },
]

export default async function ResultsPage() {
  const cases = await sanityFetch<any[]>(QUERY)
  const displayCases = cases?.length ? cases : []

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>
            Our Results
          </div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', letterSpacing: '-0.3px', marginBottom: '32px' }}>
            Numbers don&apos;t lie. <em style={{ color: '#25B472', fontStyle: 'italic' }}>Here are ours.</em>
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {HERO_STATS.map((s, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? '#EEF2F9' : '#EDFBF3', border: '1.5px solid #DFE5ED', borderRadius: '12px', padding: '16px 24px', textAlign: 'center', minWidth: '120px' }}>
                <div style={{ fontFamily: 'var(--font-bricolage)', fontSize: '28px', fontWeight: 800, color: i % 2 === 0 ? '#213D79' : '#1C8F5A', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#6E8098', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'var(--font-jetbrains)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Grid ── */}
      <section style={{ background: '#fff', padding: '60px 32px 80px' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div className="hub-grid">
            {displayCases.map((cs: any, i: number) => (
              <Link key={i} href={`/results/${cs.slug}`} className="hub-card-link">
                <div className="hub-card">
                  {/* Image with overlay metrics */}
                  <div style={{ height: '200px', background: '#DFE5ED', position: 'relative', overflow: 'hidden' }}>
                    {cs.image
                      ? <Image src={cs.image} alt={cs.title} fill style={{ objectFit: 'cover' }} unoptimized />
                      : <div style={{ display: 'grid', placeItems: 'center', height: '100%', fontSize: '11px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Client image</div>
                    }
                    {/* Badge */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#080E1C', color: '#fff', fontSize: '9px', fontWeight: 800, padding: '3px 10px', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)', zIndex: 1 }}>
                      {cs.badge}
                    </div>
                    {/* Metrics overlay */}
                    {cs.metrics?.length > 0 && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(8,14,28,.88)', backdropFilter: 'blur(6px)', padding: '10px 16px', display: 'flex', gap: '20px' }}>
                        {cs.metrics.map((m: any, j: number) => (
                          <div key={j} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '17px', fontWeight: 800, color: '#34D48A', fontFamily: 'var(--font-bricolage)' }}>{m.value}</div>
                            <div style={{ fontSize: '9px', color: '#A4B3C4', textTransform: 'uppercase', letterSpacing: '0.4px', fontFamily: 'var(--font-jetbrains)' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#080E1C', marginBottom: '6px', lineHeight: 1.3, fontFamily: 'var(--font-bricolage)' }}>{cs.title}</h3>
                    <p style={{ fontSize: '13px', color: '#6E8098', lineHeight: 1.55, marginBottom: '14px', fontFamily: 'var(--font-jakarta)' }}>{cs.description}</p>
                    {cs.serviceTags?.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {cs.serviceTags.map((tag: string, k: number) => (
                          <span key={k} style={{ background: '#EEF2F9', color: '#213D79', fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', fontFamily: 'var(--font-jakarta)' }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(26px,3.5vw,36px)', fontWeight: 800, color: '#080E1C', marginBottom: '8px', lineHeight: 1.1 }}>
              Want to be our <em style={{ color: '#25B472', fontStyle: 'italic' }}>next case study?</em>
            </h2>
            <p style={{ fontSize: '14px', color: '#6E8098', marginBottom: '20px', fontFamily: 'var(--font-jakarta)' }}>
              Every engagement starts with a free audit. We find the problems. You keep the report.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', padding: '13px 30px', borderRadius: '10px', fontSize: '15px', fontWeight: 800, background: '#25B472', color: '#fff', fontFamily: 'var(--font-jakarta)', textDecoration: 'none' }}>
              Get My Free Audit →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hub-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .hub-card-link {
          text-decoration: none;
        }
        .hub-card {
          background: #fff;
          border: 1.5px solid #DFE5ED;
          border-radius: 20px;
          overflow: hidden;
          transition: all .25s;
          cursor: pointer;
          height: 100%;
        }
        .hub-card:hover {
          border-color: #25B472;
          box-shadow: 0 12px 32px rgba(8,14,28,.1);
          transform: translateY(-3px);
        }
        @media(max-width: 768px) {
          .hub-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
