import React from "react";
import Nav from "../Top_Nav/Nav"
import Footer from "../Footer/Footer";
import Search from "../../asset/Search.png"
import CourceData from "./CourceData.json"
import Testimonial from "../Welcome/Testimonial";
import Faq from "../Welcome/Faq";
import NutritionFundamentals from "./NutritionFundamentals";
import CourseLearn from "./CourseLearn";
import ratings_full from "../../asset/ratings_full.png"; 
import blue_inverted from "../../asset/blue_inverted.png";
import Arrow from "../../asset/Arrow.png";
import jade from "../../asset/jade.png"
import sadie from "../../asset/sadie.png"
import course from "../../asset/course.png"

const COURCES = () => {
  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[5859px] overflow-hidden text-left text-5xs text-gray-200 font-sans xl-w-full">
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="header"
      >
        <Nav />
      </header>

      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit "
        id="stayfit learning"
      >
        <i className="font-semibold">StayFIT</i>
        <span className="font-semibold"> Learning</span>
      </h1>
      {/* input */}
      <section className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke outline-none pl-28 font-medium  text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[328px] placeholder:italic  "
          name="text"
          placeholder="Search Plan (low-carb, gluten-free, etc.) "
          type="text"
        />
        <section className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={Search}
        />
      </section>
      <img
        src={course}
        alt=""
        className="w-[60px] h-[60px] absolute top-[360px] right-[40px] "
      />

      {/* input */}
      <h1 className="text-center font-inherit text-[46px] text-black leading-[156.226%] font-semibold my-[621px]">
        Featured Courses
      </h1>

      {/* featured courses */}
      <section className="flex justify-evenly">
        {CourceData.course.map((course) => (
          <section className="w-[330px] h-[480px] rounded-[20px] border-2 border-solid border-[#999] -mt-[530px]">
            <img
              src={course.img}
              className="w-[320px] h-[200px] object-contain"
              alt="img"
            />
            <section className="flex justify-between">
              <p className="text-black w-[165px] text-[26px] font-sans font-bold leading-[156.227%] ml-[19px] mt-[13.86px]">
                {course.Course_Name}
              </p>
              <section>
                <img
                  src={course.star}
                  className="h-[20px] w-[20px] mr-7 mt-[20.86px]"
                  alt="star"
                />
                <p className="w-[18px] h-[15px] text-[12px] ml-1 text-black font-sans font-normal leading-[156.227%]">
                  {course.rating}
                </p>
              </section>
            </section>
            <p className="text-5xl font-sans text-black leading-[156.227%] mt-[30px] font-semibold ml-[19px] ">
              {course.Instructor}
            </p>
            <section className="flex items-center gap-3 ml-5">
              <img
                src={course.Time_img}
                className="w-[42px] h-[42px] object-contain mt-[51px]"
                alt="time"
              />
              <p className="font-sans text-[#747272] text-xl font-semibold mt-[50.01px] leading-[156.227%] ">
                {course.Duration}
              </p>
            </section>
          </section>
        ))}
      </section>
      {/* featured courses */}

      <h1 className="text-center font-inherit text-[46px] text-black leading-[156.226%] font-semibold my-[200px]">
        Explore Courses
      </h1>
      {/* Explore courses */}
      <section className="flex justify-evenly">
        {CourceData.Explore.map((Explore) => (
          <section className="w-[190px] h-[294px] rounded-[20px] border-2 border-solid border-[#999] -my-[100px] hover:scale-150 transition-transform duration-300 ease ">
            <img src={Explore.img} className="object-contain" alt="img" />
            <section className="flex  items-center justify-between">
              <h3 className="text-base text-black font-bold leading-[156.227%] ml-[14px] mt-3 font-sans">
                {Explore.Course_Name}
              </h3>
              <section className="mr-2 mt-[18px]">
                <img
                  src={Explore.star}
                  className="w-[12px] h-[12px] "
                  alt="star "
                />
                <p className="text-black font-sans ">{Explore.rating}</p>
              </section>
            </section>
            <p className="text-[8px] font-normal leading-[156.227%] text-black w-[141px] mt-3 ml-[14px] font-sans">
              {Explore.Info}
            </p>
            <section className="flex items-center gap-[10px] mt-2 ml-[14px]">
              <img
                src={Explore.Time_img}
                className="w-4 h-4 object-fit"
                alt=""
              />
              <p className="flex item-center text-2 font-normal text-[#747272] font-sans leading-[]156.227%">
                {Explore.Duration}
              </p>
            </section>
            <section className="flex justify-center gap-2 text-[8px] font-bold font-sans leading-[156.227%] mt-[10px]">
              <p className="text-[#7C5185] font-sans text-[8px] font-bold leading-[156.227%]">
                {Explore.Cost}
              </p>
              <p className="text-red-700 line-through">{Explore.Actual_Cost}</p>
            </section>
          </section>
        ))}
      </section>

      {/* Explore courses */}
      <section>
        {/* nutritient fundamental */}
        <NutritionFundamentals />
        <CourseLearn />
        {/* nutritient fundamental */}
      </section>
      {/* feedback */}
      <section className="w-[1372px] h-[647px] mt-[200px]  mx-auto ">
        <h3 className="text-center text-dark font-sans mt-[1000px]  text-[46px] font-semibold leading-[133%]">
          Hear from our Students who took our courses!
          </h3>
          <section >
        <section className="absolute w-[536px] h-[412px] mt-[120px] z-20 ml-[50px]">
          <img src={sadie} alt="" className=" -ml-16" />
          <section className=" border border-solid border-grey-color w-[471px] h-[346px] rounded-[36px] -mt-[155px]  ">
            <h5 className="absolute font-sans text-black text-9xl leading-[133%] ml-[223px] mt-[34px] font-semibold">
              Saddie Warren
            </h5>
            <img
              src={ratings_full}
              alt=""
              className="absolute w-[86px] h-[14px] ml-[223px] mt-[95px]"
            />
            <img
              src={blue_inverted}
              alt=""
              className="absolute ml-4 mt-[172px] w-6 h-6 "
            />
            <p className="absolute w-[397px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-[52px] mt-[190px]">
              The Nutrition Fundamentals course exceeded my expectations! It
              covered all the essential topics in a comprehensive yet
              easy-to-understand manner. Highly recommended!
            </p>
          </section>
        </section>

        <section className="absolute w-[536px] h-[412px] mt-[120px] z-20 ml-[826px]">
          <img src={jade} alt="" className=" -ml-16" />
          <section className=" border border-solid border-grey-color w-[471px] h-[346px] rounded-[36px] -mt-[155px]  ">
            <h5 className="absolute font-sans text-black text-9xl leading-[133%] ml-[223px] mt-[34px] font-semibold">
            Jade Williams
            </h5>
            <img
              src={ratings_full}
              alt=""
              className="absolute w-[86px] h-[14px] ml-[223px] mt-[95px]"
            />
            <img
              src={blue_inverted}
              alt=""
              className="absolute ml-4 mt-[172px] w-6 h-6 "
            />
            <p className="absolute w-[395px] font-sans text-xl leading-6 tracking-[0.6px] font-normal ml-[52px] mt-[190px]">
            The course materials were top-notch and the interactive exercises made learning enjoyable. I'm grateful for the valuable insights I gained from this course.
            </p>
          </section>
        </section>
        </section>
        <img src={Arrow} alt="" className="mt-[338px] ml-[1310px] w-[64px] h-[64px]" />
      </section>
      {/* <Testimonial/> */}
      {/* feedback */}

      {/* why stayfit learning  */}
       <section className="absolute top-[3717px] left-[calc(50%_-_609px)] w-[1217px] h-[665px] text-5xl">
        <section className="absolute top-[0px] left-[calc(50%_-_230.5px)] text-27xl leading-[156.23%]">
          <span className="font-semibold text-[46px]">{`Why `}</span>
          <i className="font-semibold text-[46px]">stayFIT</i>
          <span className="font-semibold text-[46px]"> Leaning?</span>

          
        </section>
      </section>
      {/* why stayfit learning

      {/* faq */}
      <h3 className="text-center text-dark font-sans  text-[46px] font-semibold leading-[133%]">
        {/* Frequently Asked Questions */}
      </h3>
      <Faq />
      {/* faq */}

      {/* why stayfit learning */}
      {/* Footer */}

      {/* <Footer /> */}
      {/* Footer */}
    </div>
  );
};

