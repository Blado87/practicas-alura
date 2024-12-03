import TextInput from '../TextInput/TextInput'
import SelectInput from '../SelectInput/SelectInput'
import Button from '../Button/Button'
import './Form.css'

const Form = (props) => {

    const manejarEnvio = (e) => {
        event.preventDefault()
    }

    return <section className="formulario">
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <TextInput titulo="Nombre" placeholder='Ingrese el nombre...' required />
        <TextInput titulo="Puesto" placeholder='Ingrese el puesto...' required />
        <TextInput titulo="Foto" placeholder='Ingrese la foto...' required />
        <SelectInput />
        <Button text="Guardar"/>        
    </form>
</section>
}

export default Form