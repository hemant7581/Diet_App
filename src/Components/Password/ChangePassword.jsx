import React, { useState } from "react";
// import Profile_picture from "../../asset/Profile_picture.png";
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png"
import { Link } from "react-router-dom";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import PersonalHeader from "../Pesonal_details/PersonalHeader";

const ChangePassword = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const onBtnClick = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
    //  // Show/hide details based on the rotation
    //  setShowDetails(!showDetails);
    // }, [rotation, showDetails];
  };

  const handleEditClick = () => {};

  return (
    <div className="absolute w-[1512px] overflow-hidden  h-[1286px] font-sans xl:w-full">
      <Nav/>
      <Sidebar/>
<PersonalHeader/>

      {/* Personal details section */}
      <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[803px] border border-strokegreen-color rounded-xl">
        <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
          Change Password
        </h1>
        <img
          src={Above}
          alt=""
          className="absolute left-[808px] top-[24px]"
          onClick={onBtnClick}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </section>

      {/* personal details */}
      {showDetails && (
        <section className="absolute w-[852px] leading-[48px] h-[454px] left-[515px] top-[887px] border border-strokegreen-color rounded-xl">
          
        

          {/* 1nd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-[29px] font-inherit font-semibold leading-[40px]">
              New Password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-6 text-5xl text-black font-normal font-inherit"
            />
          </section>

          {/* 2rd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-[112px] font-inherit font-semibold leading-[40px]">
              Re-type password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-[107px] text-5xl text-black font-normal font-inherit"
            />
          </section>
{/* make changes in bg */}
          <section>
            <button className="absolute text-dark-green-color px-[73px] py-[28px] bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] text-5xl font-semibold leading-7 left-[324px] border-solid border border-Lightgreen rounded-2xl  top-[246px]">
              Change Password
            </button>
          </section>
{/* make changes in bg */}
        </section>
      )}  {/* Personal details section */}
      <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[803px] border border-strokegreen-color rounded-xl">
        <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
          Change Password
        </h1>
        <img
          src={Above}
          alt=""
          className="absolute left-[808px] top-[24px]"
          onClick={onBtnClick}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </section>

      {/* personal details */}
      {showDetails && (
        <section className="absolute w-[852px] leading-[48px] h-[454px] left-[515px] top-[887px] border border-strokegreen-color rounded-xl">
          
        

          {/* 1nd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-[29px] font-inherit font-semibold leading-[40px]">
              New Password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-6 text-5xl text-black font-normal font-inherit"
            />
          </section>

          {/* 2rd */}
          <section>
            <h1 className="absolute left-[18px]  text-[26px] top-[112px] font-inherit font-semibold leading-[40px]">
              Re-type password
            </h1>
            <input
              type="text"
              className="absolute pl-3 rounded-lg left-[268px] leading-[37px] border border-grey-color w-[444px] h-[51px] top-[107px] text-5xl text-black font-normal font-inherit"
            />
          </section>
{/* make changes in bg */}
          <section>
            <button className="absolute text-dark-green-color px-[73px] py-[28px] bg-gradient-to-r bg-gradient-[93deg] from-[#AFE47E] to [#D8FAB9] text-5xl font-semibold leading-7 left-[324px] border-solid border border-Lightgreen rounded-2xl  top-[246px]">
              Change Password
            </button>
          </section>
{/* make changes in bg */}
        </section>
      )}
    </div>
  );
};

export default ChangePassword;
