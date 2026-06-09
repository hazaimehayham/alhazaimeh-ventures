import { useT } from '../i18n.jsx'
import { useReveal } from '../hooks/useReveal'
import { ventureIcons } from '../components/Icons.jsx'

const statusClass = {
  pharmacy: 'status--active',
  fuel: 'status--soon',
  tech: 'status--progress',
}

export default function About() {
  const t = useT()
  const a = t.about
  useReveal([t])

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" />
        <div className="container">
          <p className="eyebrow">{a.heroEyebrow}</p>
          <h1>{a.heroTitleA}<br /><span className="gold">{a.heroTitleB}</span></h1>
          <p className="page-hero__sub">{a.heroSub}</p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container mission-block">
          <div className="mission-block__text reveal">
            <h2>{a.missionTitle}</h2>
            <p>{a.missionP1}</p>
            <p>{a.missionP2}</p>
          </div>
          <div className="mission-block__pillars">
            {a.pillars.map((p, i) => {
              const Icon = ventureIcons[p.icon]
              return (
                <div className="pillar-badge reveal" style={{ '--d': i }} key={p.label}>
                  <span className="pillar-badge__icon"><Icon /></span>
                  <span className="pillar-badge__text">
                    <strong>{p.label}</strong>
                    <span>{p.sub}</span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section__header reveal">
            <h2>{a.timelineTitle}</h2>
          </div>
          <div className="timeline">
            {a.timeline.map((item, i) => (
              <div className="timeline__item reveal" style={{ '--d': i }} key={i}>
                <div className="timeline__marker">
                  <span className="timeline__year">{item.year}</span>
                  <div className="timeline__dot" />
                </div>
                <p className="timeline__event">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURES DETAIL ── */}
      <section className="section">
        <div className="container">
          <div className="section__header reveal">
            <h2>{a.venturesTitle}</h2>
          </div>
          <div className="ventures-detail">
            {a.ventures.map((v, i) => {
              const Icon = ventureIcons[v.icon]
              return (
                <div className="venture-detail-card reveal" style={{ '--d': i }} key={v.id}>
                  <div className="venture-detail-card__header">
                    <span className="venture-detail-card__icon"><Icon /></span>
                    <div>
                      <h3>{v.title}</h3>
                      <span className={statusClass[v.id]}>{v.status}</span>
                    </div>
                  </div>
                  <p>{v.description}</p>
                  {v.brands.length > 0 && (
                    <div className="venture-detail-card__brands">
                      {v.brands.map(b => <div key={b}>{b}</div>)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section__header reveal">
            <h2>{a.leadershipTitle}</h2>
          </div>
          <div className="leadership-grid">
            {a.leadership.map((l, i) => (
              <div className="leader-card reveal" style={{ '--d': i }} key={l.name}>
                <div className="leader-card__avatar">
                  {l.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3>{l.name}</h3>
                <p className="leader-card__title gold">{l.title}</p>
                <p className="leader-card__bio">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
