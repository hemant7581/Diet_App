import React from 'react'
import Nutri from "../../asset/Nutri.png"
import ratings_full from "../../asset/ratings_full.png"
import time from "../../asset/time.png"
import { Link } from 'react-router-dom'


const NutritionFundamentals = () => {
  return (
    <section className='absolute flex gap-[46px] w-[781px] h-[389px] mt-[260px] ml-[100px]'>
      <img src={Nutri} className="w-[280px] h-[280px] rounded-[10px]" alt=""/>
      <section>
        <h3 className='w-[455px] text-black text-4xl font-extrabold font-sans leading-[56.24px]'>Nutrition Fundamentals</h3>
        <img src={ratings_full} width={86} height={14} alt="" />
        <p className='text-black font-sans text-base font-normal mt-[18px] leading-[156.227%]'>Learn the basics of nutrition and develop a solid foundation for a healthy diet.</p>
        <section className='flex items-center mt-[13px] gap-2'>
            <img src={time} alt="" />
        <p className='text-[#747272] font-sans text-[18px] font-bold leading-[156.227%]'>4 weeks</p>
        </section>
        <p className='text-base font-sans font-normal text-black leading-[156.227%] mt-2'>Instructor:<span className='text-black open-sans text-base font-bold'>David Hemsworth</span></p>
        <p className='font-bold text-[20px] mt-[18px] font-sans leading-[156.227%]'>Rs. 1,299.00:<span className='text-[#f00] pl-3 open-sans text-xl font-normal leading-[156.227%] line-through'>3,499.00</span></p>
 <Link to="EnrollNow"><button className='text-dark-green-color mt-10 text-5xl  px-[73px] py-7 font-sans rounded-2xl border border-solid border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]'>Enroll now</button></Link>  
      </section>
    </section>
  )
}

export default NutritionFundamentals
