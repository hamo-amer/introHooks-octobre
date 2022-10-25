import React, { useEffect, useState } from 'react'
import { Button, FormControl } from 'react-bootstrap'

function Counter() {
    const [count,setCount]=useState(0)
    const [text,setText]=useState('')

    const increment=()=>{
      setCount(count+1)
    }
const decrement=()=>{
    setCount(count>0 ? count-1:0) 
}
useEffect(()=>{
    const interval=setInterval(()=>{
        setCount(count+1)
    },1000)
    return ()=>clearInterval(interval)
},[count])

  return (
    <div style={{width:"50%",margin:"30px auto"}}>
        <Button variant='success' onClick={increment}>+</Button>
        <span>{count}</span>
        <Button variant='danger' onClick={decrement}>-</Button>
        <br/>
        <FormControl type='text' onChange={e=>setText(e.target.value)}  />
        <br />
        <p>{text}</p>
    </div>
  )
}

export default Counter