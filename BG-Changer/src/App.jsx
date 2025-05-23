// import React from 'react'

// const App = () => {



//   const colors = [
//   'bg-red-500',
//   'bg-blue-500',
//   'bg-purple-500',
//   'bg-lime',
//   'bg-white',
//   'bg-pink-500',
//   'bg-orange-500'
// ];






  
// const changeBodyColor = (color) => {

//     colors.forEach(c => document.body.classList.remove(c));


//     document.body.classList.add(color); 
// }



//   return (
//     <div className="space-x-2 p-4">
//       <button   onClick={() => changeBodyColor('bg-red-500')}>RED</button>
//          <button   onClick={() => changeBodyColor('bg-blue-500')}>BLUE</button>
//             <button   onClick={() => changeBodyColor('bg-purple-500')}>PURPLE</button>
//                <button   onClick={() => changeBodyColor('bg-lime')}>GREY</button>
//                   <button   onClick={() => changeBodyColor('bg-white')}>WHITE</button>
//                      <button   onClick={() => changeBodyColor('bg-pink-500')}>PINK</button>
//                         <button   onClick={() => changeBodyColor('bg-orange-500')}>ORANGE</button>
//     </div>
//   )
// }


// export default App





//Done by Me 







// From Youtube Video ------->




import React from 'react'

import { useState } from 'react';

const App = () => { 


  const [Color, setColor  ] = useState("White");


  return (  
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: Color }}
    >
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0  px-2' >

        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={() => {setColor("#FB2C36")}} className=' outline-none px-4 py-2 rounded-full bg-red-500 text-white shadow-lg'>Red</button>
          <button onClick={() => {setColor("#7CCF00")}} className=' outline-none px-4 py-2 rounded-full bg-lime-500 text-white shadow-lg'>Lime</button>
          <button onClick={() => {setColor("#2B7FFF")}} className=' outline-none px-4 py-2 rounded-full bg-blue-500 text-white shadow-lg'>Blue</button>
          <button onClick={() => {setColor("#FE9A00")}} className=' outline-none px-4 py-2 rounded-full bg-amber-500 text-white shadow-lg'>Amber</button>
          <button onClick={() => {setColor("#FF6900")}} className=' outline-none px-4 py-2 rounded-full bg-orange-500 text-white shadow-lg'>orange</button>
          <button onClick={() => {setColor("#AD46FF")}} className=' outline-none px-4 py-2 rounded-full bg-purple-500 text-white shadow-lg'>Purple</button>
          <button onClick={() => {setColor("#D1D5DC")}} className=' outline-none px-4 py-2 rounded-full bg-gray-300  shadow-lg'>Grey</button>
        </div>
      </div>


    </div>
  )
}

export default App

