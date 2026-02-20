const paragraphs = [
  "From first scroll to last, every frame is tuned for calm confidence.",
  "This section exists to let the hero pin and breathe during the scroll.",
  "Subtle texture and precise spacing make the page feel crafted, not templated.",
  "GSAP ScrollTrigger gives smooth interpolation without heavy scroll handlers.",
];

const cards = [
  { title: "Precision", copy: "Animated transforms only. No layout thrash." },
  { title: "Performance", copy: "Pinned hero with scrub for premium motion." },
  { title: "Clarity", copy: "Typography with room to feel luxurious." },
];

export default function DummyContent() {
  return (
    <section className="dummy" aria-label="Additional content">
      <div className="dummy-inner">
        <h2>Designed For Smooth Momentum</h2>
        <div className="dummy-grid">
          {cards.map((card) => (
            <article className="dummy-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
        <div className="dummy-copy">
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
