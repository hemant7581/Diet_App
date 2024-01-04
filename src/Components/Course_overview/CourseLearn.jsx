import React from 'react'

const CourseLearn = () => {
  return (
    <section className='absolute w-[502px] h-[559px] bg-[#EEF0FE] left-[910px] mt-[260px]'>
       <h3
          className="m-0 absolute mt-[50px] text-black accent-strokegreen-color left-[110px] text-13xl leading-[156.23%] font-bold font-sans text-center inline-block w-[282px]"
          id="what you learn"
        >
          What you’ll Learn
        </h3>
        <section className="absolute flex items-center mt-[160px] ml-[51px] w-[368px] h-[74px]">
          <p
            className="m-0 absolute  text-5xl left-[65px] leading-[156%] inline-block w-[303px]"
            id="1"
          >
            Introduction to basic nutrition principles
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
          />
        </section>
        <section className="absolute flex items-center mt-[264px] ml-[51px] w-[368px] h-[74px]">
          <p
            className="m-0 absolute  text-5xl left-[65px] leading-[156%] inline-block w-[349px]"
            id="2"
          >
           Understanding macronutrients and micronutrients
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="intro_radio"
            type="radio"
          />
        </section>
        <section className="absolute flex items-center mt-[368px] ml-[51px] w-[342px] h-[37px]">
          <p
            className="m-0 absolute top-[0px] text-5xl left-[65px] leading-[156%] inline-block w-[277px]"
            id="3 build"
          >
            Building a balanced diet
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="3"
            type="radio"
          />
        </section>
        <section className="absolute flex items-center mt-[435px] ml-[51px] w-[368px] h-[70px]">
          <p
            className="m-0 absolute top-[0px] text-5xl left-[65px] leading-[156%] inline-block w-[303px] h-[70px]"
            id="4"
          >
            Portion control and mindful eating
          </p>
          <input
            className="cursor-pointer w-[24px] h-[24px] accent-[#4A5083] border-[#4A5083]"
            id="4 portion"
            type="radio"
          />
        </section>
    </section>
  )
}

export default CourseLearn
