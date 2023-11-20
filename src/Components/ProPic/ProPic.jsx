import React from 'react'
import Sidebar from "./Sidebar"
import Nav from '../Top_Nav/Nav'
// import Appointment_track from '../Appointment/Appointment_track'
// import Appinment_overview2 from '../Appointment/Appointment_overview2'
import Order from ".././MyOrder/Order"
import PersonalDetails2 from '../Pesonal_details/PersonalDetails2'
import ChangePassword from '../Password/ChangePassword'

const ProPic = () => {
  return (
    <>
 <div className="  bg-whitesmoke overflow-hidden w-full h-[1286px]   text-left text-5xl  font-sans">
   <Nav/>
   <Sidebar  />
   <ChangePassword/>
</div>

  </>
  )
}

export default ProPic
