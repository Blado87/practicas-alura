import { useState } from 'react'
import './Add.css'

const Add = (props) => {

    return <section className='addSection'>
        <h3 className='title'>Mi Organización</h3>
        <img src="/img/add.jpeg" alt="add" onClick={props.toggleForm} />
    </section>
}

export default Add