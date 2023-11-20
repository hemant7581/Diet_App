import React from 'react'
import Sidebar from ".././ProPic/Sidebar"
import Nav from ".././Top_Nav/Nav"
import OrderOverview from "./OrderOverview"

const MyOrder = () => {
  return (
    <div className='relative h-[1286px] w-full overflow-hidden text-5xl font-sans '>
      {/* nav */}
      <Nav/>
      {/* nav */}
      {/* sidebar */}
      <Sidebar/>
      {/* sidebar */}

      {/* Order */}
      <OrderOverview className="z-10"/>
      {/* Order */}
    </div>
  )
}

export default MyOrder
