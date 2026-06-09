import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { toggle } = useLang()
  const t = useT().nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [['/', t.home], ['/about', t.about], ['/contact', t.contact]]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-ah">AH</span>
          <span className="navbar__logo-text">{t.brand}</span>
        </Link>

        <button
          className={`navbar__burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {links.map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => { toggle(); setMenuOpen(false) }}
            aria-label={t.toggleAria}
          >
            {t.toggleLabel}
          </button>
        </div>
      </div>
    </nav>
  )
}
