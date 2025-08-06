import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          {/* Logo / Título */}
          <Link className="navbar-brand" to="/">HZ Venta</Link>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links colapsables */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalogo">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cotizacion">Cotización</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vendemos-tu-auto">Vendé tu auto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
