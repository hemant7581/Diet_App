import React , { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Date from "../../../asset/date.png"
import previous from "../../../asset/previous.png"
import steps_chart from "../../../asset/steps_chart.png"

import Sidebar from '../../ProPic/Sidebar';
import Nav from "../../Top_Nav/Nav"
import steps from "../../../asset/steps.png"

const StepsTracker = () => {
// sleep chart data
const data = [
  {
  
  },
  {
    name: 'Sun',
    pv: 6,
  },
  {
    name: 'Mon',
    pv: 3.9,
  },
  {
    name: 'Tue',
    pv: 4.1,
  },
  {
    name: 'Wed',
    pv: 6.3,
  },
  {
    name: 'Thu',
    pv: 7.9,
  },
  {
    name: 'Fri',
    pv: 6.2,
  },
  {
    name: 'Sat',
    pv: 5.9,
  },
  {
  
  },
   
];

const yTicks = [0, 2, 4, 6, 8]; // Your custom Y-axis values

  return (
    <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke '>
    {/* Nav */}
<Nav/>
{/* Nav */}

{/* sidebar */}
<Sidebar/>
{/* sidebar */}

      {/* main */}
      <img src={previous} alt="" className='absolute top-[178px] left-[436px]'/>
       <h1 className='absolute left-[512px] top-[170px] text-dark-green-color font-semibold text-17xl font-inherit'>Trackers</h1>
      <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
        <p className='absolute left-[512px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] '>Tuesday, July 25, 2023</p>

        {/* steps left section */}
        <section>
<p className='absolute left-[598px] top-[375px] text-black text-5xl leading-7 font-bold'>4280 steps</p>
<p className='absolute left-[600px] top-[408px] rounded-full bg-[#F08C0A] stroke-[#F7F5BD] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9'>Walked</span></p>
<p className='absolute left-[582px] top-[489px] text-black text-5xl leading-7 font-bold'>2720 steps</p>
<p className='absolute left-[566px] top-[522px] rounded-full bg-[#FBEAC9] stroke-[#F08C0A] stroke-1 w-[30px] h-[30px]'><span className='absolute text-black text-5xl font-normal leading-7 left-9 '>Remaining </span></p>
</section>
        {/* steps left section */}

{/* steps midlle section */}
<section>
  <img src={steps} width={96} height={88} alt=""className='absolute top-[290px] left-[1091px]'/>
  <img src={steps_chart} width={242} height={260} alt="" className='absolute  left-[841px] top-[317px] '/>
  <p className='absolute left-[900px] top-[386px] text-[#F08C0A] text-center font-montserrat font-semibold leading-[68px] text-[57px]'>7000</p>
  <p className='absolute top-[472px] left-[929px] text-[#F08C0A] text-[28px] font-montserrat font-medium leading-8 text-center'>Steps</p>
  <img src={steps} width={96} height={90} alt="" className='absolute  top-[547px] left-[789px]'/>
</section>


{/* steps midlle section */}


{/* sleep midlle section */}


{/* Steps Line Chart */}

  
<ResponsiveContainer width="50%" height="30%" className="absolute w-[476px] h-[288px] top-[735px] right-[321px]">
        <LineChart
          width={476}
          height={278}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" strokeWidth={1}/>
          <YAxis ticks={yTicks}  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#F08C0A" strokeWidth={2}  activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    





{/* Steps Line Chart */}
{/* reset button */}

<button className='absolute px-[73px] py-[28px] text-[#2C744D] font-sans font-semibold leading-7 rounded-[16px] border border-[#CFF7AA] right-[526px] text-5xl bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] top-[1129px]'>Reset</button>
{/* reset button */}
      {/* main */}
    </div>
  )
}

export default StepsTracker



// import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const StepTracker = () => {
//   const [stepValues, setStepValues] = useState([0, 2, 4, 6, 8]);

//   useEffect(() => {
//     // Initialize the chart on component mount
//     initChart();

//     // Cleanup function to destroy the chart on component unmount
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }
//     };
//   }, []);

//   const chartRef = React.createRef();

//   const initChart = () => {
//     const ctx = chartRef.current.getContext('2d');
//     const chart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
//         datasets: [{
//           label: 'Steps',
//           borderColor: 'blue',
//           data: stepValues,
//         }]
//       },
//       options: {
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Days'
//             }
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Steps'
//             },
//             beginAtZero: true,
//             stepSize: 2,
//           }
//         }
//       }
//     });
//   };

//   const resetChart = () => {
//     // Reset step values
//     setStepValues([0, 0, 0, 0, 0]);

//     // Destroy the existing chart and reinitialize
//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }
//     initChart();
//   };

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h1 className="text-2xl font-bold mb-4">Step Tracker</h1>
//       <canvas ref={chartRef} width="400" height="200" className="mb-4"></canvas>
//       <button onClick={resetChart} className="bg-blue-500 text-white py-2 px-4 rounded">Reset</button>
//     </div>
//   );
// };

// export default StepTracker;
