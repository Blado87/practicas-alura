import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'
import Button from '../Button/Button'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const manejarEnvio = (e) => {
    e.preventDefault()

    let datosEnvio = {
      nombre,
      puesto,
      foto,
      equipo
    }
  }

  return <section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <TextInput
        titulo="Nombre"
        placeholder='Ingrese el nombre...'
        required
        valor={nombre}
        actualizarValor={actualizarNombre}
      />
      <TextInput
        titulo="Puesto"
        placeholder='Ingrese el puesto...'
        required
        valor={puesto}
        actualizarValor={actualizarPuesto}
      />
      <TextInput
        titulo="Foto"
        placeholder='Ingrese la foto...'
        required
        valor={foto}
        actualizarValor={actualizarFoto}
      />
      <SelectInput
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
      />
      <Button text="Guardar" />
    </form>
  </section>
}

export default Form