// Small inline SVG icons so we need no icon library.
// aria-hidden because the text next to each icon already describes it.

export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.4L3 21Z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.400-2.400-2.400l.8-1-1-2L9 8.500Z" />
  </svg>
)

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
)

// A tiny kolam-style flower used as a divider ornament.
export const Ornament = () => (
  <svg className="ornament" viewBox="0 0 120 24" width="120" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <line x1="0" y1="12" x2="44" y2="12" />
    <line x1="76" y1="12" x2="120" y2="12" />
    <circle cx="60" cy="12" r="3" fill="currentColor" stroke="none" />
    <path d="M60 9C64 4 70 6 68 12C70 18 64 20 60 15C56 20 50 18 52 12C50 6 56 4 60 9Z" />
    <circle cx="40" cy="12" r="1.600" fill="currentColor" stroke="none" />
    <circle cx="80" cy="12" r="1.600" fill="currentColor" stroke="none" />
  </svg>
)
