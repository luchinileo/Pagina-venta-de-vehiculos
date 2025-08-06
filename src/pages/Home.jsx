function Home() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bienvenido a HZ Venta</h2>
      <p className="lead text-center">
        Somos una plataforma dedicada a la venta y cotización de vehículos. Explorá nuestro catálogo o cotizá tu auto fácilmente.
      </p>

      <div className="text-center mt-4">
        <img
          src="/imagenes/inicio.jpg"
          alt="Autos en venta"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}

export default Home
