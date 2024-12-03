import { useState } from 'react'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Form />
    </>
  )
}

export default App
