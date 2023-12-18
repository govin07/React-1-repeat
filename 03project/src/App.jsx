import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(0);
 
  const addValue =  () => {
    if(counter === 20){
      console.log("your can't add more")
    }
    else{
      setCounter(counter + 1)
    }
   
 
  
  }
  const removeValue = () => {
    if(counter === 0){
      console.log("you can't remove");
    }
    else{
      setCounter(counter - 1)
    }
    
      
   
    
  }


  return (
    <>
      <h1>Govind singh solanki</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={addValue}
      
      >Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <footer> footer is :{counter}</footer>
    </>
  )
}

export default App
