import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions';
// import DaisyUINav from './Components/DaisyUINav/DaisyUINav'

function App() {
  

  return (
    <>

    {/* <DaisyUINav></DaisyUINav> */}

    <NavBar></NavBar>
    <h1 className=' mt-[4rem] font-extrabold text-[2rem] text-center text-pretty'> Price Options</h1>
    <PriceOptions></PriceOptions>
    
      
    </>
  )
}

export default App
