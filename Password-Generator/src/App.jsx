import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/~`"



    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1
      )


      pass += str.charAt(char)


      setpassword(pass);
      
    }

  }, [Length, numAllowed, charAllowed, setpassword])

useEffect(( ) => {
  passwordGenerator();
} , [Length, numAllowed, charAllowed, passwordGenerator] )


const passRef = useRef(null) 





const copyToClipboard = useCallback(() => {
  passRef.current?.select();
  window.navigator.clipboard.writeText(password)} , [password]) 


  return (
    <>


      <div className='   w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-blue-950'>
        <h1 className='text-3xl text-center text-white mb-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder="Password"
            readOnly
            ref={passRef}
          />

          <button 
          onClick={copyToClipboard}
          className='cursor-pointer outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0'> Copy </button>


        </div>

        <div className='flex text-sm  gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={Length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}



            />
            <label>Length:{Length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}     //setnumAllowed(!numAllowed)
            />
            <label htmlFor="numberinput">Numbers</label>



          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}     //setnumAllowed(!numAllowed)
            />
            <label htmlFor="charinput">Special Characters</label>



          </div>





        </div>

      </div>
    </>
  )
}

export default App
