import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componenst/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    Name: "govind singh solanki",
    age: 20,
    email: "govindrajput02653@gmail.com"
  }
  let arr = ["govind ", 20, "payal"]

  return (
    <>
    <h1 className='bg-green-400'>Govind singh solanki</h1>
    <Card  userName="Aditya singh tawar" btnText="click me"/>
    <Card userName="Deepanshu singh chouhan" btnText="click me"/>
    
    </>
  )
}

export default App
