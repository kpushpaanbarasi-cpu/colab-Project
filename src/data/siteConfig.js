// ============================================================
//  SITE CONFIGURATION  —  the only file you edit to change
//  contact details. Everything else reads from here.
// ============================================================

export const siteConfig = {
  brandName: 'Kolam Connect',

  // ---- CONTACT DETAILS (PLACEHOLDERS) -----------------------
  // TODO: replace with a number you are authorised to publish.
  // Digits only, country code first, no "+", spaces or dashes.
  // Example format for India: '91XXXXXXXXXX'
  whatsappNumber: '918056380147',

  // How the phone number is shown on the page, e.g. '+91 XXXXX XXXXX'
  phoneDisplay: '',

  // City / area shown in the Contact section.
  // TODO: replace with your real city or business location.
  locationLabel: 'Madurai, sellur, TamilNadu',
  // ------------------------------------------------------------

  // Message pre-filled when a visitor taps a general WhatsApp button.
  whatsappMessage: "Hi Kolam Connect, I'm interested in learning more about your platform.",

  navLinks: [
    { label: 'Home', target: 'home' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ],
}

// ---------- Helpers (used by Hero, ArtistCard, Contact) ------

// Keep digits only, so "+91 98765-43210" still works.
const cleanDigits = (value) => String(value || '').replace(/\D/g, '')

export const hasWhatsApp = cleanDigits(siteConfig.whatsappNumber).length >= 8
export const hasPhone = cleanDigits(siteConfig.phoneDisplay).length >= 8

// https://wa.me/COUNTRYCODEPHONENUMBER?text=ENCODED_MESSAGE
// If no number is configured yet, https://wa.me/?text=... opens WhatsApp's
// own "choose a contact" screen, so the button still works while testing.
export function buildWhatsAppLink(message = siteConfig.whatsappMessage) {
  const text = encodeURIComponent(message)
  const number = hasWhatsApp ? cleanDigits(siteConfig.whatsappNumber) : ''
  return `https://wa.me/${number}?text=${text}`
}

export const phoneLink = hasPhone ? `tel:+${cleanDigits(siteConfig.phoneDisplay)}` : null

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.locationLabel,
)}`
