import React from 'react'

const CourseLearn = () => {
  return (
    <div className='w-[502px] h-[559px] bg-[#EEF0FE]'>
       <h3
          className="m-0 absolute top-[50px] text-black accent-strokegreen-color left-[110px] text-13xl leading-[156.23%] font-bold font-sans text-center inline-block w-[282px]"
          id="what you learn"
        >
          What you’ll Learn
        </h3>
        <div className="absolute top-[160px] left-[51px] w-[368px] h-[74px]">
          <p
            className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[303px]"
            id="1"
          >
            Introduction to basic nutrition principles
          </p>
          <input
            className="cursor-pointer m-0 absolute top-[17px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
            id="intro_radio"
            type="radio"
          />
        </div>
        <div className="absolute top-[368px] left-[51px] w-[342px] h-[37px]">
          <p
            className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[277px]"
            id="3 build"
          >
            Building a balanced diet
          </p>
          <input
            className="cursor-pointer m-0 absolute top-[18px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
            id="3"
            type="radio"
          />
        </div>
        <div className="absolute top-[435px] left-[51px] w-[368px] h-[70px]">
          <p
            className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[303px] h-[70px]"
            id="4"
          >
            Portion control and mindful eating
          </p>
          <input
            className="cursor-pointer m-0 absolute top-[34px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
            id="4 portion"
            type="radio"
          />
        </div>
    </div>
  )
}

export default CourseLearn
