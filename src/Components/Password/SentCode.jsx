 import React,{useRef} from 'react'
 import Logo from "../../asset/Logo.png"

 const SentCode = () => {
 const inputRefs = Array.from({ length: 6 }, () => useRef(null));

 const handleInput = (e, index) => {
  const regex = /^[0-9]*$/;
  if (!regex.test(e.target.value)) {
    e.preventDefault();
    return;
  }

   if (index < inputRefs.length - 1 && e.target.value !== '') {
     inputRefs[index + 1].current.focus();
   }
 };

const handleKeyDown = (e, index) => {
  if (e.key === 'Enter' && index < inputRefs.length - 1) {
    e.preventDefault();
    inputRefs[index + 1].current.focus();
  }
};
const handleSubmit=()=>{
  alert("otp confirmed")
}

   return (
     <div className='relative w-full h-[1286px] overflow-hidden font-sans bg-whitesmoke'>
       <header className='logo'>
         <img src={Logo} alt="logo"className='absolute left-14 top-[17px]'/>
       </header>
      
       {/* main section */}
       <section>
         <p className='absolute  left-[279px] top-[314px] text-center leading-14 text-black font-semibold font-inherit text-17xl'>Enter the Code sent to your registered mobile number: <br/ >******900</p>
         <p className='absolute text-grey-color left-[511px] top-[466px] leading-14 font-semibold text-17xl font-inherit '>Enter the 6-Digit code below</p>
          {/* done button */}
<button className='absolute py-7 px-[72px] text-dark-green-color font-inherit text-5xl font-semibold leading-7 border border-solid border-Lightgreen bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] rounded-2xl left-[652px] top-[864px]' onClick={handleSubmit}>Done</button>

{/* done button */}
       </section>

 {/* otp section */}
<section className="absolute flex gap-[30px] left-[255px] top-[618px] bg-transparent">
      {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          type="number"
          id={`otp-${index}`}
          maxLength={1}
          name="otp"
           className="appearance-none  text-[64px] pl-[53px] h-[142px] w-[142px] rounded-[10px] border-2 border-solid border-dark-green-color"
          ref={inputRefs[index]}
          onInput={(e) => handleInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
        ))}
   
   </section> 


{/* otp section */}
      {/* main section */}
     </div>
   )
 }

 export default SentCode



// import React, { useRef } from 'react';

// const OtpInputs = () => {
//   const inputRefs = Array.from({ length: 6 }, () => useRef(null));

//   const handleInput = (e, index) => {
//     const regex = /^[0-9]*$/;
//     if (!regex.test(e.target.value)) {
//       e.preventDefault();
//       return;
//     }

//     if (index < inputRefs.length - 1 && e.target.value !== '') {
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Enter' && index < inputRefs.length - 1) {
//       e.preventDefault();
//       inputRefs[index + 1].current.focus();
//     }
//   };

//   return (
//     <section className="absolute flex gap-[30px] left-[255px] top-[618px] bg-transparent">
//       {Array.from({ length: 6 }, (_, index) => (
//         <input
//           key={index}
//           type="number"
//           id={`otp-${index}`}
//           maxLength={1}
//           name="otp"
//           className="text-[64px] pl-[53px] h-[142px] w-[142px] rounded-[10px] border-2 border-solid border-dark-green-color"
//           ref={inputRefs[index]}
//           onInput={(e) => handleInput(e, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//         />
//       ))}
//     </section>
//   );
// };

// export default OtpInputs;
