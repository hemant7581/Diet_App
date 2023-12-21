import React from "react";
import Nav from "../Top_Nav/Nav"
import Footer from "../Footer/Footer";
import Search from "../../asset/Search.png"
import CourceData from "./CourceData.json"
import Testimonial from "../Welcome/Testimonial";
import Faq from "../Welcome/Faq";

const COURCES = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[5859px] overflow-hidden text-left text-5xs text-gray-200 font-sans">
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
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={Search}
        />
      </section>
      {/* input */}
      <h1 className="text-center font-inherit text-[46px] text-black leading-[156.226%] font-semibold my-[621px]">
        Featured Courses
      </h1>

      {/* featured courses */}
      <section className="flex justify-evenly">
        {CourceData.course.map((course) => (
          <section className="w-[330px] h-[480px] rounded-[20px] border-2 border-solid border-[#999] -mt-[530px]">
            <img src={course.img} alt="img" />
            <section className="flex justify-between">
              <p className="text-black text-[26px] font-sans font-bold leading-[156.227%] ml-[19px] mt-[217px]">{course.Course_Name}</p>
              <img src={course.star} alt="star" />
            </section >
            <p className="text-5xl font-sans text-black leading-[156.227%] font-semibold ml-[19px] ">{course.Instructor}</p>
            <section className="flex items-center gap-3 ml-5">
              <img src={course.Time_img} alt="time" />
              <p className="font-sans text-[#747272] text-xl font-semibold leading-[156.227%] ">{course.Duration}</p>
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
            <section className="flex justify-between">
              <img src={Explore.img} alt="img" />
              <img src={Explore.star} alt="star" />
            </section>
            <h3>{Explore.Course_Name}</h3>
            <p>{Explore.Info}</p>
            <img src={Explore.Time_img} alt="" />
            <section className="flex text-center gap-2">
              <p>{Explore.Cost}</p>
              <p>{Explore.Actual_Cost}</p>
            </section>
          </section>
        ))}
      </section>

      {/* Explore courses */}

      {/* feedback */}
      <h3 className="text-center text-dark font-sans  text-[46px] font-semibold leading-[133%]">
        Hear from our Students who took our courses!
      </h3>
      {/* <Testimonial/> */}
      {/* feedback */}

      {/* why stayfit learning */}
      <div className="absolute top-[3717px] left-[calc(50%_-_609px)] w-[1217px] h-[665px] text-5xl">
        <div className="absolute top-[0px] left-[calc(50%_-_230.5px)] text-27xl leading-[156.23%]">
          <span className="font-semibold">{`Why `}</span>
          <i className="font-semibold">stayFIT</i>
          <span className="font-semibold"> Leaning?</span>
        </div>
      </div>
      {/* why stayfit learning */}

      {/* faq */}
      <h3 className="text-center text-dark font-sans  text-[46px] font-semibold leading-[133%]">
        Frequently Asked Questions
      </h3>
      <Faq />
      {/* faq */}

      {/* why stayfit learning */}
      {/* Footer */}

      <Footer />
      {/* Footer */}
    </div>
  );
};

export default COURCES;




// import React from "react";
// import Nav from "../Top_Nav/Nav";
// import Footer from "../Footer/Footer";
// import Search from "../../asset/Search.png";
// import CourceData from "./CourceData.json";
// import Testimonial from "../Welcome/Testimonial";
// import Faq from "../Welcome/Faq";

// const COURCES = () => {
//   return (
//     <div className="relative bg-whitesmoke min-h-screen overflow-hidden text-left text-sm md:text-base lg:text-lg text-gray-200 font-sans">
//       <header className="absolute top-0 left-0 w-full bg-white shadow-md">
//         <Nav />
//       </header>

//       <h1 className="absolute top-20 left-[50%] -translate-x-1/2 text-2xl md:text-4xl lg:text-5xl text-dark-green-color font-open-sans font-semibold">
//         <i className="font-semibold">StayFIT</i>
//         <span className="font-semibold"> Learning</span>
//       </h1>

