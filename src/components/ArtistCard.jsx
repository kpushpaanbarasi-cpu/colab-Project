import fallbackImage from '../assets/kolam/fallback.svg'
import { buildWhatsAppLink } from '../data/siteConfig.js'
import { WhatsAppIcon } from './Icons.jsx'

// One gallery card. It receives a single `artist` object as a prop.
export default function ArtistCard({ artist }) {
  const { artistName, title, description, image, location } = artist

  // If the image fails to load, swap in the fallback once
  // (the guard stops an endless loop if the fallback fails too).
  function handleImageError(event) {
    if (!event.currentTarget.src.includes('fallback')) {
      event.currentTarget.src = fallbackImage
    }
  }

  const message = `Hi Kolam Connect, I'd like to enquire about the "${title}" by ${artistName}.`

  return (
    <article className="card">
      <div className="card__image-wrap">
        <img
          className="card__image"
          src={image}
          alt={`${title}, a kolam design`}
          loading="lazy"
          onError={handleImageError}
        />
        <span className="card__badge">Sample</span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__artist">by {artistName}</p>
        {/* Optional field: only rendered when a location exists */}
        {location && <p className="card__location">{location}</p>}
        <p className="card__description">{description}</p>
        <a
          className="btn btn--whatsapp"
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire on WhatsApp about ${title} by ${artistName}`}
        >
          <WhatsAppIcon /> Enquire on WhatsApp
        </a>
      </div>
    </article>
  )
}
