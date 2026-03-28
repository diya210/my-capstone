import { useState, useEffect } from 'react'

function PlanetGrid() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    fetch('/planets.json')
      .then(res => res.json())
      .then(data => {
        console.log('Planets loaded:', data)
        setPlanets(data)
      })
      .catch(error => console.error('Fetch error:', error))
  }, [])

  return (
    <section className="planet-grid-section" id="planets">
      <h2>Visualizing the Differences Between Planets</h2>
      <p className="section-text">
        Each planet in our solar system has unique physical characteristics.
      </p>
      <div className="planet-grid">
        {planets.map((planet) => (
          <figure key={planet.planet} className="planet-card">
            <img src={planet.image} alt={planet.planet} />
            <figcaption>
              <h3>{planet.planet}</h3>
              <p>{planet.distanceFromSun} million km from Sun</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default PlanetGrid