export default COURCES;



// import { useState, useCallback } from "react";

// const COURSES = () => {
//   const [rectangleInputValue, setRectangleInputValue] = useState("");

//   const onGroupContainerClick = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

//   const onVectorImageClick = useCallback(() => {
//     // Please sync "MY COURSE" to the project
//   }, []);

//   const onWhoWeAre1Click = useCallback(() => {
//     // Please sync "ABOUT US" to the project
//   }, []);

//   const onFAQsTextClick = useCallback(() => {
//     // Please sync "FAQs" to the project
//   }, []);

//   const onStoreText1Click = useCallback(() => {
//     // Please sync "STORE" to the project
//   }, []);

//   const onTermsOfUseClick = useCallback(() => {
//     // Please sync "terms of services" to the project
//   }, []);

//   const onPrivacyPolicyTextClick = useCallback(() => {
//     // Please sync "PRIVACY POLICY" to the project
//   }, []);

//   const onContactUsTextClick = useCallback(() => {
//     // Please sync "CONTACTUS" to the project
//   }, []);

//   return (
//     <div className="relative bg-whitesmoke w-full h-[5859px] overflow-hidden text-left text-5xs text-gray-200 font-open-sans">
//       <h1
//         className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color whitespace-pre-wrap font-inherit"
//         id="stayfit learning"
//       >
//         <i className="font-semibold">StayFIT</i>
//         <span className="font-semibold"> Learning</span>
//       </h1>
//       <input
//         className="[outline:none] bg-whitesmoke absolute top-[355px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color"
//         placeholder="Search Plan (low-carb,gluten-free,etc)"
//         type="text"
//         value={rectangleInputValue}
//         onChange={(event) => setRectangleInputValue(event.target.value)}
//       />
//       <i className="absolute top-[384px] left-[378px] text-lg tracking-[0.03em] leading-[120.23%] font-medium font-body-main text-gray-100">{`Search Plan (low-carb, gluten-free, etc.) `}</i>
//       <div className="absolute top-[355px] left-[267px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
//       <img
//         className="absolute h-[0.51%] w-[1.98%] top-[6.49%] right-[78.44%] bottom-[93%] left-[19.58%] max-w-full overflow-hidden max-h-full object-cover"
//         alt="search"
//         src="/search@2x.png"
//       />
//       <header
//         className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
//         id="header"
//       >
//         <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
//         <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
//         <div
//           className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.2px] text-black font-roboto-flex"
//           onClick={onGroupContainerClick}
//         >
//           <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
//             <i>stay</i>
//             <i className="text-[52.8px] font-body-main">FIT</i>
//           </div>
//           <img
//             className="absolute top-[65.65px] left-[5.87px] w-[126.13px] h-[28.35px] object-cover"
//             alt=""
//             src="/vector-5@2x.png"
//           />
//           <img
//             className="absolute top-[56.66px] left-[108.96px] w-[10.28px] h-[18.73px] object-contain"
//             alt=""
//             src="/vector-6@2x.png"
//           />
//           <img
//             className="absolute top-[69.07px] left-[110px] w-[20.93px] h-[17.63px] object-contain"
//             alt=""
//             src="/vector-7@2x.png"
//           />
//         </div>
//         <div className="absolute top-[47px] left-[calc(50%_+_580px)] leading-[156.23%] font-semibold">
//           My Account
//         </div>
//         <div className="absolute top-[47px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
//           <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
//             <div className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold">
//               Store
//             </div>
//             <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold">
//               Home
//             </div>
//             <div className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold">
//               Who we are
//             </div>
//             <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
//               <div className="absolute top-[0%] left-[0%] leading-[156.23%] font-semibold">
//                 Our Services
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <h2
//         className="m-0 absolute top-[1426px] left-[calc(50%_-_178px)] text-27xl leading-[156.23%] font-semibold font-inherit"
//         id="explore-courses"
//       >
//         Explore Courses
//       </h2>
//       <div className="absolute top-[4582px] left-[calc(50%_-_312px)] text-27xl leading-[156.23%] font-semibold">
//         Frequently Asked Questions
//       </div>
//       <div className="absolute top-[1618px] left-[631px] shadow-[8px_8px_26px_rgba(0,_0,_0,_0.3)] flex flex-row items-start justify-start gap-[10px] text-base font-open-sans-hebrew">
//         <img
//           className="relative rounded-3xs w-[250px] h-[393px] object-cover z-[0]"
//           alt=""
//           src="/rectangle-362@2x.png"
//         />
//         <img
//           className="absolute my-0 mx-[!important] top-[186px] right-[0px] w-[250px] h-[206px] object-cover z-[1]"
//           alt=""
//           src="/rectangle-367@2x.png"
//         />
//         <b className="absolute my-0 mx-[!important] top-[198px] right-[41px] leading-[156.23%] inline-block w-[195px] shrink-0 z-[2]">
//           Nutrition Fundamentals
//         </b>
//         <div className="absolute my-0 mx-[!important] top-[235px] right-[50px] text-xs leading-[156.23%] inline-block w-[186px] shrink-0 z-[3]">
//           Learn the basics of nutrition and develop a solid foundation for a
//           healthy diet.
//         </div>
//         <div className="absolute my-0 mx-[!important] top-[337px] right-[41px] leading-[156.23%] whitespace-pre-wrap text-center z-[4] text-darkslateblue-200">
//           <b>{`Rs. 1,299.00   `}</b>
//           <span className="[text-decoration:line-through] text-red">
//             3,499.00
//           </span>
//         </div>
//       </div>
//       <img
//         className="absolute top-[1663px] left-[calc(50%_+_173px)] rounded-3xs w-[190px] h-[294px] object-cover"
//         alt=""
//         src="/rectangle-363@2x.png"
//       />
//       <img
//         className="absolute top-[1663px] left-[calc(50%_+_425px)] rounded-3xs w-[190px] h-[294px] object-cover"
//         alt=""
//         src="/rectangle-366@2x.png"
//       />
//       <img
//         className="absolute top-[1663px] left-[calc(50%_-_363px)] rounded-3xs w-[190px] h-[294px] object-cover"
//         alt=""
//         src="/rectangle-364@2x.png"
//       />
//       <img
//         className="absolute top-[1797px] left-[calc(50%_-_363px)] w-[190px] h-40 object-cover"
//         alt=""
//         src="/rectangle-368@2x.png"
//       />
//       <img
//         className="absolute top-[1797px] left-[calc(50%_+_173px)] w-[190px] h-40 object-cover"
//         alt=""
//         src="/rectangle-370@2x.png"
//       />
//       <img
//         className="absolute top-[1797px] left-[calc(50%_+_425px)] w-[190px] h-40 object-cover"
//         alt=""
//         src="/rectangle-371@2x.png"
//       />
//       <img
//         className="absolute top-[1663px] left-[calc(50%_-_615px)] rounded-3xs w-[190px] h-[294px] object-cover"
//         alt=""
//         src="/rectangle-365@2x.png"
//       />
//       <div className="absolute top-[1921px] left-[984px] leading-[156.23%] whitespace-pre-wrap text-center text-red font-open-sans-hebrew">
//         <b>
//           <span className="text-darkslateblue-100">Rs. 899.00</span>
//           <span className="text-gray-200">{`   `}</span>
//           <span className="[text-decoration:line-through]">1,299.00</span>
//         </b>
//         <span className="[text-decoration:line-through]">
//           <span>{` `}</span>
//         </span>
//       </div>
//       <div className="absolute top-[1921px] left-[1237px] leading-[156.23%] whitespace-pre-wrap text-center text-red font-open-sans-hebrew">
//         <b>
//           <span className="text-darkslateblue-100">Rs. 899.00</span>
//           <span className="text-gray-200">{`   `}</span>
//           <span className="[text-decoration:line-through]">1,299.00</span>
//         </b>
//         <span className="[text-decoration:line-through]">
//           <span>{` `}</span>
//         </span>
//       </div>
//       <div className="absolute top-[1921px] left-[449px] leading-[156.23%] whitespace-pre-wrap text-center text-red font-open-sans-hebrew">
//         <b>
//           <span className="text-darkslateblue-100">Rs. 899.00</span>
//           <span className="text-gray-200">{`   `}</span>
//           <span className="[text-decoration:line-through]">1,299.00</span>
//         </b>
//         <span className="[text-decoration:line-through]">
//           <span>{` `}</span>
//         </span>
//       </div>
//       <img
//         className="absolute top-[1778px] left-[1418px] w-16 h-16 object-cover"
//         alt="Left-arrow"
//         src="/arrow@2x.png"
//       />
//       <img
//         className="absolute top-[1778px] left-[30px] w-16 h-16 object-cover"
//         alt="left-arrow"
//         src="/arrow1@2x.png"
//       />
//       <b className="absolute top-[1809px] left-[407px] text-sm leading-[156.23%] inline-block font-open-sans-hebrew w-[103px]">
//         Meal Planning
//       </b>
//       <b className="absolute top-[1815px] left-[943px] text-sm leading-[156.23%] font-open-sans-hebrew">
//         Mindful Eating
//       </b>
//       <b className="absolute top-[1815px] left-[1195px] text-sm leading-[156.23%] font-open-sans-hebrew">
//         Sports Nutrition
//       </b>
//       <img
//         className="absolute top-[1797px] left-[calc(50%_-_615px)] w-[190px] h-40 object-cover"
//         alt=""
//         src="/rectangle-369@2x.png"
//       />
//       <b className="absolute top-[1809px] left-[155px] text-sm leading-[156.23%] font-open-sans-hebrew">
//         Digestive Health
//       </b>
//       <div className="absolute top-[1843px] left-[407px] leading-[156.23%] font-open-sans-hebrew inline-block w-[146px]">
//         Master the art of meal planning and preparation to save time, eat well,
//         and stay on track with your nutrition goals.
//       </div>
//       <div className="absolute top-[1843px] left-[155px] leading-[156.23%] font-open-sans-hebrew inline-block w-[141px]">
//         Enhance your gut health, manage digestive issues, and promote overall
//         well-being through proper nutrition and lifestyle choices.
//       </div>
//       <div className="absolute top-[1849px] left-[943px] leading-[156.23%] font-open-sans-hebrew inline-block w-[148px]">
//         Avoidance of gluten-containing foods for individuals with gluten
//         sensitivities or celiac disease.
//       </div>
//       <div className="absolute top-[1849px] left-[1195px] leading-[156.23%] font-open-sans-hebrew inline-block w-36">
//         Emphasis on low-fat foods for heart health and weight management.
//       </div>
//       <div className="absolute top-[1921px] left-[197px] leading-[156.23%] whitespace-pre-wrap text-center text-red font-open-sans-hebrew">
//         <b>
//           <span className="text-darkslateblue-100">Rs. 899.00</span>
//           <span className="text-gray-200">{`   `}</span>
//           <span className="[text-decoration:line-through]">1,299.00</span>
//         </b>
//         <span className="[text-decoration:line-through]">
//           <span>{` `}</span>
//         </span>
//       </div>
//       <div className="absolute top-[1918px] left-[645px] w-[70px] h-[19px] text-xs text-dimgray-100 font-open-sans-hebrew">
//         <div className="absolute top-[0px] left-[17.76px] leading-[156.23%] inline-block w-[52.24px]">
//           4 weeks
//         </div>
//         <img
//           className="absolute h-[63.16%] w-[17.56%] top-[21.05%] right-[82.44%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt=""
//           src="/group@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1893px] left-[943px] w-[49px] h-3 text-dimgray-100 font-open-sans-hebrew">
//         <div className="absolute top-[0px] left-[18px] leading-[156.23%] inline-block w-[31px]">
//           4 weeks
//         </div>
//         <img
//           className="absolute h-[58.33%] w-[16.33%] top-[25%] right-[83.67%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt=""
//           src="/group@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1887px] left-[407px] w-[49px] h-3 text-dimgray-100 font-open-sans-hebrew">
//         <div className="absolute top-[0px] left-[18px] leading-[156.23%] inline-block w-[31px]">
//           4 weeks
//         </div>
//         <img
//           className="absolute h-[58.33%] w-[16.33%] top-[25%] right-[83.67%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt=""
//           src="/group@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1899px] left-[155px] w-[49px] h-3 text-dimgray-100 font-open-sans-hebrew">
//         <div className="absolute top-[0px] left-[18px] leading-[156.23%] inline-block w-[31px]">
//           4 weeks
//         </div>
//         <img
//           className="absolute h-[58.33%] w-[16.33%] top-[25%] right-[83.67%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt=""
//           src="/group@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1881px] left-[1195px] w-[49px] h-3 text-dimgray-100 font-open-sans-hebrew">
//         <div className="absolute top-[0px] left-[18px] leading-[156.23%] inline-block w-[31px]">
//           4 weeks
//         </div>
//         <img
//           className="absolute h-[58.33%] w-[16.33%] top-[25%] right-[83.67%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt=""
//           src="/group@2x.png"
//         />
//       </div>
//       <div className="absolute top-[1822px] left-[853px] w-5 h-[37px] text-xs">
//         <img
//           className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
//           alt=""
//           src="/star@2x.png"
//         />
//         <div className="absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]">
//           5.0
//         </div>
//       </div>
//       <div className="absolute top-[1815px] left-[1098px] w-3 h-[26px]">
//         <img
//           className="absolute top-[0px] left-[0px] w-3 h-3 object-cover"
//           alt=""
//           src="/star@2x.png"
//         />
//         <div className="absolute top-[14px] left-[0px] leading-[156.23%]">
//           5.0
//         </div>
//       </div>
//       <div className="absolute top-[1815px] left-[563px] w-3 h-[26px]">
//         <img
//           className="absolute top-[0px] left-[0px] w-3 h-3 object-cover"
//           alt=""
//           src="/star@2x.png"
//         />
//         <div className="absolute top-[14px] left-[0px] leading-[156.23%]">
//           5.0
//         </div>
//       </div>
//       <div className="absolute top-[1815px] left-[311px] w-3 h-[26px]">
//         <img
//           className="absolute top-[0px] left-[0px] w-3 h-3 object-cover"
//           alt=""
//           src="/star@2x.png"
//         />
//         <div className="absolute top-[14px] left-[0px] leading-[156.23%]">
//           5.0
//         </div>
//       </div>
//       <div className="absolute top-[1815px] left-[1351px] w-3 h-[26px]">
//         <img
//           className="absolute top-[0px] left-[0px] w-3 h-3 object-cover"
//           alt=""
//           src="/star@2x.png"
//         />
//         <div className="absolute top-[14px] left-[0px] leading-[156.23%]">
//           5.0
//         </div>
//       </div>
//       <div className="absolute top-[2111px] left-[calc(50%_+_154px)] w-[502px] h-[559px] text-5xl">
//         <img
//           className="absolute top-[0px] left-[calc(50%_-_251px)] rounded-3xs w-[502px] h-[559px] object-cover"
//           alt=""
//           src="/rectangle-367@2x.png"
//         />
//         <h3
//           className="m-0 absolute top-[50px] left-[110px] text-13xl leading-[156.23%] font-bold font-open-sans-hebrew text-center inline-block w-[282px]"
//           id="what you learn"
//         >
//           What you’ll Learn
//         </h3>
//         <div className="absolute top-[160px] left-[51px] w-[368px] h-[74px]">
//           <p
//             className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[303px]"
//             id="1"
//           >
//             Introduction to basic nutrition principles
//           </p>
//           <input
//             className="cursor-pointer m-0 absolute top-[17px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
//             id="intro_radio"
//             type="radio"
//           />
//         </div>
//         <div className="absolute top-[368px] left-[51px] w-[342px] h-[37px]">
//           <p
//             className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[277px]"
//             id="3 build"
//           >
//             Building a balanced diet
//           </p>
//           <input
//             className="cursor-pointer m-0 absolute top-[18px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
//             id="3"
//             type="radio"
//           />
//         </div>
//         <div className="absolute top-[435px] left-[51px] w-[368px] h-[70px]">
//           <p
//             className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[303px] h-[70px]"
//             id="4"
//           >
//             Portion control and mindful eating
//           </p>
//           <input
//             className="cursor-pointer m-0 absolute top-[34px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-44.71deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
//             id="4 portion"
//             type="radio"
//           />
//         </div>
//         <div className="absolute top-[264px] left-[51px] w-[414px] h-[74px]">
//           <p
//             className="m-0 absolute top-[0px] left-[65px] leading-[156%] inline-block w-[349px]"
//             id="22"
//           >
//             Understanding macronutrients and micronutrients
//           </p>
//           <input
//             className="cursor-pointer m-0 absolute top-[36px] left-[-1px] rounded-md bg-whitesmoke box-border w-[26px] h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0] border-[1px] border-solid border-darkslateblue-200"
//             id="2"
//             type="radio"
//           />
//         </div>
//       </div>
//       <section
//         className="absolute top-[2111px] left-[calc(50%_-_656px)] w-[781px] h-[389px] text-left text-lg text-gray-200 font-open-sans-hebrew"
//         id="Nutritional-fundamentsl"
//       >
//         <div className="absolute top-[0px] left-[calc(50%_-_390.5px)] w-[781px] h-[280px]">
//           <img
//             className="absolute top-[0px] left-[calc(50%_-_390.5px)] rounded-3xs w-[280px] h-[280px] object-cover"
//             alt=""
//             src="/rectangle-362@2x.png"
//           />
//           <div className="absolute top-[5px] left-[326px] w-[455px] h-[259px]">
//             <div className="absolute top-[149px] left-[0px] w-[103.77px] h-7 text-dimgray-100">
//               <p
//                 className="m-0 absolute top-[0px] left-[31.93px] leading-[156.23%] font-bold inline-block w-[71.84px]"
//                 id="duration"
//               >
//                 4 weeks
//               </p>
//               <img
//                 className="absolute h-[85.71%] w-[23.08%] top-[7.14%] right-[76.92%] bottom-[7.14%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//                 alt="time"
//                 src="/group@2x.png"
//               />
//             </div>
//             <div className="absolute top-[0px] left-[0px] w-[455px] h-[210px] text-base">
//               <div className="absolute top-[0px] left-[0px] w-[455px] h-[210px]">
//                 <p
//                   className="m-0 absolute top-[88px] left-[0px] leading-[156.23%] inline-block w-[362px]"
//                   id="course-info"
//                 >
//                   Learn the basics of nutrition and develop a solid foundation
//                   for a healthy diet.
//                 </p>
//                 <p
//                   className="m-0 absolute top-[185px] left-[0px] leading-[156.23%] inline-block w-[225.5px]"
//                   id="instructor"
//                 >
//                   <span>{`Instructor: `}</span>
//                   <b>David Hemsworth</b>
//                 </p>
//                 <h2
//                   className="m-0 absolute top-[0px] left-[0px] text-[36px] leading-[156.23%] font-extrabold font-inherit inline-block w-[455px]"
//                   id="Nutritional Fundamentals"
//                 >
//                   Nutrition Fundamentals
//                 </h2>
//               </div>
//             </div>
//             <p
//               className="m-0 absolute top-[228px] left-[0px] text-xl leading-[156.23%] whitespace-pre-wrap text-center inline-block w-[203.55px]"
//               id="cost"
//             >
//               <b>{`Rs. 1,299.00  `}</b>
//               <span className="[text-decoration:line-through] text-red">
//                 3,499.00
//               </span>
//             </p>
//           </div>
//           <img
//             className="absolute top-[61px] left-[326px] w-[86px] h-3.5 object-cover"
//             alt="star-full"
//             src="/group-582@2x.png"
//           />
//         </div>
//         <div className="absolute top-[304px] left-[326px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[259px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod">
//           <button
//             className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block"
//             id="Enroll Now"
//           >
//             Enroll now
//           </button>
//         </div>
//       </section>
//       <div className="absolute top-[2870px] left-[70px] w-[1372px] h-[647px] text-9xl">
//         <div className="absolute top-[181px] left-[0px] w-[536px] h-[412px]">
//           <div className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color" />
//           <img
//             className="absolute top-[0px] left-[0px] rounded-54xl w-[232px] h-[197px] object-cover"
//             alt="sadie"
//             src="/rectangle-332@2x.png"
//           />
//           <div className="absolute top-[100px] left-[288px] leading-[133%] font-semibold">
//             Sadie Warren
//           </div>
//           <div className="absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[397px]">
//             The Nutrition Fundamentals course exceeded my expectations! It
//             covered all the essential topics in a comprehensive yet
//             easy-to-understand manner. Highly recommended!
//           </div>
//           <img
//             className="absolute top-[238px] left-[81px] w-6 h-6 object-cover"
//             alt="blue_inverted"
//             src="/group-581@2x.png"
//           />
//           <img
//             className="absolute top-[161px] left-[288px] w-[86px] h-3.5 object-cover"
//             alt=""
//             src="/group-438@2x.png"
//           />
//         </div>
//         <div className="absolute top-[181px] left-[756px] w-[536px] h-[412px]">
//           <div className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color" />
//           <img
//             className="absolute top-[0px] left-[0px] rounded-54xl w-[232px] h-[197px] object-cover"
//             alt="jade"
//             src="/rectangle-3321@2x.png"
//           />
//           <div className="absolute top-[100px] left-[288px] leading-[133%] font-semibold">
//             Jade Williams
//           </div>
//           <div className="absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[395px]">
//             The course materials were top-notch and the interactive exercises
//             made learning enjoyable. I'm grateful for the valuable insights I
//             gained from this course.
//           </div>
//           <img
//             className="absolute top-[238px] left-[81px] w-6 h-6 object-cover"
//             alt="blue_inverted"
//             src="/group-5811@2x.png"
//           />
//           <img
//             className="absolute top-[161px] left-[288px] w-[86px] h-3.5 object-cover"
//             alt=""
//             src="/group-438@2x.png"
//           />
//         </div>
//         <div className="absolute top-[639px] left-[649px] w-[74px] h-2">
//           <div className="absolute top-[0px] left-[0px] rounded-10xl bg-lightgreen w-[26px] h-2" />
//           <div className="absolute top-[0px] left-[34px] rounded-10xl bg-honeydew w-2 h-2" />
//           <div className="absolute top-[0px] left-[50px] rounded-10xl bg-honeydew w-2 h-2" />
//           <div className="absolute top-[0px] left-[66px] rounded-10xl bg-honeydew w-2 h-2" />
//         </div>
//         <img
//           className="absolute top-[399px] left-[1308px] w-16 h-16 object-cover"
//           alt="img"
//           src="/arrow2@2x.png"
//         />
//         <div className="absolute top-[0px] left-[calc(50%_-_516px)] text-27xl leading-[133%] font-semibold">
//           Hear from our Students who took our courses!
//         </div>
//       </div>
//       <section
//         className="absolute top-[3717px] left-[calc(50%_-_609px)] w-[1217px] h-[665px] text-left text-5xl text-gray-200 font-open-sans"
//         id="stayfitLearning"
//       >
//         <h1
//           className="m-0 absolute top-[0px] left-[calc(50%_-_230.5px)] text-27xl leading-[156.23%] font-inherit"
//           id="Whystayfit"
//         >
//           <span className="font-semibold">{`Why `}</span>
//           <i className="font-semibold">stayFIT</i>
//           <span className="font-semibold"> Leaning?</span>
//         </h1>
//         <div className="absolute top-[192px] left-[28px] w-[174px] h-[147px]">
//           <img
//             className="absolute top-[0px] left-[37px] rounded-[50%] w-[100.58px] h-[100px] object-cover"
//             alt="Best educators"
//             src="/ellipse-104@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[174px]"
//             id="Best_educators"
//           >
//             Best Educators
//           </p>
//         </div>
//         <div className="absolute top-[489px] left-[0px] w-[230px] h-[147px]">
//           <img
//             className="absolute top-[0px] left-[65px] rounded-[50%] w-[100.44px] h-[100px] object-cover"
//             alt="problem-solving"
//             src="/ellipse-107@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[230px]"
//             id="1:1 doubt solving"
//           >
//             1-1 Problem Solving
//           </p>
//           <img
//             className="absolute top-[20px] left-[85px] w-[60px] h-[60px] object-cover"
//             alt=""
//             src="/vuesaxoutlineprofile2user@2x.png"
//           />
//         </div>
//         <div className="absolute top-[489px] left-[517px] w-[218px] h-44 text-center">
//           <img
//             className="absolute top-[0px] left-[59px] rounded-[50%] w-[100px] h-[100px] object-cover"
//             alt="Interactive activities"
//             src="/ellipse-108@2x.png"
//           />
//           <img
//             className="absolute top-[20px] left-[79px] w-[60px] h-[60px] object-cover"
//             alt=""
//             src="/vuesaxoutlinelink@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[218px]"
//             id="interactive activiies"
//           >
//             Interactive with hands on activities
//           </p>
//         </div>
//         <div className="absolute top-[489px] left-[1023px] w-[194px] h-[147px] text-center">
//           <img
//             className="absolute top-[0px] left-[47px] rounded-[50%] w-[100px] h-[100px] object-cover"
//             alt="Career_guidance"
//             src="/ellipse-109@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold"
//             id="Career_guidance"
//           >
//             Career Guidance
//           </p>
//           <img
//             className="absolute top-[20px] left-[67px] w-[60px] h-[60px] object-cover"
//             alt=""
//             src="/vuesaxoutlinestatusup@2x.png"
//           />
//         </div>
//         <div className="absolute top-[192px] left-[500px] w-64 h-44 text-center">
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-64"
//             id="zero to hero"
//           >
//             <span className="block">Zero to Hero Learning</span>
//             <span className="block">(Beginner to Advance)</span>
//           </p>
//           <img
//             className="absolute top-[0px] left-[78px] rounded-[50%] w-[100px] h-[100px] object-cover"
//             alt="zero-to hero"
//             src="/ellipse-105@2x.png"
//           />
//           <img
//             className="absolute top-[20px] left-[98px] w-[60px] h-[60px] object-cover"
//             alt=""
//             src="/vuesaxoutlinefavoritechart@2x.png"
//           />
//         </div>
//         <div className="absolute top-[192px] left-[1054px] w-36 h-[147px]">
//           <p
//             className="m-0 absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-36"
//             id="cretification"
//           >
//             Certification
//           </p>
//           <img
//             className="absolute top-[0px] left-[22px] rounded-[50%] w-[100px] h-[100px] object-cover"
//             alt="certification"
//             src="/ellipse-106@2x.png"
//           />
//           <img
//             className="absolute top-[20px] left-[42px] w-[60px] h-[60px] object-cover"
//             alt=""
//             src="/vuesaxoutlineaward@2x.png"
//           />
//         </div>
//       </section>
//       <img
//         className="absolute top-[4782px] left-[980px] w-[370px] h-[374px] object-cover"
//         alt="faq"
//         src="/rectangle-344@2x.png"
//       />
//       <div className="absolute top-[4773px] left-[160px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden text-9xl border-[1px] border-solid border-stroke-green-color">
//         <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
//           {" "}
//           How do I enroll in a course?
//         </div>
//         <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
//           +
//         </div>
//       </div>
//       <div className="absolute top-[4900px] left-[160px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden text-9xl border-[1px] border-solid border-stroke-green-color">
//         <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
//           Are the courses suitable for beginners?
//         </div>
//         <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
//           +
//         </div>
//       </div>
//       <div className="absolute top-[5064px] left-[160px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden text-9xl border-[1px] border-solid border-stroke-green-color">
//         <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
//           Can I access the course materials at any time?
//         </div>
//         <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
//           +
//         </div>
//       </div>
//       <h2
//         className="m-0 absolute top-[554px] left-[calc(50%_-_195px)] text-27xl leading-[156.23%] font-semibold font-inherit"
//         id="Featured_Courses"
//       >
//         Featured Courses
//       </h2>
//       <div className="absolute top-[746px] left-[1131px] w-[330px] h-[480px] text-[21.71px]">
//         <div className="absolute top-[0px] left-[0px] w-[330px] h-[480px] text-dimgray-100">
//           <section
//             className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-lgi-3 bg-whitesmoke box-border w-[330px] h-[480px] border-[2.4px] border-solid border-darkgray"
//             id="sect-4"
//           />
//           <img
//             className="absolute top-[2.71px] left-[2.62px] rounded-t-xl rounded-b-[28.95px] w-[325.02px] h-[200.44px] object-cover"
//             alt=""
//             src="/rectangle-204@2x.png"
//           />
//           <div className="absolute top-[414px] left-[20.97px] w-[162.1px] h-[42px]">
//             <p
//               className="m-0 absolute top-[5.01px] left-[58.52px] leading-[156.23%] font-semibold inline-block w-[103.58px] h-[32.57px]"
//               id="duration"
//             >
//               3 weeks
//             </p>
//             <img
//               className="absolute h-full w-[25.91%] top-[0%] right-[74.09%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//               alt="time"
//               src="/group1@2x.png"
//             />
//           </div>
//           <p
//             className="m-0 absolute top-[325px] left-[9.63px] text-[24.12px] leading-[156.23%] font-semibold text-dimgray-200"
//             id="instructor"
//           >
//             <span>{`Instructor: `}</span>
//             <span className="text-gray-200">Zoro Roronoa</span>
//             <span>{` `}</span>
//           </p>
//         </div>
//         <p
//           className="m-0 absolute top-[217px] left-[22px] text-7xl leading-[156.23%] font-bold inline-block w-[161px] h-[78px]"
//           id="sports-nutrition"
//         >
//           <span className="block">Sports</span>
//           <span className="block">Nutrition</span>
//         </p>
//         <div className="absolute top-[224px] left-[282px] w-5 h-[37px] text-xs">
//           <img
//             className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
//             alt="star"
//             src="/star@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
//             id="5.0"
//           >
//             5.0
//           </p>
//         </div>
//       </div>
//       <div className="absolute top-[746px] left-[771px] w-[330px] h-[480px] text-7xl">
//         <div className="absolute top-[0px] left-[0px] w-[330px] h-[480px]">
//           <section
//             className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-lgi-3 bg-whitesmoke box-border w-[330px] h-[480px] border-[2.4px] border-solid border-darkgray"
//             id="section-3"
//           />
//           <img
//             className="absolute top-[2.71px] left-[2.62px] rounded-t-xl rounded-b-[28.95px] w-[325.02px] h-[200.44px] object-cover"
//             alt=""
//             src="/rectangle-203@2x.png"
//           />
//         </div>
//         <p
//           className="m-0 absolute top-[216px] left-[19px] leading-[156.23%] font-bold inline-block w-[185px] h-20"
//           id="mindful-eating"
//         >
//           Mindful Eating
//         </p>
//         <div className="absolute top-[224px] left-[282px] w-5 h-[37px] text-xs">
//           <img
//             className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
//             alt=""
//             src="/star@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
//             id="5.0"
//           >
//             5.0
//           </p>
//         </div>
//         <p
//           className="m-0 absolute top-[326px] left-[9.64px] text-[24.12px] leading-[156.23%] font-semibold text-dimgray-200 whitespace-pre-wrap"
//           id="instructor"
//         >{`Instructor: Sanji Vismoke                          `}</p>
//         <div className="absolute top-[415px] left-[20.97px] w-[159.69px] h-[42px] text-[21.71px] text-dimgray-100 font-montserrat">
//           <p
//             className="m-0 absolute top-[4.82px] left-[62.73px] leading-[156.23%] font-semibold inline-block w-[96.95px] h-[31.28px]"
//             id="duration"
//           >
//             4 weeks
//           </p>
//           <img
//             className="absolute h-full w-[26.3%] top-[0%] right-[73.7%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//             alt="time"
//             src="/group2@2x.png"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[746px] left-[51px] w-[330px] h-[480px]">
//         <section
//           className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-lgi-3 bg-whitesmoke box-border w-[330px] h-[480px] border-[2.4px] border-solid border-darkgray"
//           id="section_1"
//         />
//         <img
//           className="absolute top-[2.7px] left-[2.62px] rounded-t-xl rounded-b-[28.95px] w-[325.02px] h-[200.44px] object-cover"
//           alt="Healthy_meal_img"
//           src="/rectangle-202@2x.png"
//         />
//       </div>
//       <p
//         className="m-0 absolute top-[963px] left-[70px] text-7xl leading-[156.23%] font-bold whitespace-pre-wrap inline-block w-[234px] h-[79px]"
//         id="Healthy_meal_planning"
//       >
//         Healthy Meal Planning
//       </p>
//       <div className="absolute top-[970px] left-[333px] w-5 h-[37px] text-xs">
//         <img
//           className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
//           alt="star"
//           src="/star1@2x.png"
//         />
//         <p
//           className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
//           id="rating"
//         >
//           5.0
//         </p>
//       </div>
//       <p
//         className="m-0 absolute top-[1072px] left-[61px] text-[24.12px] leading-[156.23%] font-semibold text-dimgray-200"
//         id="instructor_1"
//       >
//         <span>{`Instructor: `}</span>
//         <span className="text-gray-200">Tony Chopper</span>
//         <span>{` `}</span>
//       </p>
//       <div className="absolute top-[1161px] left-[70.27px] w-[161.39px] h-[42px] text-[21.71px] text-dimgray-100">
//         <p
//           className="m-0 absolute top-[5.01px] left-[63.4px] leading-[156.23%] font-semibold inline-block w-[97.99px] h-[32.07px]"
//           id="duration"
//         >
//           4 weeks
//         </p>
//         <img
//           className="absolute h-full w-[26.02%] top-[0%] right-[73.98%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//           alt="time"
//           src="/group3@2x.png"
//         />
//       </div>
//       <div className="absolute top-[746px] left-[411px] w-[330px] h-[480px] text-7xl">
//         <div className="absolute top-[0px] left-[0px] w-[330px] h-[480px]">
//           <section
//             className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-lgi-3 bg-whitesmoke box-border w-[330px] h-[480px] border-[2.4px] border-solid border-darkgray"
//             id="section-2"
//           />
//           <img
//             className="absolute top-[2.71px] left-[2.62px] rounded-t-xl rounded-b-[28.95px] w-[325.02px] h-[200.44px] object-cover"
//             alt="Weight_loss"
//             src="/rectangle-203@2x.png"
//           />
//         </div>
//         <p
//           className="m-0 absolute top-[217px] left-[12px] leading-[156.23%] font-bold inline-block w-[214px] h-[78px]"
//           id="weight-loss"
//         >
//           Weight loss Stratergies
//         </p>
//         <div className="absolute top-[224px] left-[282px] w-5 h-[37px] text-xs">
//           <img
//             className="absolute top-[0px] left-[0px] w-5 h-5 object-cover"
//             alt="star"
//             src="/star2@2x.png"
//           />
//           <p
//             className="m-0 absolute top-[22px] left-[1px] leading-[156.23%] inline-block w-[18px] h-[15px]"
//             id="rateing"
//           >
//             5.0
//           </p>
//         </div>
//         <p
//           className="m-0 absolute top-[325px] left-[10px] text-[24.12px] leading-[156.23%] font-semibold text-dimgray-200 whitespace-pre-wrap"
//           id="instructor"
//         >{`Instructor: Robin Nico   `}</p>
//         <div className="absolute top-[416px] left-[19.53px] w-[154.16px] h-[42px] text-[21.71px] text-dimgray-100 font-montserrat">
//           <div className="absolute top-[0px] left-[0px] w-[154.16px] h-[42px]">
//             <p
//               className="m-0 absolute top-[4.82px] left-[60.56px] leading-[156.23%] font-semibold inline-block w-[93.6px] h-[30.86px]"
//               id="suration"
//             >
//               4 weeks
//             </p>
//             <img
//               className="absolute h-full w-[27.24%] top-[0%] right-[72.76%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
//               alt="time"
//               src="/group4@2x.png"
//             />
//           </div>
//         </div>
//       </div>
//       <img
//         className="absolute top-[3929px] left-[232px] w-[60px] h-[60px] object-cover"
//         alt=""
//         src="/vuesaxoutlineuser@2x.png"
//       />
//       <img
//         className="absolute h-[1.02%] w-[3.97%] top-[6.23%] right-[2.65%] bottom-[92.75%] left-[93.39%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
//         alt="courses"
//         src="/vector@2x.png"
//         onClick={onVectorImageClick}
//       />
//       <div className="absolute top-[5459px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
//         <footer
//           className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]"
//           id="footer"
//         />
//         <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
//         <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37.9px] text-black font-roboto-flex">
//           <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
//             <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[134.11px] h-[63.49px]">
//               <i>stay</i>
//               <i className="text-[56.8px] font-body-main">FIT</i>
//             </div>
//             <img
//               className="absolute top-[69.84px] left-[6.31px] w-[135.69px] h-[30.16px] object-cover"
//               alt=""
//               src="/vector-5@2x.png"
//             />
//             <img
//               className="absolute top-[60.27px] left-[117.22px] w-[11.05px] h-[19.93px] object-contain"
//               alt=""
//               src="/vector-6@2x.png"
//             />
//             <img
//               className="absolute top-[73.48px] left-[118.33px] w-[22.52px] h-[18.75px] object-contain"
//               alt=""
//               src="/vector-7@2x.png"
//             />
//           </div>
//           <div className="absolute top-[130px] left-[0px] text-lg leading-[150%] font-open-sans text-grey-color text-left">
//             <p className="m-0">Copyright © StayFIT LLC.</p>
//             <p className="m-0">All rights reserved.</p>
//           </div>
//         </div>
//         <div className="absolute top-[92px] left-[380px] w-[252px] h-[164px]">
//           <img
//             className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
//             alt=""
//             src="/rectangle-347@2x.png"
//           />
//         </div>
//         <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
//           <div className="absolute top-[0px] left-[0px] leading-[150%]">
//             Home
//           </div>
//           <div
//             className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
//             onClick={onWhoWeAre1Click}
//           >
//             Who we are
//           </div>
//         </div>
//         <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
//           <div
//             className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
//             onClick={onFAQsTextClick}
//           >
//             FAQs
//           </div>
//           <div className="absolute top-[74px] left-[0px] leading-[150%]">
//             My Account
//           </div>
//           <div
//             className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
//             onClick={onStoreText1Click}
//           >
//             Store
//           </div>
//         </div>
//         <div className="absolute top-[82px] left-[1245px] w-[124px] h-[178px]">
//           <div
//             className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
//             onClick={onTermsOfUseClick}
//           >
//             Terms of use
//           </div>
//           <div
//             className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
//             onClick={onPrivacyPolicyTextClick}
//           >
//             Privacy Policy
//           </div>
//           <div
//             className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
//             onClick={onContactUsTextClick}
//           >
//             Contact us
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default COURSES;
