"use client"
// app/blog/page.tsx

const POSTS = [
    { category: 'Meta Ads', title: 'How to test ad creatives without wasting money', excerpt: 'The angle-first testing system we use for every client.' },
    { category: 'Google Ads', title: 'Exact match vs broad match: the real answer', excerpt: 'When to use each. With our campaign structure template.' },
    { category: 'CRO', title: '7 things killing your website conversion rate', excerpt: 'The most common problems we find in every audit.' },
    { category: 'Tracking', title: 'Fix your Meta CAPI in 30 minutes', excerpt: 'Step-by-step. We took a client from 4/10 to 9.3/10.' },
    { category: 'Email', title: '5 email flows every store needs (with templates)', excerpt: 'Copy-paste flows for welcome, cart, post-purchase.' },
    { category: 'Strategy', title: 'How to split a $5K/month ad budget', excerpt: 'The exact allocation we use for clients spending $3-10K.' },
  ]
  
  const CAT_COLORS: Record<string, string> = {
    'Meta Ads': '#213D79', 'Google Ads': '#25B472', 'CRO': '#7C3AED',
    'Tracking': '#F79009', 'Email': '#F04438', 'Strategy': '#0891B2',
  }
  
  export default function BlogPage() {
    return (
      <>
        <section style={{ background: '#fff', textAlign: 'center', padding: '60px 32px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Blog</div>
            <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(30px,4vw,44px)', color: '#1C2A42' }}>
              Stuff that <em style={{ color: '#25B472', fontStyle: 'italic' }}>actually helps.</em>
            </h1>
            <p style={{ fontSize: '15px', color: '#6E8098', margin: '8px auto 0', fontFamily: 'var(--font-jakarta)' }}>Same playbook we use for clients. Free.</p>
          </div>
        </section>
  
        <section style={{ background: '#fff' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 32px 80px' }} className="blog-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="blog-grid">
              {POSTS.map((post, i) => (
                <article key={i} style={{ background: '#fff', border: '1px solid #DFE5ED', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s', cursor: 'pointer' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 12px 40px rgba(8,14,28,.12)'; el.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'translateY(0)' }}>
                  <div style={{ height: '170px', background: '#DFE5ED', display: 'grid', placeItems: 'center', fontSize: '10px', color: '#6E8098', fontFamily: 'var(--font-jakarta)' }}>Blog image</div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: CAT_COLORS[post.category] || '#213D79', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px', fontFamily: 'var(--font-jetbrains)' }}>{post.category}</div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#080E1C', marginBottom: '6px', lineHeight: 1.4, fontFamily: 'var(--font-bricolage)' }}>{post.title}</h3>
                    <p style={{ fontSize: '12.5px', color: '#6E8098', lineHeight: 1.5, fontFamily: 'var(--font-jakarta)' }}>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
  
        <style>{`
          @media(max-width:900px){
            .blog-container{padding:0 16px 52px!important}
            .blog-grid{grid-template-columns:1fr!important}
          }
        `}</style>
      </>
    )
  }