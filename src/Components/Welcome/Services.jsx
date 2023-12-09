import React from 'react'
import Meal_Plans from "../../asset/Meal_Plans.png"
import Courses from "../../asset/Courses.png"
import Goal_set from "../../asset/Goal_set.png"
import Consult_Nutritionalist from "../../asset/Consult_Nutritionalist.png"

const Services = () => {
  return (
    <div>
      {/* services */}
      <div className="absolute top-[4986px] left-[64px] w-[1384px] h-[894px] text-3xl text-gray-300">
        <div className="absolute top-[0px] left-[470px] w-[443px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[443px] h-[100px]">
            <div className="absolute top-[0px] left-[221px] rounded-sm bg-beige-100 w-[222px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 w-[222px] h-[100px]" />
          </div>
          <p className="absolute top-[18px] left-[calc(50%_-_183.5px)] tracking-[0.53em] leading-[133%] font-semibold font-sans">
            Services
          </p>
        </div>
        <div className="absolute top-[300px] left-[756px] shadow-[14px_10px_24px_rgba(0,_0,_0,_0.25)] w-[628px] h-[222px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-lg bg-whitesmoke-100 box-border w-[632px] h-[226px] border-[2px] border-solid border-strokegreen-color " />
          <p className="absolute top-[120px] left-[43px] leading-[150%] inline-block w-[541px] font-sans text-black">
            Schedule one-on-one consultations with our expert nutritionists for
            personalizes guidance and support.
          </p>
          <p className="absolute top-[24px] font-sans left-[178px] text-17xl leading-[156.23%] font-semibold text-center inline-block w-[398px] ">
            Consult a Nutritionist
          </p>
          <img
            className="absolute h-[29.73%] w-[11.15%] top-[9.91%] right-[81.21%] bottom-[60.36%] left-[7.64%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={Consult_Nutritionalist}
          />
        </div>
        <div className="absolute top-[672px] left-[0px] shadow-[14px_10px_24px_rgba(0,_0,_0,_0.25)] w-[628px] h-[222px]">
          <p className="absolute top-[120px] left-[43px] leading-[150%] inline-block w-[541px] font-sans text-black ">
            Enroll in comprehensive nutrition courses to deepen your knowledge 
            and expertise.
          </p>
          <p className="absolute top-[24px] left-[178px] text-17xl leading-[156.23%] font-semibold font-sans text-black">
            Courses
          </p>
          <img
            className="absolute h-[31.53%] w-[11.15%] top-[9.91%] right-[81.21%] bottom-[58.56%] left-[7.64%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={Courses}
          />
        </div>
        <div className="absolute top-[672px] left-[756px] shadow-[14px_10px_24px_rgba(0,_0,_0,_0.25)] w-[628px] h-[222px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-lg bg-whitesmoke-100 box-border w-[632px] h-[226px] border-[2px] border-solid border-strokegreen-color " />
          <p className="absolute top-[120px] left-[43px] leading-[150%] inline-block w-[541px] font-sans text-black">
            Set your health and fitness goals and track your progress along the
            way.
          </p>
          <p className="absolute top-[24px] left-[178px] text-17xl leading-[156.23%] font-semibold font-sans text-black">Goal Setting & Tracking</p>
          <img
            className="absolute h-[31.53%] w-[11.15%] top-[9.91%] right-[81.21%] bottom-[58.56%] left-[7.64%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={Goal_set}
          />
        </div>
        <div className="absolute top-[300px] left-[0px] shadow-[14px_10px_24px_rgba(0,_0,_0,_0.25)] w-[628px] h-[222px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-lg bg-whitesmoke-100 box-border w-[632px] h-[226px] border-[2px] border-solid border-strokegreen-color" />
          <p className="absolute top-[120px] left-[43px] leading-[150%] inline-block w-[541px] font-sans text-black">
            Access personalized meal plans tailored to your dietary preferences
            and goals.
          </p>
          <p className="absolute top-[24px] left-[178px] text-17xl leading-[156.23%] font-semibold font-sans text-black">
            Meal Plans
          </p>
          <img
            className="absolute h-[30.18%] w-[11.54%] top-[8.78%] right-[80.82%] bottom-[61.04%] left-[7.64%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={Meal_Plans}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
