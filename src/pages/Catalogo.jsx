import autos from '../data/autos'

function Catalogo() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Catálogo de Autos</h2>
      <div className="row">
        {autos.map((auto) => (
          <div key={auto.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

              {/* CARRUSEL SI HAY MÁS DE UNA IMAGEN */}
              {auto.imagenes.length > 1 ? (
                <div
                  id={`carousel-${auto.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {auto.imagenes.map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100 object-fit-cover"
                          style={{ height: '200px', maxHeight: '220px', objectFit: 'cover' }}
                          alt={`Imagen ${index + 1} de ${auto.modelo}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* FLECHAS SOLO SI HAY MÁS DE UNA IMAGEN */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${auto.id}`}
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${auto.id}`}
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
              ) : (
                <img
                  src={auto.imagenes[0]}
                  className="card-img-top object-fit-cover"
                  style={{ height: '200px', maxHeight: '220px', objectFit: 'cover' }}
                  alt={`${auto.marca} ${auto.modelo}`}
                />
              )}

              {/* INFO DEL AUTO */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{auto.marca} {auto.modelo}</h5>
                <p className="card-text">Año: {auto.año}</p>
                <p className="card-text fw-bold">Precio: {auto.precio}</p>

                {/* BOTÓN DE WHATSAPP RESPONSIVE */}
                <a
                  href={`https://wa.me/5491123456789?text=Hola, estoy interesado en el ${auto.marca} ${auto.modelo} año ${auto.año}. ¿Está disponible?`}
                  className="btn btn-success btn-lg w-100 mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar info
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogo
