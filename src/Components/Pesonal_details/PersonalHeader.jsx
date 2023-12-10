import React from 'react'
import Profile_picture from "../../asset/Profile_picture.png";
import PEDIT from "../../asset/PEDIT.png";
import { Link } from 'react-router-dom';


const PersonalHeader = () => {
  return (
    <>
      <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        User Account
      </h1>
      <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p>
      {/* add border-2 to image    */}
      <img
        src={Profile_picture}
        className="absolute w-[200px] h-[200px] left-[853px] top-[317px] rounded-3xl border-green  outline-none "
        alt=""
      />
    <Link to="/ProfilePic_edit"> <img src={PEDIT} alt="" className='absolute top-[479px] left-[1023px]'/></Link> 
      {/* add border-2 to image    */}
      <p className="absolute text-5xl font-inherit font-semibold left-[892px] top-[546px] text-black leading-[29px]">
        Yor Forger
      </p>
      <p className="absolute left-[860px] top-[581px] text-[18px] font-inherit font-normal leading-[28px] text-grey-color ">
        Joined on Jun 30, 2023
      </p>
    </>
  )
}

export default PersonalHeader
