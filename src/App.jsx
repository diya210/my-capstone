import './App.css'
import Header from './components/Header'
import DataSection from './components/DataSection'
import PlanetGrid from './components/PlanetGrid'
import TableSection from './components/TableSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <DataSection />
      <PlanetGrid />
      <TableSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App