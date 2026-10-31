import "./SectionHeading.css";

// Small reusable heading used by Gallery, About and Contact.
// A tiny kolam-style motif sits under the title.
export default function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      <svg
        className="section-heading__motif"
        viewBox="0 0 120 16"
        aria-hidden="true"
        focusable="false"
      >
        <line x1="0" y1="8" x2="46" y2="8" />
        <path d="M60 1 L67 8 L60 15 L53 8 Z" />
        <circle cx="60" cy="8" r="1.6" className="dot" />
        <line x1="74" y1="8" x2="120" y2="8" />
      </svg>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </header>
  );
}
