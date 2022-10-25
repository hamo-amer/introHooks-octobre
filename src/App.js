import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [show,setShow]=useState(false)

  const toggleShow=()=>{
    setShow(!show)
  }

  return (
    <div className='App'>
      <Button variant='secondary' onClick={toggleShow} >{show ? "Hide":"Show"}</Button>
      {
        show ? <Counter /> :null
      }
    </div>
  )
}

export default App