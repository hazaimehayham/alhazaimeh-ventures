const timeline = [
  { year: 'Foundation', event: 'Yousef Al-Hazaimeh establishes the first pharmacy, laying the cornerstone of what would become a multi-sector venture group.' },
  { year: 'Growth', event: 'The pharmacy portfolio expands to three locations — Sadaf, Kahal, and Edrak — serving thousands of customers across the region.' },
  { year: 'Diversification', event: 'Ayham Al-Hazaimeh joins leadership, and the group sets its sights on the energy sector with a new petrol station project.' },
  { year: '2026', event: 'The petrol station nears completion. A proprietary technology platform for the pharmacy sector enters private development, marking the group\'s expansion into Healthcare Technology.' },
]

const leadership = [
  {
    name: 'Yousef Al-Hazaimeh',
    title: 'Founder & Chairman',
    bio: 'With decades of entrepreneurial experience, Yousef built the group from a single pharmacy into a diversified holding company. His vision for community-centred business remains the foundation of everything Alhazaimeh Ventures does.',
  },
  {
    name: 'Ayham Al-Hazaimeh',
    title: 'Managing Director',
    bio: 'Ayham leads day-to-day operations and strategic growth initiatives across all three sectors. He brings a modern approach to expansion — identifying new markets, forging partnerships, and driving the group\'s next chapter.',
  },
]

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero__bg-grid" />
        <div className="container">
          <p className="eyebrow">Our Story</p>
          <h1>Built on Trust.<br /><span className="gold">Driven by Vision.</span></h1>
          <p className="page-hero__sub">
            Alhazaimeh Ventures is a family-led holding group with a simple belief:
            that great businesses are built patiently, purposefully, and with the community at heart.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container mission-block">
          <div className="mission-block__text">
            <p className="eyebrow">Who We Are</p>
            <h2>A Holding Group with Deep Roots</h2>
            <p>
              Founded by Yousef Al-Hazaimeh, the group began with a single pharmacy and
              an unwavering commitment to quality care. Over the years, that commitment
              expanded beyond healthcare — into energy infrastructure and proprietary
              technology — creating a portfolio that serves communities at every level of daily life.
            </p>
            <p>
              Today, Alhazaimeh Ventures operates three pharmacies, is finalising a
              petrol station, and is developing a proprietary technology platform for the
              pharmacy sector. Each venture is chosen not just for financial returns, but for
              the value it brings to the people we serve.
            </p>
          </div>
          <div className="mission-block__pillars">
            {[
              { icon: '⚕', label: 'Healthcare', sub: '3 Pharmacies' },
              { icon: '⛽', label: 'Energy', sub: 'Petrol Station' },
              { icon: '🧠', label: 'Technology', sub: 'In Development' },
            ].map(p => (
              <div className="pillar-badge" key={p.label}>
                <span className="pillar-badge__icon">{p.icon}</span>
                <strong>{p.label}</strong>
                <span>{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section__header">
            <p className="eyebrow">Our Journey</p>
            <h2>From One Pharmacy to a Diversified Group</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline__item" key={i}>
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
          <div className="section__header">
            <p className="eyebrow">Our Portfolio</p>
            <h2>The Ventures</h2>
          </div>
          <div className="ventures-detail">
            <div className="venture-detail-card">
              <div className="venture-detail-card__header">
                <span>⚕</span>
                <div>
                  <h3>Pharmacy Chain</h3>
                  <span className="status--active">Operational</span>
                </div>
              </div>
              <p>Three pharmacies providing pharmaceutical products, health consultations, and community care services. Each location operates under its own trusted brand identity.</p>
              <div className="venture-detail-card__brands">
                <div>Sadaf Pharmacy</div>
                <div>Kahal Pharmacy</div>
                <div>Edrak Pharmacy</div>
              </div>
            </div>

            <div className="venture-detail-card">
              <div className="venture-detail-card__header">
                <span>⛽</span>
                <div>
                  <h3>Petrol Station</h3>
                  <span className="status--soon">Opening Soon — Q3 2026</span>
                </div>
              </div>
              <p>A fully equipped fuel and convenience station in its final construction phase. Designed to deliver a premium refuelling experience with a focus on safety, efficiency, and service quality.</p>
            </div>

            <div className="venture-detail-card">
              <div className="venture-detail-card__header">
                <span>🧠</span>
                <div>
                  <h3>Proprietary Tech Platform</h3>
                  <span className="status--progress">In Development</span>
                </div>
              </div>
              <p>Alhazaimeh Ventures is developing a proprietary technology platform for the pharmacy sector. Currently in private development — details available upon request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="section__header">
            <p className="eyebrow">The People Behind It</p>
            <h2>Leadership</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map(l => (
              <div className="leader-card" key={l.name}>
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
