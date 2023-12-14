import { useCallback } from "react";

import Profile_picture from "../../asset/Profile_picture.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
 

  return (
    <div className="absolute bg-base-green-lightcolors  w-[394px] h-[1158px] " >
      <div className="absolute left-[124px] top-[170px] ">
        <img src ={Profile_picture} className=" w-[146px] h-[146px]  " alt=""/>
        <p className=" text-[24px] font-sans text-stroke-greencolor pt-6 px-3">Your forger</p>
      <div className="sub-menu absolute font-sans text-2xl w-[394px]  ">
       <Link to="/Overview" className="text-inherit"><li className="absolute top-[93px] hover:text-green-700 font-semibold  hover:bg-white  list-none py-4 hover:border-8 hover:border-white hover:rounded-[60px] w-[345px]   h-[74px] ">Overview</li></Link>
       <Link to="/Foodlog" className="text-inherit"><li className="absolute top-[165px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">Food Log</li></Link>
       <Link to="/MealPlan" className="text-inherit"><li className="absolute top-[237px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">My Meal Plan</li></Link>
       <Link to="/Trackers" className="text-inherit"><li className="absolute top-[309px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">Trackers</li></Link>
       <Link to="/MyApppointment" className="text-inherit"><li className="absolute top-[381px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">My Appointments</li></Link>
       <Link to="/Order" className="text-inherit"><li className="absolute top-[453px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">My Order</li></Link>
       <Link to="/UserAccount" className="text-inherit"><li className="absolute top-[525px] hover:text-green-700 font-semibold hover:bg-white list-none py-4 hover:rounded-[60px] w-[345px] hover:border-8 hover:border-white  h-[74px]">User Account</li></Link>

      </div>
      </div>
    </div>
  );
};

export default Sidebar;
