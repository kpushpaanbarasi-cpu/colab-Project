import { artists } from '../data/artists.js'
import ArtistCard from './ArtistCard.jsx'
import { Ornament } from './Icons.jsx'
import CenterImage from '../assets/kolam/center-image.jpg'
import './Gallery.css';
// Reads the list from src/data/artists.js and renders one card per entry.
export default function Gallery() {
  return (

    <section id="gallery" className="gallery" aria-labelledby="gallery-title"style={{ backgroundImage: `url(${CenterImage})` }}>
      <div className="container">
        <header className="section__header">
          <Ornament />
          <h2 id="gallery-title">Kolam Gallery</h2>
          <p>
            A preview of how artists and their work could appear on Kolam Connect. The artwork and
            artist names below are <strong>sample content for demonstration</strong>.
          </p>
        </header>

        <div className="grid ">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  )
}
