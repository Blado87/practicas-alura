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

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select name="" id="">
            {equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            } )}
        </select>
    </div>
}

export default SelectInput