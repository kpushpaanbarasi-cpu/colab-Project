import heroImage from '../assets/kolam/hero-green.png'
import { buildWhatsAppLink } from '../data/siteConfig.js'
import { WhatsAppIcon } from './Icons.jsx'
import './Hero.css'

// Opening section: background kolam + headline + two buttons.
export default function Hero() {
  function scrollToGallery() {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Kolam Connect</h1>
        <p className="hero__headline">Make your day great with our Special Kolams!</p>
        <p className="hero__text">
          Kolam Connect brings kolam artists together with people who appreciate and need their
          work, from festival mornings to wedding doorways.
        </p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={scrollToGallery}>
            Explore the Gallery 
          </button>
          <a
            className="btn btn--outline-light"
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Connect With Us
          </a>
        </div>
      </div>
    </section>
  )
}
