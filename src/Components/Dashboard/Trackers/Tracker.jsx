import React from 'react'
import Date from "../../../asset/date.png"
import Water_Tracker from './Sub_tracker/Water_Tracker'
import Steps_Tracker from './Sub_tracker/Steps_Tracker'
import Medicine_Tracker from './Sub_tracker/Medicine_Tracker'
import Nav from "../../Top_Nav/Nav"
import Sidebar from "../../ProPic/Sidebar"
import Sleep_Tracker from './Sub_tracker/Sleep_Tracker'

const Tracker = () => {
  return (
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke ' >
      {/* nav */}
      <Nav/>
      {/* nav */}
      {/* sidebar */}
      <Sidebar/>
      {/* sidebar */}
    {/* main section */}
      <h1 className='absolute left-[458px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>Trackers</h1>
      <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
        <p className='absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>
        {/* main section */}
        
        {/* trackers cards   */}
        <section className=''>

<Water_Tracker/>
<Steps_Tracker/>
<Medicine_Tracker/>
<Sleep_Tracker/>
        </section>

        {/* trackers cards   */}
    </div>
  )
}

export default Tracker 
