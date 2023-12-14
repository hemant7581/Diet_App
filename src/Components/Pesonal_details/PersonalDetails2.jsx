import React, { useState, useRef } from "react";
//  import Profile_picture from "../../asset/Profile_picture.png"
import Above from "../../asset/Above.png";
import Edit from "../../asset/Edit.png";
import Editable from "./Editable";
// import Nav from '../Top_Nav/Nav'
// import Sidebar from '../ProPic/Sidebar'

const PersonalDetails2 = () => {
  const [rotation, setRotation] = useState(0);
  const [showDetails, setShowDetails] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null); //We use the useRef hook to create a reference to the input element (inputRef) ,
  //When the button is clicked (handleButtonClick), it sets isInputFocused to true and focuses on the input element using inputRef.current.focus().
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState("55 kg");
  const [Height, setHeight] = useState("170 cm");
  const [name, setName] = useState("Yor Forger");
  const [Emaol, setEmail] = useState(" yorf123@abc.com");
  const [editedWeight, setEditedWeight] = useState("");
  const [editedHeight, setEditedHeight] = useState("");
  const [editedName, setEditedName] = useState("");

  const onBtnClick = () => {
    // Toggle between original position (0 degrees) and top position (180 degrees)
    const newRotation = rotation === 0 ? -180 : 0;
    setRotation(newRotation);
    setShowDetails(!showDetails);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedWeight(weight);
    setEditedName(name);
    setIsInputFocused(true);
    inputRef.current.focus();
  };

  const handleDoneClick = () => {
    setIsEditing(false);
    setWeight(editedWeight);
    setName(editedName);
  };

  return (
    <div className="absolute w-[852px] overflow-hidden h-[203px] font-sans xl:w-full">
      {/* Personal details section */}

      <section className="absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[689px] border border-strokegreen-color rounded-xl">
        <h1 className="absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]">
          Personal details
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
        <section className="absolute w-[852px] leading-[48px] h-[454px] left-[515px] top-[773px] border border-strokegreen-color rounded-xl">
          {/* 1st */}
          <section>
            <h1 className="absolute left-[18px] top-6 text-[26px] font-inherit font-semibold leading-[40px]">
              Full Name
            </h1>
            {/* <p className='absolute left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit' >Yor Forger</p>
        <img src={Edit} alt="" className='absolute left-[811px] w-[23px] h-[18px] top-[37px] '  /> */}
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  ref={inputRef}
                  onChange={(e) => setEditedName(e.target.value)}
                  className={
                    isInputFocused
                      ? " absolute focus:border focus:border-black left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit"
                      : "border-2"
                  }
                />
                <button
                  onClick={handleDoneClick}
                  className="absolute left-[778px] top-[37px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <p className="absolute left-[177px] leading-[37px] top-[26px] text-5xl text-black font-normal font-inherit">
                  {name}
                </p>
                <img
                  src={Edit}
                  alt=""
                  className="absolute left-[811px] w-[23px] h-[18px] top-[37px] "
                  onClick={handleEditClick}
                />
              </>
            )}
          </section>
          {/* 2nd */}
          <section>
            <h1 className="absolute left-[18px] top-[97px] text-[26px] font-inherit font-semibold leading-[40px]">
              Contact
            </h1>
            <p className="absolute left-[165px] leading-[37px] top-[99px] text-5xl text-black font-normal font-inherit">
              <Editable initialValue="+91 1122339900" />
            </p>
            <img
              src={Edit}
              alt=""
              className="absolute left-[811px] w-[23px] h-[18px] top-[110px] "
              onClick={handleEditClick}
            />
          </section>

          {/* 3rd */}
          <section>
            <h1 className="absolute left-[18px] top-[170px] text-[26px] font-inherit font-semibold leading-[40px]">
              Email ID
            </h1>
            <p className="absolute left-[177px] leading-[37px] top-[172px] text-5xl text-black font-normal font-inherit">
              yorf123@abc.com
            </p>
            <img
              src={Edit}
              alt=""
              className="absolute left-[811px] w-[23px] h-[18px] top-[183px] "
            />
          </section>
          {/* 4th */}
          <section>
            <h1 className="absolute left-[18px] top-[243px] text-[26px] font-inherit font-semibold leading-[40px]">
              Birth date
            </h1>
            <p className="absolute left-[177px] leading-[37px] top-[245px] text-5xl text-black font-normal font-inherit">
              November 9,1999
            </p>
            <img
              src={Edit}
              alt=""
              className="absolute left-[811px] w-[23px] h-[18px] top-[256px] "
            />
          </section>
          {/* 5th */}
          <section>
            <h1 className="absolute left-[18px] top-[316px] text-[26px] font-inherit font-semibold leading-[40px]">
              Weight
            </h1>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedWeight}
                  ref={inputRef}
                  onChange={(e) => setEditedWeight(e.target.value)}
                  className={
                    isInputFocused
                      ? "absolute focus:border focus:border-black left-[177px] leading-[37px] top-[318px] text-5xl text-black font-normal font-inherit"
                      : "border-2"
                  }
                />
                <button
                  onClick={handleDoneClick}
                  className="absolute left-[778px] top-[318px] text-dark-green-color font-inherit font-5xl font-semibold leading-[37px]"
                >
                  Done
                </button>
              </>
            ) : (
              <>
                <p className="absolute left-[177px] leading-[37px] top-[318px] text-5xl text-black font-normal font-inherit">
                  {weight}
                </p>
                <img
                  src={Edit}
                  alt=""
                  className="absolute left-[811px] w-[23px] h-[18px] top-[329px]  "
                  onClick={handleEditClick}
                />
              </>
            )}
          </section>

          {/* 6th */}
          <section>
            <h1 className="absolute left-[18px] top-[389px] text-[26px] font-inherit font-semibold leading-[40px]">
              Height
            </h1>
            {isEditing ? (
              <>
              <input type="text" value={editHeight} ref={inputRef} onChange={(e)=>setEditedHeight(e.target.value)} className={isInputFocused ? "absolute left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit":"border-2"
            }
             />
             <button onClick={handleDoneClick} className="absolute left-[811px] w-[23px] h-[18px] top-[402px]">Done</button>
              </>
            )
          
          :(
            <>
            <p className="absolute left-[177px] leading-[37px] top-[391px] text-5xl text-black font-normal font-inherit">
              {Height}
            </p>
            <img
              src={Edit}
              alt=""
              className="absolute left-[811px] w-[23px] h-[18px] top-[402px] "
              onClick={handleEditClick}
            />
            </>
          )}
          </section>
        </section>
      )}
    </div>
  );
};

export default PersonalDetails2;
