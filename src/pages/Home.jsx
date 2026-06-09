import { Link } from 'react-router-dom'

const ventures = [
  {
    icon: '⚕',
    sector: 'Healthcare',
    title: 'Pharmacy Chain',
    description:
      'Three established pharmacies serving communities with trusted pharmaceutical care and health products.',
    brands: ['Sadaf Pharmacy', 'Kahal Pharmacy', 'Edrak Pharmacy'],
    status: 'Operational',
    statusClass: 'status--active',
  },
  {
    icon: '⛽',
    sector: 'Energy',
    title: 'Petrol Station',
    description:
      'A fuel station designed to serve the region with quality fuel, EV charging, and convenience services.',
    brands: [],
    status: 'Opening Soon',
    statusClass: 'status--soon',
  },
  {
    icon: '🧠',
    sector: 'Healthcare Technology',
    title: 'Proprietary Tech Platform',
    description:
      'Alhazaimeh Ventures is developing a proprietary technology platform for the pharmacy sector. Currently in private development; details available on request.',
    brands: [],
    status: 'In Development',
    statusClass: 'status--progress',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg-grid" />
        <div className="hero__content">
          <p className="hero__eyebrow">Est. in Vision, Built for Growth</p>
          <h1 className="hero__title">
            Building Tomorrow's<br />
            <span className="gold">Businesses Today</span>
          </h1>
          <p className="hero__sub">
            Alhazaimeh Ventures is a diversified holding group with active operations
            across Healthcare, Energy, and Technology, driven by a commitment
            to long-term value and community impact.
          </p>
          <div className="hero__cta">
            <Link to="/about" className="btn btn--gold">Discover Our Story</Link>
            <Link to="/contact" className="btn btn--outline">Partner With Us</Link>
          </div>
        </div>

        <ul className="hero__facts">
          <li><span className="hero__fact-n">Three</span> pharmacies</li>
          <li><span className="hero__fact-n">One</span> fuel station</li>
          <li><span className="hero__fact-n">Three</span> sectors</li>
        </ul>
      </section>

      {/* ── VENTURES ── */}
      <section className="section ventures">
        <div className="container">
          <div className="section__header">
            <h2>Three Pillars of Growth</h2>
            <p className="section__sub">
              Each venture is built on strong fundamentals, local insight, and a
              relentless drive toward operational excellence.
            </p>
          </div>

          <div className="ventures__grid">
            {ventures.map((v) => (
              <div className="venture-card" key={v.sector}>
                <div className="venture-card__icon">{v.icon}</div>
                <span className={`venture-card__status ${v.statusClass}`}>{v.status}</span>
                <p className="venture-card__sector">{v.sector}</p>
                <h3>{v.title}</h3>
                <p className="venture-card__desc">{v.description}</p>
                {v.brands.length > 0 && (
                  <ul className="venture-card__brands">
                    {v.brands.map(b => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section values">
        <div className="container">
          <div className="section__header">
            <h2>Our Core Principles</h2>
          </div>
          <div className="values__grid">
            {[
              { title: 'Long-Term Vision', desc: 'We invest for decades, not quarters. Every decision is made with lasting impact in mind.' },
              { title: 'Community First', desc: 'Our pharmacies, station, and technology ventures exist to serve the people around us.' },
              { title: 'Operational Excellence', desc: 'From supply chain to customer experience, we hold every detail to the highest standard.' },
              { title: 'Trusted Partnerships', desc: 'We build relationships with partners, suppliers, and regulators, grounded in integrity and mutual value.' },
            ].map(v => (
              <div className="value-card" key={v.title}>
                <div className="value-card__line" />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to Explore a Partnership?</h2>
            <p>Whether you're a brand, investor, or supplier, we'd like to hear from you.</p>
          </div>
          <Link to="/contact" className="btn btn--gold">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
