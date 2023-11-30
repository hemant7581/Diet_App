import React from 'react'
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import Profile_picture from "../../asset/Profile_picture.png";
import Date from "../../asset/Date.png";
import { Link } from 'react-router-dom';
import Glass from "../../asset/Glass.png"
import MacrosRatio from "../../asset/MacrosRatio.png";
import Water_Tracker from "../../Components/Dashboard/Trackers/Sub_tracker/Water_Tracker"


const ProfileOverview = () => {

  const Water_TrackerStyle = {
    position: 'absolute',
    width: '250px',
    height: '208px',
    left: '458px',
    top: '701px',
  };
  return (
    <div className="relative w-full overflow-hidden h-[1286px] font-sans">
           {/* navbar */}
           <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

         {/* upper section */}
         <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
         Hi Yor, 
      </h1>
      <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p>
     <img src={Date} alt="date" height={40} width={40} className='absolute left-[1432px] top-[171px] w-[40px] h-[40px]' />
     {/* upper section */}

     {/* main section */}
     <main className='z-50'>
    {/* 1st section */}
    <section className='absolute w-[250px] h-[210px] left-[458px] top-[318px] bg-[#F5EEFF] font-inherit shadow-md rounded-xl '>
        <p className=" absolute left-[51px] text-pink font-inherit top-[12px] text-[18px] font-semibold leading-7">Body Mass Index</p>
        <p className="absolute left-[76px] text-center text-pink font-inherit top-[58px] text-5xl font-semibold leading-[19.2px]">18.6 kg/m</p>
        <p className="absolute left-[97px] text-center text-[#9877C8] font-inherit top-[111px] text-base font-normal leading-[19.2px]">Normal</p>
        <Link to="/"><button className="absolute text-[#9877C8] bg-[#E9DCFB] rounded-[9px] shadow-md-3 w-[100px] h-[30px] top-[168px] right-[76px] text-[14px] font-medium font-inherit leading-[19.2px]">Calculate</button></Link>
    </section>
    {/* 1st section */}

    {/* 2nd section */}
    <section className='absolute w-[250px] h-[210px] bg-[#E5FFFB] font-inherit shadow-md4 rounded-xl left-[732px] top-[318px] '>
        <p className=" absolute left-[51px] text-[#2E8873] font-inherit top-[12px] text-[18px] font-semibold leading-7">Total Body Water %</p>
        <p className="absolute left-[76px] text-center text-[#2E8873] font-inherit top-[58px] text-5xl font-semibold leading-[19.2px]">18.6 kg/m</p>
        <p className="absolute left-[97px] text-center text-[#2E8873] font-inherit top-[111px] text-base font-normal leading-[19.2px]">Normal</p>
        <Link to="/"><button className="absolute text-[#2E8873] bg-[#B1EEE4] rounded-[9px] shadow-md-4 w-[100px] h-[30px] top-[168px] right-[76px]  text-[14px] font-medium font-inherit leading-[19.2px]">Calculate</button></Link>
    </section>
    {/* 2nd section */}

    {/* 3rd section */}
    <section className='absolute w-[250px] h-[210px] bg-whitesmoke font-inherit shadow-md3 shadow-md3 rounded-xl left-[1006px] top-[317px] shadow-xl2 '>
    <p className=" absolute left-[51px] text-black font-inherit top-[13px] text-[18px] font-semibold leading-7">Daily Calorie intake</p>
        {/* daily calorie svg */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" className='absolute top-[76px] left-[75px]'>
  <circle cx="50" cy="50" r="47" stroke="url(#paint0_linear_1444_811)" stroke-width="6"/>
  <circle cx="50" cy="50" r="47" stroke="#EBA0A0" stroke-opacity="0.18" stroke-width="6"/>
  <path d="M47 97C47 95.3431 48.3431 94 50 94H51V100H50C48.3431 100 47 98.6569 47 97Z" fill="#E34A4A"/>
  <circle cx="49" cy="97" r="1" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_1444_811" x1="50.3817" y1="43.5114" x2="30.916" y2="43.5115" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E13737"/>
      <stop offset="0.0001" stop-color="white"/>
    </linearGradient>
  </defs>
</svg>

{/* text in it */}
<p className='text-[#D48181] text-[18px] font-montserrat font-semibold absolute left-[104px] top-[105px]'>1,641</p>
<p className='text-[#D48181] text-[18px] font-montserrat font-medium absolute left-[107px] top-[131px]'>kCal</p>
{/* text in it */}
        {/* daily calorie svg */}
    </section>
    {/* 3rd section */}

    {/* 4th section editable */}
    <section>
        <p className='absolute left-[1284px] w-[136px] leading-[21px] top-[330px] text-inherit text-black text-[18px] font-semibold'>Macros Ratios</p>
          {/* proteins */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[376px] font-semibold leading-[20.31px]'>Proteins - 40.2 g</p>
        <p className='w-[188px] h-[12px] absolute top-[400px] left-[1284px] rounded-[5px]  bg-pink'><span className='bg-[#F299EF] -z-50 rounded-[5px] w-[57.506px] h-[12px] absolute top-[400px] left-[1284px]'></span></p>
          {/* proteins */}
          {/* carbs */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[421px] font-semibold leading-[20.31px]'>Carbs - 13.42 g</p>
        <p className='w-[188px] h-[12px] absolute top-[445px] left-[1284px] rounded-[5px]  bg-[#E1EFFF]'><span className='bg-[#F299EF] -z-50 rounded-[5px] w-[57.506px] h-[12px] absolute top-[400px] left-[1284px]'></span></p>
          {/* carbs */}
          {/* fats */}
        <p className='absolute text-[13px] text-[#333] w-[116px] font-inter left-[1284px] top-[466px] font-semibold leading-[20.31px]'>Fats - 45.3 g</p>
        <p className='w-[188px] h-[12px] absolute top-[490px] left-[1284px] rounded-[5px]  bg-[#FEE8C8]'><span className='bg-[#F299EF] -z-50 rounded-[5px] w-[57.506px] h-[12px] absolute top-[400px] left-[1284px]'></span></p>
          {/* fats */}
    </section>
    {/* 4th section editable */}

    {/* mid section */}
    <section className="absolute shadow-DashShadow bg-gradient-to-b from-[#B6E0EE] to-[#6CD0F0] left-[458px] top-[701px] font-sans h-[208px] w-[250px] rounded-[18px] overflow-hidden">
      <h2 className='absolute  text-lightBlue left-[57px] top-[12px] font-sans text-[20px] leading-7 font-semibold'>Water Tracker</h2>
    <p className='absolute left-[84px] text-lightBlue top-[52px] text-[14px] font-sans font-normal leading-7 '>Drank : 1.6 L</p>
    
    {/* glass */}
    <img src={Glass} alt="" className='absolute left-[88px] top-[93px] w-[74px] h-[97px] z-10 '  /> 
    <p className='absolute text-[#2A7AA7] font-semibold leading-[33px] font-inherit text-[18px] top-[134px] left-[106px] z-20'>2.8L</p>
    {/* glass */}

    {/* water stroke */}
    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="118" viewBox="0 0 250 118" fill="none" className='absolute top-[90.84px] '>
  <path d="M0.5 106V3.41495C9.6718 1.71565 21.9364 0.64646 33.966 1.8723C46.184 3.11734 58.0905 6.72261 66.2924 14.3657C78.9245 26.1371 91.2037 37.4212 104.101 43.0612C110.563 45.8871 117.197 47.3052 124.123 46.6554C131.049 46.0056 138.23 43.291 145.79 37.9072C162.173 26.2404 181.982 22.9748 198.331 22.8379C214.682 22.7009 227.501 25.694 229.842 26.4742C234.346 27.9756 237.03 28.9563 239.712 30.8461C242.381 32.7262 245.07 35.5222 249.5 40.6849V106C249.5 112.351 244.351 117.5 238 117.5H12C5.64872 117.5 0.5 112.351 0.5 106Z" fill="url(#paint0_linear_1314_634)" stroke="#88C2E3"/>
  <defs>
    <linearGradient id="paint0_linear_1314_634" x1="125" y1="48.9999" x2="125" y2="118" gradientUnits="userSpaceOnUse">
      <stop stop-color="#B6E0EE"/>
      <stop offset="1" stop-color="#6CD0F0"/>
    </linearGradient>
  </defs>
</svg>
    {/* water stroke */}
    </section>
    {/* mid section */}
</main>


     {/* main section */}
      
    </div>
  )
}

export default ProfileOverview
