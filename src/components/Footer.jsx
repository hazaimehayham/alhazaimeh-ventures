import { Link } from 'react-router-dom'
import { useT } from '../i18n.jsx'

export default function Footer() {
  const t = useT()
  const f = t.footer
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-ah">AH</span>
          <p>{t.nav.brand}</p>
          <p className="footer__tagline">{f.tagline}</p>
        </div>

        <div className="footer__links">
          <h4>{f.navTitle}</h4>
          <Link to="/">{f.home}</Link>
          <Link to="/about">{f.about}</Link>
          <Link to="/contact">{f.contact}</Link>
        </div>

        <div className="footer__contact">
          <h4>{f.getInTouch}</h4>
          <a href="mailto:ayham@alhazaimeh-ventures.com">ayham@alhazaimeh-ventures.com</a>
          <p>alhazaimeh-ventures.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {t.nav.brand}. {f.rights}</p>
      </div>
    </footer>
  )
}
