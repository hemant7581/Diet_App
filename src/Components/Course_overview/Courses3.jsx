import React, { useState } from "react";
import Nutritional_Fundamentals from "../../asset/Nutritional_Fundamentals.png";
import ratings_full from "../../asset/ratings_full.png";
import Outline from "../../asset/Outline.png"
import Nav from "../Top_Nav/Nav";
import time from "../../asset/time.png";
import CourseOutlineData from "./CourseOutlineData.json";
import { Link } from "react-router-dom";

const Courses3 = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const CourseOverview = () => {
    // Please sync "Courses" to the project
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
  }
return (
  <section className="w-[1512px] h-[2926px] overflow-hidden xl:w-full">
    <Nav />
    <h1
      className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit "
      id="stayfit learning"
    >
      <i className="font-semibold">StayFIT</i>
      <span className="font-semibold"> Learning</span>
    </h1>
    <section className="flex my-[264px] mt-[394px] ml-[100px] gap-12 items-center">
      <img
        src={Nutritional_Fundamentals}
        className="rounded-[10px] h-[280px] w-[280px]"
        alt=""
      />
      <section>
        <p className="w-[455px] text-black text-4xl  font-extrabold font-sans leading-[56.24px]">
          Nutritional Fundamentals
        </p>
        <img src={ratings_full} alt="" />
        <p className="text-black font-sans mt-[20px] font-normal text-13xl leading-[156.227%]">
          Learn the basics of nutrition and develop a solid foundation for a{" "}
          <br />
          healthy diet.
        </p>
        <section className="flex justify-evenly mt-[45px]">
          <p className=" text-5xl font-sans leading-[156.227%] font-normal">
            Rs. 1,299.00
            <span className="text-[#f00] pl-3 open-sans text-5xl  leading-[156.227%] line-through">
              3,499.00
            </span>
          </p>
          <p className="text-5xl font-normal leading-[156.227%]">
            Instructor:
            <span className="text-black text-5xl open-sans  font-bold">
              David Hemsworth
            </span>
          </p>
          <section className="flex gap-2 items-center">
            <img src={time} className="w-[23px] h-6 items-center" alt="" />
            <p className="text-black font-sans text-5xl  font-bold leading-[156.227%]">
              4weeks
            </p>
          </section>
        </section>
      </section>
    </section>

    {/* course outline   */}
    <h1 className="text-center text-[46px] leading-[156.227%] text-black font-sans font-bold">
      Course Outline
    </h1>
    {/* course outline   */}
    {/* <section className='w-[855px]  h-[97px]  bg-gradient-to-r  from-red-100 to-orange-50 rounded-2xl mx-auto mt-[200px] border border-black'>
{CourseOutlineData.Outline.map((Outline,id)=>{
<section key={id} >
<p className='5xl font-bold text-black leading-[156.227%]'>{Outline.Module}</p>
<img src={Outline.img} alt="" />
</section>
})}
</section> */}

    {CourseOutlineData.Outline.map((Outline) => (
      <section key={Outline.id}>
        <section className="w-[855px]  h-[97px] mx-auto rounded-2xl  flex items-center justify-between px-4 bg-gradient-to-r  from-red-100 to-orange-50 my-[42px] ">
          <h2 className="text-5xl font-bold text-black leading-[156.227%]">
            {Outline.Module}
          </h2>
          <img
            src={Outline.img}
            alt={`Outline ${Outline.id}`}
            onClick={CourseOverview}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </section>
        {showDetails && (
          // <section className="  rounded-[26px] w-[855px] mx-auto bg-[#F7FFF2] shadow-xl5  ">
          //   <ol className="list-decimal   h-[172px] mx-auto -mt-[30px]  rounded-[26px] bg-[#F7FFF2] shadow-xl5 flex flex-col col-gap-[10px] p-[30px] ">
          //     <li className="text-5xl font-sans font-normal leading-[180%] text-left ">Understanding the importance of nutrition in overall health</li>
          //     <li className="text-5xl font-sans font-normal leading-[180%] ">Exploring the essential nutrients and their roles in the body</li>
          //     <li className="text-5xl font-sans font-normal leading-[180%] ">Distinguishing between macronutrients and micronutrients</li>
          //     <li className="text-5xl font-sans font-normal leading-[180%] ">Identifying the key components of a balanced diet</li>
          //   </ol>
          // </section>

          <section className="rounded-[26px] w-[855px] mx-auto bg-[#F7FFF2] shadow-xl5">
            <ol className="list-decimal h-[172px] mx-auto -mt-[30px] rounded-[26px] bg-[#F7FFF2] shadow-xl5  p-[30px] ">
              <li className="text-xl font-sans font-normal leading-[180%] text-left ">
                Understanding the importance of nutrition in overall health
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Exploring the essential nutrients and their roles in the body
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Distinguishing between macronutrients and micronutrients
              </li>
              <li className="text-xl font-sans font-normal leading-[180%]">
                Identifying the key components of a balanced diet
              </li>
            </ol>
          </section>
        )}
      </section>
    ))}

    <Link to="/EnrollNow">
      <button className="px-[73px] py-7 text-5xl text-dark-green-color mt-[100px] justify-center border border-solid rounded-2xl border-[#CFF7AA] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] font-semibold mx-auto block">
        Enroll now
      </button>
    </Link>
  </section>
);
        }

export default Courses3;
