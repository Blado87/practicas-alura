import { useState } from 'react'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import './App.css'
import Add from './components/Add/Add'

function App() {
  
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
}

  return (
    <>
      <Header />
      { showForm && <Form /> }      
      <Add toggleForm={toggleForm}/>
    </>
  )
}

export default App
