function Header() {
  return (
    <header className="hero">
     <nav className="nav">
  <img src="/WhatsApp Image 2026-02-06 at 10.44.50 AM.jpeg" alt="Planet logo" className="logo" width="150" />
</nav>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Explore Our Solar<br />System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this resource breaks down
            the solar system in a clear, data-driven way.
          </p>
          <div className="hero-buttons">
            <a href="#planets" className="btn primary">Explore the Data</a>
            <a href="#contact" className="btn secondary">Contact Us</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Image.png" alt="Earth" />
        </div>
      </div>
    </header>
  )
}
export default Header