import { useEffect } from 'react'

/* Reveal-on-scroll for any element carrying the `reveal` class.
   Visibility is never gated in CSS without JS: the `js-reveal` flag on
   <html> (set in main.jsx) is what hides the default state, so no-JS and
   headless renders show full content. Reduced motion and any failure path
   reveal everything immediately. A timed fallback guarantees nothing stays
   hidden even if the observer never fires. Call once per page after mount. */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'))
    if (!els.length) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))

    // Safety net: never leave content hidden if the observer never fires.
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('is-visible'))
    }, 2500)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
