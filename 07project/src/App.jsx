import { useState } from 'react'
import Input from './components/input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'

function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd");
  const [to , setTo] = useState("To")

  return (
    <> 
     <h1 className='bg-green-400 text-center'>govind singh solanki</h1>
    </>
  )
}

export default App
