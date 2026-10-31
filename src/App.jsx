import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

// App just stacks the sections in order. Each section has an id
// (home, gallery, about, contact) that the navigation links scroll to.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#gallery">Skip to gallery</a>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
