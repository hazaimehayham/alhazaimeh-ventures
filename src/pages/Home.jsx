import { Link } from 'react-router-dom'
import { useT } from '../i18n.jsx'
import { useReveal } from '../hooks/useReveal'
import { ventureIcons } from '../components/Icons.jsx'

const HERO_IMG =
  'https://images.unsplash.com/photo-1671209088918-485caf34e3f1?auto=format&fit=crop&w=1920&q=80'

const statusClass = {
  pharmacy: 'status--active',
  fuel: 'status--soon',
  tech: 'status--progress',
}

export default function Home() {
  const t = useT()
  const h = t.home
  useReveal([t])

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img src={HERO_IMG} alt="" loading="eager" />
        </div>
        <div className="hero__bg-grid" />
        <div className="hero__content">
          <p className="hero__eyebrow">{h.heroEyebrow}</p>
          <h1 className="hero__title">
            {h.heroTitleA}<br />
            <span className="gold">{h.heroTitleB}</span>
          </h1>
          <p className="hero__sub">{h.heroSub}</p>
          <div className="hero__cta">
            <Link to="/about" className="btn btn--gold">{h.ctaStory}</Link>
            <Link to="/contact" className="btn btn--outline">{h.ctaPartner}</Link>
          </div>
        </div>

        <ul className="hero__facts">
          {h.facts.map((f, i) => (
            <li key={i}><span className="hero__fact-n">{f.n}</span> {f.label}</li>
          ))}
        </ul>
      </section>

      {/* ── VENTURES ── */}
      <section className="section ventures">
        <div className="container">
          <div className="section__header reveal">
            <h2>{h.venturesTitle}</h2>
            <p className="section__sub">{h.venturesSub}</p>
          </div>

          <div className="ventures__grid">
            {h.ventures.map((v, i) => {
              const Icon = ventureIcons[v.icon]
              return (
                <div className="venture-card reveal" style={{ '--d': i }} key={v.id}>
                  <div className="venture-card__icon"><Icon /></div>
                  <span className={`venture-card__status ${statusClass[v.id]}`}>{v.status}</span>
                  <p className="venture-card__sector">{v.sector}</p>
                  <h3>{v.title}</h3>
                  <p className="venture-card__desc">{v.description}</p>
                  {v.brands.length > 0 && (
                    <ul className="venture-card__brands">
                      {v.brands.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section values section--dark">
        <div className="container">
          <div className="section__header reveal">
            <h2>{h.valuesTitle}</h2>
          </div>
          <div className="values__grid">
            {h.values.map((v, i) => (
              <div className="value-card reveal" style={{ '--d': i }} key={v.title}>
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
        <div className="container cta-banner__inner reveal">
          <div>
            <h2>{h.ctaTitle}</h2>
            <p>{h.ctaText}</p>
          </div>
          <Link to="/contact" className="btn btn--gold">{h.ctaBtn}</Link>
        </div>
      </section>
    </>
  )
}
