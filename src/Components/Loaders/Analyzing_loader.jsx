// import React from "react";
import Logo from "../../asset/Logo.png";
import Analyzing from "../../asset/Analyzing.gif";

const AnalyzingLoader = () => {
  return (
    <div className="relative bg-whitesmoke-200 w-full  h-[982px] overflow-hidden text-center text-[35.22px] text-black font-roboto-flex">
      <div className="absolute top-0 left-0 bg-whitesmoke-100 w-[1512px] h-[982px]" />
      <div className="absolute top-17px left-56px w-[132px] h-[94px]">
        <div className="absolute top-0 left-[17px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={Analyzing} alt="Analyzing" />
      </div>
      <p className="m-0 mx-auto absolute top-[590px] left-1/2 transform -translate-x-1/2 w-[181px] h-14 text-17xl text-gray font-open-sans-hebrew" id="analyzing">
        <b className="absolute mx-auto -top-28 left-[-1.1%] tracking-[0.03em] leading-[156.23%]">Analyzing</b>
      </p>
    </div>
  );
};

export default AnalyzingLoader;
