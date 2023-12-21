import React from 'react'
import Nutritional_Fundamentals from "../../asset/Nutritional_Fundamentals"
import ratings_full from "../../asset/ratings_full.png"
import time from "../../asset/time.png"
import { Link } from 'react-router-dom'


const NutritionFundamentals = () => {
  return (
    <section className='absolute w-[781px] h-[389px] ml-[100px]'>
      <img src={Nutritional_Fundamentals} height={280} width={280} alt=""/>
      <section>
        <h3 className='w-[455px] text-black text-4xl font-extrabold font-sans leading-[56.24px]'>Nutrition Fundamentals</h3>
        <img src={ratings_full} alt="" />
        <p className='text-black font-sans text-base font-normal leading-[156.227%]'>Learn the basics of nutrition and develop a solid foundation for a healthy diet.</p>
        <section>
            <img src={time} alt="" />
        <p className='text-[#747272] font-sans text-[18px] font-bold leading-[156.227%]'>4 weeks</p>
        </section>
        <p>Instructor:<span className='text-black open-sans text-base font-bold'>David Hemsworth</span></p>
        <p className='font-bold text-[20px] font-sans leading-[156.227%]'>Rs. 1,299.00:<span className='text-[#f00] open-sans text-base font-normal leading-[156.227%] line-through'>3,499.00</span></p>
      </section>
 <Link to="EnrollNow"><button className='text-dark-green-color px-[73px] py-7 font-sans rounded-2xl border border-solid border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]'>Enroll now</button></Link>  
    </section>
  )
}

export default NutritionFundamentals
