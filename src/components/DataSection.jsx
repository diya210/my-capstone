function DataSection() {
  return (
    <section className="data-section">
      <h2>How Planetary Data Helps Us Understand Space</h2>
      <p className="section-text">
        Planetary science goes beyond images. Comparing mass, diameter,
        gravity, and density allows us to gain insight into how planets form,
        behave, and evolve.
      </p>
      <div className="video-card">
        <video autoPlay muted loop playsInline width="100%">
          <source src="/planet-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
export default DataSection