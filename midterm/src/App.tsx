import { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);
  

  function increment () {

     setCounter((click + counter + 1))
     setClick((click + 1))
  }
    
  function reset () {

    setCounter(0)
    setClick((click + 1))
  }

 
  return (

    <div>
      <p>Counter:{counter}</p>
      <button onClick={increment}>Incriment</button>
      <button onClick={reset}>Reset</button>
    </div>

  )
  }

