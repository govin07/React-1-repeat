import { useState,useCallback , useEffect, useRef} from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQORSTVWXZUYabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "1234567890"
  if(charAllowed)  str += "!@#$%^&*()_?/|"


  for (let i = 1; i <= length; i++) {
    let char =  Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char)
    
  }
  setPassword(pass)




  }, [length, numberAllowed, charAllowed,setPassword ]);


  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator]);


  return (
    <>
    <div className='  h-[150px] w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className=' text-center text-lg text-white my-3 '>password</h1>
       <div className=' flex shadow rounded-lg overflow-hidden mb-4 '>
        <input
         type="text" 
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder="password"
         readOnly
         ref={passwordRef}
         
         />
         <button 
         onClick={copyPasswordToClipboard}
         
         
         className='bg-green-400 p-2 text-center text-sm text-black shadow-sm'>Copy</button>



      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='fles items-center gap-x-1'>
      <input
       type='range'
        min={8}
        max={20}
        defaultChecked="LengthInput"
       value={length}
       onClick={(e) => {setLength(e.target.value)
      
       }}
       

       className='cursor-pointer'
        />
        <label className='text-white text-sm text-center  font-bold' > length: {length} </label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked={numberAllowed}
        id='numburInput'
        onCanPlay={() => {setNumberAllowed((prev) => !prev )

        }}
        />
        <label className='text-center text-white' >Number</label>

      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked={charAllowed}
        id='characterInput'
        onCanPlay={() => {setCharAllowed((prev) => !prev )

        }}
        />
        <label className='text-center text-white' >Character</label>

      </div>
      
      </div>
    </div>

    </>
  )
}

export default App
