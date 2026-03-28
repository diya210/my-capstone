function TableSection() {
  return (
    <section className="table-section">
      <h2>Planetary Facts at a Glance</h2>
      <p className="section-text">
        Below is a comparative table of major planets in our solar system.
        The data highlights key physical properties used by scientists worldwide.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Planet Type</th>
              <th>Name</th>
              <th>Mass (x10²⁴ kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="4">Terrestrial</td>
              <td>Mercury</td><td>0.33</td><td>4879</td><td>5427</td><td>3.7</td>
            </tr>
            <tr>
              <td>Venus</td><td>4.87</td><td>12104</td><td>5243</td><td>8.9</td>
            </tr>
            <tr>
              <td>Earth</td><td>5.97</td><td>12756</td><td>5514</td><td>9.8</td>
            </tr>
            <tr>
              <td>Mars</td><td>0.642</td><td>6792</td><td>3933</td><td>3.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
export default TableSection