//       {/* input */}
//       <section className="absolute top-32 left-[50%] -translate-x-1/2 w-full md:w-[80%] lg:w-[60%]">
//         <input
//           className="bg-whitesmoke outline-none pl-8 md:pl-10 py-2 md:py-4 rounded-md box-border w-full border-2 border-solid border-stroke-green-color text-base md:text-lg placeholder:text-gray-500 placeholder:italic placeholder-w-[50%] md:placeholder-w-[65%] lg:placeholder-w-[75%]"
//           name="text"
//           placeholder="Search Plan (low-carb, gluten-free, etc.)"
//           type="text"
//         />
//         <div className="absolute top-0 left-0 bg-whitesmoke w-1/4 h-full border-2 border-solid border-stroke-green-color"></div>
//         <img
//           className="absolute h-6 md:h-8 right-4 md:right-6 top-1/2 transform -translate-y-1/2"
//           alt="searchhh"
//           id="search"
//           src={Search}
//         />
//       </section>
//       {/* input */}

//       <h1 className="text-center text-2xl md:text-4xl lg:text-5xl text-black font-semibold my-8">
//         Featured Courses
//       </h1>

//       {/* featured courses */}
//       <section className="flex flex-wrap justify-center gap-4 md:gap-8">
//         {CourceData.course.map((course, index) => (
//           <section key={index} className="w-full md:w-[48%] lg:w-[30%] mb-8 md:mb-12 lg:mb-16">
//             <img className="w-full h-48 object-cover rounded-t-md" src={course.Img} alt="img" />
//             <section className="flex justify-between p-4">
//               <p className="text-black text-[26px] font-sans font-bold leading-[156.227%]">{course.Course_Name}</p>
//               <img className="w-5 h-5" src={course.star} alt="star" />
//             </section>
//             <p className="text-5xl font-sans text-black leading-[156.227%] font-semibold md:text-xl">{course.Instructor}</p>
//             <section className="flex items-center gap-5">
//               <img className="w-[42px] h-[42px] mr-2" src={course.Time_img} alt="" />
//               <p className="font-sans text-[#747272] text-xl font-semibold leading-[156.227%]">{course.Duration}</p>
//             </section>
//           </section>
//         ))}
//       </section>
//       {/* featured courses */}

//       <h1 className="text-center text-2xl md:text-4xl lg:text-5xl text-black font-semibold my-8">
//         Explore Courses
//       </h1>
//       {/* Explore courses */}
//       <section className="flex flex-wrap justify-center gap-4 md:gap-8">
//         {CourceData.Explore.map((Explore, index) => (
//           <section
//             key={index}
//             className="w-full md:w-[48%] lg:w-[30%] mb-8 md:mb-12 lg:mb-16 hover:scale-105 transition-transform duration-300 ease"
//           >
//             <section className="flex justify-between p-4">
//               <img className="w-8 h-8" src={Explore.Img} alt="img" />
//               <img className="w-8 h-8" src={Explore.star} alt="star" />
//             </section>
//             <h3>{Explore.Course_Name}</h3>
//             <p>{Explore.Info}</p>
//             <img className="w-4 h-4" src={Explore.Time_img} alt="" />
//             <section className="flex text-center gap-2">
//               <p>{Explore.Cost}</p>
//               <p>{Explore.Actual_Cost}</p>
//             </section>
//           </section>
//         ))}
//       </section>
//       {/* Explore courses */}

//       {/* feedback */}
//       <h3 className="text-center text-dark font-sans text-2xl md:text-4xl lg:text-5xl font-semibold my-8">
//         Hear from our Students who took our courses!
//       </h3>
//       <Testimonial />
//       {/* feedback */}

//       {/* why stayfit learning */}
//       <div className="relative">
//         <div className="text-center text-2xl md:text-4xl lg:text-5xl text-dark-green-color font-semibold my-8">
//           {`Why `}
//           <i className="font-semibold">stayFIT</i>
//           {` Learning?`}
//         </div>
//       </div>
//       {/* why stayfit learning */}

//       {/* faq */}
//       <h3 className="text-center text-dark font-sans text-2xl md:text-4xl lg:text-5xl font-semibold my-8">
//         Frequently Asked Questions
//       </h3>
//       <Faq />
//       {/* faq */}

//       {/* Footer */}
//       <Footer />
//       {/* Footer */}
//     </div>
//   );
// };

// export default COURCES;

