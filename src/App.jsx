import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Cotizacion from './pages/Cotizacion'
import VendemosTuAuto from './pages/VendemosTuAuto'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="container flex-grow-1 mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/vendemos-tu-auto" element={<VendemosTuAuto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
