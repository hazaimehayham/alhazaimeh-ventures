import { Link } from 'react-router-dom'
import { useT } from '../i18n.jsx'

export default function NotFound() {
  const t = useT().notFound
  return (
    <section className="page-hero notfound">
      <div className="page-hero__bg-grid" />
      <div className="container">
        <p className="notfound__code">404</p>
        <h1>{t.title}</h1>
        <p className="page-hero__sub">{t.text}</p>
        <div className="notfound__cta">
          <Link to="/" className="btn btn--gold">{t.back}</Link>
        </div>
      </div>
    </section>
  )
}
