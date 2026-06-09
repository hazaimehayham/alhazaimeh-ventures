import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useLang, useT } from './i18n.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Per-route document title, language-aware.
function Title() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  const t = useT()
  useEffect(() => {
    const brand = t.nav.brand
    const page =
      pathname === '/about' ? t.nav.about
      : pathname === '/contact' ? t.nav.contact
      : pathname === '/' ? null
      : t.notFound.title
    document.title = page ? `${page} · ${brand}` : `${brand} · ${t.footer.tagline}`
  }, [pathname, lang, t])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Title />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
