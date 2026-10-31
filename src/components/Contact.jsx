import {
  siteConfig,
  hasWhatsApp,
  hasPhone,
  buildWhatsAppLink,
  phoneLink,
  mapsLink,
} from '../data/siteConfig.js'
import { WhatsAppIcon, PhoneIcon, PinIcon, Ornament } from './Icons.jsx'

// Three ways to get in touch. All values come from src/data/siteConfig.js.
export default function Contact() {
  const needsSetup = !hasWhatsApp || !hasPhone

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <header className="section__header">
          <Ornament />
          <h2 id="contact-title">Get in Touch</h2>
          <p>WhatsApp is the quickest way to reach us. The message is only sent when you press send.</p>
        </header>

        <div className="contact-grid">
          <div className="contact-card contact-card--primary">
            <WhatsAppIcon />
            <h3>WhatsApp</h3>
            <p>Start a chat with a message already written for you.</p>
            <a
              className="btn btn--whatsapp-solid"
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <PhoneIcon />
            <h3>Phone</h3>
            {hasPhone ? (
              <a className="contact-card__link" href={phoneLink}>
                {siteConfig.phoneDisplay}
              </a>
            ) : (
              <p className="contact-card__pending">Phone number coming soon</p>
            )}
          </div>

          <div className="contact-card">
            <PinIcon />
            <h3>Location</h3>
            <a className="contact-card__link" href={mapsLink} target="_blank" rel="noopener noreferrer">
              {siteConfig.locationLabel}
            </a>
            <p className="contact-card__hint">Opens in Google Maps</p>
          </div>
        </div>

        {needsSetup && (
          <p className="setup-note" role="note">
            Setup note: contact details are placeholders. Add your number in{' '}
            <code>src/data/siteConfig.js</code> and this notice disappears.
          </p>
        )}
      </div>
    </section>
  )
}
