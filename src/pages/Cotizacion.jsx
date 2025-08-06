import { useState } from 'react'

function Cotizacion() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    marca: '',
    modelo: '',
    año: '',
    km: '',
    estado: '',
    comentarios: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `Hola, soy ${form.nombre}. Quiero cotizar mi ${form.marca} ${form.modelo} (${form.año}) con ${form.km} km. Estado: ${form.estado}. Comentarios: ${form.comentarios}`
    const numeroWhatsApp = '5491123456789' // Cambialo si querés

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Solicitá una Cotización</h2>

      <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Ej: Juan Pérez"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="ejemplo@mail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            name="telefono"
            placeholder="Ej: 1123456789"
            pattern="[0-9]{10,15}"
            value={form.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Marca del vehículo</label>
          <input
            type="text"
            className="form-control"
            name="marca"
            placeholder="Ej: Toyota"
            value={form.marca}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input
            type="text"
            className="form-control"
            name="modelo"
            placeholder="Ej: Corolla"
            value={form.modelo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Año</label>
          <input
            type="number"
            className="form-control"
            name="año"
            placeholder="Ej: 2020"
            value={form.año}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Kilometraje</label>
          <input
            type="number"
            className="form-control"
            name="km"
            placeholder="Ej: 80000"
            value={form.km}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado general</label>
          <select
            className="form-select"
            name="estado"
            value={form.estado}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar...</option>
            <option value="Excelente">Excelente</option>
            <option value="Muy bueno">Muy bueno</option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Comentarios adicionales</label>
          <textarea
            className="form-control"
            rows="3"
            name="comentarios"
            placeholder="Agregá info relevante sobre tu vehículo..."
            value={form.comentarios}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  )
}

export default Cotizacion
