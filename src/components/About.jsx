import { Ornament } from './Icons.jsx'
import about from '../assets/kolam/about.jpg'
import './About.css'
// Short, honest description. It makes no claims about existing users or bookings.
export default function About() {
  return (
    <section id="about" className="section section--tinted" aria-labelledby="about-title"style={{ backgroundImage: `url(${about})` }}>
      <div className="container container--narrow">
        <header className="section__header">
          <Ornament />
          <h2 id="about-title">About Kolam Connect</h2>
        </header>
        <p className="about__lead">
      Kolam is more than just an art form drawn at the entrance of a home. It is a beautiful expression of Tamil culture, creativity, and tradition passed down through generations.
        </p>
        <div className="para">
        <p className="more">
         Kolam Connect is a platform dedicated to celebrating and preserving this traditional art while creating new opportunities for talented kolam artists to showcase their creativity.
         Our goal is to bring artists and art enthusiasts together through a shared appreciation for kolam. We provide a space where artists can share their work, explore different styles and patterns, and receive recognition for their artistic skills.
        </p>
        </div>
   
      </div>
    </section>
  )
}
