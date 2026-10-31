import { useState } from 'react'
import { siteConfig } from '../data/siteConfig.js'

// Sticky top bar. On small screens the links hide behind a menu button.
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Smooth-scroll to a section by its id, then close the mobile menu.
  function goTo(event, target) {
    event.preventDefault()
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className="navbar" >
      <div className="navbar__inner">
        <a className="navbar__brand" href="#home" onClick={(e) => goTo(e, 'home')}>
          <span className="navbar__mark" aria-hidden="true">✿</span>
          {siteConfig.brandName}
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__bars" aria-hidden="true" />
        </button>

        <nav id="main-nav" className={`navbar__links ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
          {siteConfig.navLinks.map((link) => (
            <a key={link.target} href={`#${link.target}`} onClick={(e) => goTo(e, link.target)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
