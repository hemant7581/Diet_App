// import React, { PureComponent } from 'react';
import React from "react"
import steps_chart from "../../../../asset/steps_chart.png"
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const Steps_Tracker = () => {
  // const data = [

  //   {
  //     uv: 6.67,
  //     pv: 4800,
  //     fill: '#ffc658',
  //   },
  // ];
  
  // const style = {
  //   top: '50%',
  //   right: 0,
  //   transform: 'translate(0, -50%)',
  //   lineHeight: '24px',
  // };
  
  return (
    <>
    {/* main */}
    <section className="absolute shadow-DashShadow bg-yellow left-[1004px] top-[317px] font-sans h-[356px] w-[428px] rounded-[18px] overflow-hidden">
    <h2 className='absolute  text-sand left-[103px] top-[18px] font-sans text-13xl leading-7 font-semibold'>Steps Tracker</h2>
    <p className='absolute left-[103px] text-sans top-[89px] text-sand text-5xl font-sans font-normal leading-7 '>Walked : 4200 steps</p>
    
    {/* radial chart */}
    {/* <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer> */}
    {/* radial chart */}
    

    {/* SVG chart radial */}

    {/* <svg xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158" fill="none" className="absolute  left-[146px] top-[169px]">
  <circle cx="79" cy="79" r="73.1346" fill="#FFF4E8" stroke="url(#paint0_angular_1481_427)" stroke-width="10.2692"/>
  <path d="M27.6973 124.856L20.7652 129.884L19.4874 128.459C17.8016 126.579 18.1132 123.654 20.1572 122.171C21.9244 120.889 24.3756 121.15 25.833 122.776L27.6973 124.856Z" fill="#F18404" stroke="#F18404" stroke-width="1.71154"/>
  <ellipse cx="22.0506" cy="124.901" rx="1.7" ry="1.69905" transform="rotate(-90 22.0506 124.901)" fill="white"/>
  <defs>
    <radialGradient id="paint0_angular_1481_427" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79 79) rotate(90) scale(68)">
      <stop offset="0.136616" stop-color="#F18404"/>
      <stop offset="0.140324" stop-color="#F18404" stop-opacity="0.08%"/>
      <stop offset="0.479616" stop-color="#F18404" stop-opacity="0.08%"/>
      <stop offset="0.487289" stop-color="#F18404"/>
    </radialGradient>
  </defs>

</svg> */}
  {/* steps total */}

<img src={steps_chart} alt="" className="absolute  left-[146px] top-[169px]" />


  <p className="absolute left-[195px] top-[205px] text-[28px] text-sand font-inherit font-semibold ">7000</p>
  <p className="absolute left-[195px] top-[244px] text-sand text-5xl font-inherit font-semibold ">Steps</p>
  {/* steps total */}

    {/* SVG chart radial */}
    </section>
    {/* main */}
    </>
  )
}

export default Steps_Tracker
