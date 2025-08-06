import { useState } from 'react'

function VendemosTuAuto() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    marca: '',
    modelo: '',
    año: '',
    km: '',
    estado: '',
    precio: '',
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

    const mensaje = `Hola, soy ${form.nombre}. Quiero vender mi auto: ${form.marca} ${form.modelo} año ${form.año}, ${form.km} km, estado: ${form.estado}, precio deseado: $${form.precio}. Comentarios: ${form.comentarios}. Teléfono: ${form.telefono}`

    const numeroWhatsApp = '5491123456789' // Cambiá por tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Vendé tu Auto</h2>
      <p className="text-center mb-4">Completá los datos y nos pondremos en contacto para ayudarte a venderlo.</p>

      <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" name="nombre" value={form.nombre} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="tel" className="form-control" name="telefono" value={form.telefono} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Marca</label>
          <input type="text" className="form-control" name="marca" value={form.marca} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Modelo</label>
          <input type="text" className="form-control" name="modelo" value={form.modelo} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Año</label>
          <input type="number" className="form-control" name="año" value={form.año} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Kilometraje</label>
          <input type="number" className="form-control" name="km" value={form.km} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Estado general</label>
          <select className="form-select" name="estado" value={form.estado} onChange={handleChange} required>
            <option value="">Seleccionar...</option>
            <option value="Excelente">Excelente</option>
            <option value="Muy bueno">Muy bueno</option>
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Precio deseado (ARS)</label>
          <input type="number" className="form-control" name="precio" value={form.precio} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Comentarios adicionales</label>
          <textarea className="form-control" rows="3" name="comentarios" value={form.comentarios} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100">Enviar por WhatsApp</button>
      </form>
    </div>
  )
}

export default VendemosTuAuto
