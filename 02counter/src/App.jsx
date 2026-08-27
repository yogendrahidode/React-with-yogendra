import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]  = useState(5)
  
//let counter = 5
const addValue = () =>{
  
  
  //counter = counter + 1
  setCounter(counter + 1)
  //console.log("clicked",counter);
  
}


const removeValue = () =>{
  setCounter(counter - 1)
}


  return (
    <>
     <h1>yogendra with react</h1>
     <h2>Counter Value : {counter}</h2>


     <button onClick={addValue}>Add Value {counter}</button>
     
     <br />
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
