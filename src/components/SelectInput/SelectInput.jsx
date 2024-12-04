import './SelectInput.css'

const SelectInput = (props) => {

  const equipos = [
    "Programacion",
    "Front end",
    "Data science",
    "Devops",
    "UI y Desing",
    "Movil",
    "Innovacion y gestion"
  ]

  const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value)
  }

  return <div className='lista-opciones'>
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
      {equipos.map((equipo, index) => {
        return <option key={index} value={equipo}>{equipo}</option>
      })}
    </select>
  </div>
}

export default SelectInput