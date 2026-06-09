/* Consistent line-icon set (24x24, stroke = currentColor) replacing emoji.
   Each accepts standard SVG props (className, aria-hidden, etc.). */

const base = {
  width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
  stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round',
  strokeLinejoin: 'round', 'aria-hidden': true,
}

export function IconPharmacy(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 7v10M7 12h10" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  )
}

export function IconFuel(props) {
  // Fuel pump with an EV bolt on the body
  return (
    <svg {...base} {...props}>
      <path d="M5 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M3 21h14" />
      <path d="M9.5 8.5 8 11h2l-1.5 2.5" />
      <path d="M15 9l2.5 2.5a2 2 0 0 0 .5 1.4V18a1.5 1.5 0 0 0 3 0V8.5L18 6" />
    </svg>
  )
}

export function IconTech(props) {
  // Processor / platform
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9.5 9.5h5v5h-5z" opacity="0.35" />
      <path d="M10 4v2M14 4v2M10 18v2M14 18v2M4 10h2M4 14h2M18 10h2M18 14h2" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.6-3.8-9S9.5 5.4 12 3Z" />
    </svg>
  )
}

export function IconBuilding(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15" />
      <path d="M16 10h2a2 2 0 0 1 2 2v9M3 21h18" />
      <path d="M8 8h4M8 12h4M8 16h4" />
    </svg>
  )
}

export function IconArrow(props) {
  // Inline-end arrow; flips automatically in RTL via CSS transform
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export const ventureIcons = {
  pharmacy: IconPharmacy,
  fuel: IconFuel,
  tech: IconTech,
}
