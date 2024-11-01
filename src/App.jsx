import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import PriceOptions from './Components/PriceOptions/PriceOptions';
import ReChart from './Components/ReChart/ReChart';
import FoodCal from './Components/FoodCal/FoodCal';

// import DaisyUINav from './Components/DaisyUINav/DaisyUINav'

function App() {
  

  return (
    <>

    {/* <DaisyUINav></DaisyUINav> */}

    <NavBar></NavBar>
    <h1 className=' mt-[4rem] font-extrabold text-[2rem] text-center text-pretty'> Price Options</h1>
    <PriceOptions></PriceOptions>
    <ReChart></ReChart>
    <FoodCal></FoodCal>
      
    </>
  )
}

export default App
