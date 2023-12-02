import React ,{useState} from "react"
import Date from "../../../asset/date.png"
import previous from "../../../asset/previous.png"
import water_meter from "../../../asset/water_meter.png"
import Sidebar from '../../ProPic/Sidebar';
import filled_water from "../../../asset/filled_water.png"
import unfilled_water from "../../../asset/unfilled_water.png"
import Nav from "../../Top_Nav/Nav"

const WaterTracker=()=>{
  const [modalOpen, setModalOpen] = useState(false);
  return(
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke '>
    {/* Nav */}
    <Nav/>
{/* Nav */}

{/* sidebar */}
<Sidebar/>
{/* sidebar */}

     {/* main */}
     <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/>
       <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>Water Tracker</h1>
      <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
        <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

        {/* steps left section */}
        <section>
<p className='absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold'>1.6 litres</p>
<p className='absolute left-[600px] top-[408px] rounded-full bg-[#3CD5F0] stroke-[#E3F5F4] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9'>Drank</span></p>
<p className='absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold'>1.2 litres</p>
<p className='absolute left-[566px] top-[522px] rounded-full bg-[#E3F5F4] border-[#3CD5F0] border w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9 '>Remaining </span></p>

{/* water meter */}
<img src={water_meter} alt=""  className="absolute w-[260px] h-[260px] left-[823px] top-[317px] "/>

{/* water meter */}

{/* water cup iteration */}

{/* section 1 filled water */}
<section style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 96px)', gap: '34px', position: 'absolute', left: '580px', top: '735px' }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <img
          key={index}
          src={filled_water}
          alt={`water-cup-${index + 1}`}
          style={{ width: '96px', height: '118px' }}
          />
          ))}
          {/* section 1 filled water */}
          </section>

      {/*section to display empty glass with plus  */}

<section style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 96px)', gap: '34px', position: 'absolute', left: '580px', top: '887px' }}>
  {Array.from({ length: 6 }).map((_, index) => (
    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={unfilled_water}
        alt={`water-cup-${index + 1}`}
        style={{ width: '96px', height: '118px' }}
      />
      <span style={{ marginTop: '-80px', fontSize: '24px',color:"#1A92A7", fontWeight: 'bold' }}>+</span>
    </div>
  ))}
</section>

          {/* section 2 unfilled_water */}
     



{/* water cup iteration */}


        <button className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] left-[847px]  text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1101px]'>Reset</button>
</section>
        {/* steps left section */}


        {/* main */}

    </div>
  )
}
export default WaterTracker


// import React, { useState, useEffect } from 'react';

// function WaterTracker() {
//   const [numCups, setNumCups] = useState(0);
//   const [goalCups, setGoalCups] = useState(8);

//   useEffect(() => {
//     const storedGoal = localStorage.getItem('waterGoal');
//     if (storedGoal) {
//       setGoalCups(parseInt(storedGoal));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('waterGoal', goalCups);
//   }, [goalCups]);

//   function handleAddCup() {
//     setNumCups(prev => prev + 1);
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Water Tracker</h1>

//       <div className="bg-blue-500 text-white p-4 rounded-lg">
//         <h2 className="text-3xl">{numCups}/{goalCups}</h2>
//         <div className="w-full h-4 bg-gray-200 rounded-full mt-4">
//           <div 
//             className="h-full text-center text-xs text-white bg-blue-400 rounded-full"
//             style={{width: `${(numCups/goalCups)*100}%`}}
//           >
//           </div>
//         </div>

//         <button
//           className="bg-white text-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-600 hover:text-white"
//           onClick={handleAddCup} 
//         >
//           Add Cup
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WaterTracker;