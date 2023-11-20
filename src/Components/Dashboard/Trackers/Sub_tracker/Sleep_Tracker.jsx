import React from 'react'
import sleep_chart from "../../../../asset/sleep_chart.png"

const Water_Tracker = () => {
  return (
    <>
    {/* main */}
    <section className="absolute shadow-DashShadow bg-Lightpurple left-[1004px] top-[773px] font-sans h-[356px] w-[428px] rounded-[18px] overflow-hidden">
    <h2 className='absolute  text-purple left-[103px] top-[18px] font-sans text-13xl leading-7 font-semibold'>Sleep_Tracker</h2>
    <p className='absolute left-[137px] text-purple top-[89px] text-5xl font-sans font-normal leading-7 '>Slept : 5h22m</p>

{/* svg chart sleep */}
{/* <svg xmlns="http://www.w3.org/2000/svg" width="158" height="158" viewBox="0 0 158 158" fill="none">
  <circle cx="79" cy="79" r="73.1346" fill="#DFE5FA" stroke="url(#paint0_angular_1481_1779)" stroke-width="10.2692"/>
  <path d="M27.6973 124.856L20.7652 129.884L19.4874 128.459C17.8016 126.579 18.1132 123.654 20.1572 122.171C21.9244 120.889 24.3756 121.15 25.833 122.776L27.6973 124.856Z" fill="#2C48AB" stroke="#2C48AB" stroke-width="1.71154"/>
  <ellipse cx="22.0506" cy="124.901" rx="1.7" ry="1.69905" transform="rotate(-90 22.0506 124.901)" fill="white"/>
  <defs>
    <radialGradient id="paint0_angular_1481_1779" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79 79) rotate(90) scale(68)">
      <stop offset="0.136616" stop-color="#2C48AB"/>
      <stop offset="0.145424" stop-color="#2C48AB" stop-opacity="0.24"/>
      <stop offset="0.479616" stop-color="#2C48AB" stop-opacity="0.24"/>
      <stop offset="0.487289" stop-color="#2C48AB"/>
    </radialGradient>
  </defs>
</svg> */}


<img src={sleep_chart} alt="" className='absolute left-[146px] top-[169px]' />
<p className="absolute top-[202px] left-[210px] font-inherit text-[28px] text-purple leading-[33px] font-semibold">08</p>
<p className='absolute top-[244px] left-[195px] text-5xl font-inherit text-purple leading-7'>Hours</p>


{/* svg chart sleep */}

    </section>
    {/* main */}
    </>
  )
}

export default Water_Tracker
