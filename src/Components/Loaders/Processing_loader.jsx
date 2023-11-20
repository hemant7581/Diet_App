// import { useCallback } from "react";
import Logo from "../../asset/Logo.png"
import Processing_loader from "../../asset/Processing_loader.png"


const Process_loader = () => {
//   const onGroupDivClick = useCallback(() => {
//     // Please sync "LANDING" to the project
//   }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[982px] overflow-hidden text-center text-[35.22px] text-black font-sans">
      <div
        className="absolute top-[18px] left-[80px] w-[132px] h-[94px] cursor-pointer"
        id="logo"
        // onClick={onGroupDivClick}
      >
    <img src={Logo} alt="" />
      </div>
      <p
        className="m-0 absolute top-[330px] left-[calc(50%_-_95px)] text-[36px] leading-[120.03%] font-semibold font-sans text-gray-900 inline-block w-[190px]"
        id="processing"
      >
        Processing
      </p>
      <img
        className="absolute top-[437px] left-[calc(50%_-_50px)] w-[100px] h-[100px] object-cover"
        alt="loader"
        src={Processing_loader}
      />
    </div>
  );
};

export default Process_loader;
