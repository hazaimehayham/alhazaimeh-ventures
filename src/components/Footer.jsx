import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-ah">AH</span>
          <p>Alhazaimeh Ventures</p>
          <p className="footer__tagline">Building Tomorrow's Businesses</p>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <a href="mailto:ayham@alhazaimeh-ventures.com">ayham@alhazaimeh-ventures.com</a>
          <p>alhazaimeh-ventures.com</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Alhazaimeh Ventures. All rights reserved.</p>
      </div>
    </footer>
  )
}
