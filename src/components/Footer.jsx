import { siteConfig } from '../data/siteConfig.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>{siteConfig.brandName}</strong>, a prototype. Gallery content is sample data.
      </p>
      <p className="footer__small">&copy; {new Date().getFullYear()} {siteConfig.brandName}</p>
    </footer>
  )
}
