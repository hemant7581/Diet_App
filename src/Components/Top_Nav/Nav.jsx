import { useCallback ,useState} from "react";
import Logo from "../../asset/Logo.png";
import { Link } from "react-router-dom";
import Line from '../../asset/Line.png';
import White_diamond from '../../asset/White_diamond.png';
import Outlined_diamond from '../../asset/Outlined_diamond.png';
import circle from '../../asset/circle.png';
import Right_arrow from '../../asset/Right_arrow.png';
const Nav = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const onMyAccountTextClick = useCallback(() => {
    // Please sync "PROFILE Overview" to the project
  }, []);

  const onStoreTextClick = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onWhoWeAreClick = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  return (
    <div className="fixed top-0 shadow-[0px_2px_26px_rgba(0,_0,_0,_0.09)] w-[1512px] h-32 font-sans xl:w-full z-30 ">
      <div className="absolute  bg-whitesmoke w-[756px] h-32" />
      <div className="absolute left-[756px] bg-beige w-[760px] h-32" />
      <div className="absolute top-[17px] left-[56px] w-[132px] h-[94px] text-center text-[35.22px] text-black font-roboto-flex">
        <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]"></div>
        <img src={Logo} alt="Logo" />
      </div>

      {/* list starts  */}
      <div className="absolute top-[45px] left-[calc(50%_-_297px)] w-[595px] h-[37px] text-2xl text-green-700 ">
        <ul className="absolute top-[-0px] left-[calc(50%_-_297px)] list-none w-[595px] h-[37px]">
          <li className="absolute top-[0px] left-[calc(50%_-_297px)] leading-xl font-semibold">
            Home
          </li>
          <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
            {/* link OurService */}
           
            <li className="absolute top-[0%] left-[0%] leading-xl font-sans font-semibold cursor-pointer" onClick={toggleDropdown}>
              Our Services
            </li>
       
            {showDropdown && (
              <div className="absolute w-[226px] h-[396px] mt-14 -left-[45px] fant-sans bg-dark-green-color/100 text-white text-center rounded-[10px]">
              {/* <div className="flex absolute left-[17px] top-[36px] w-[226px] ">
            <img src={Line} alt="line" className="rounded-lg w-[64px]  " />
            <img src={White_diamond} alt="White_diamond" className="w-[6px] h-[6px]"/>
            <img src={Outlined_diamond} alt="outline_diamond" />
            <img src={circle} alt="circle" className="rounded-full [6px] w-[6px]" />
            <img src={circle} alt="circle" className="rounded-full [6px] w-[6px]" />
            <img src={circle} alt="circle" className="rounded-full [h-6px] w-[6px]" />
            <img src={Outlined_diamond} alt="outline_diamond w-[6px] h-[6px]"/>6            <img src={White_diamond} alt="White_diamond" />
            <img src={Line} alt="line" className="rounded-lg w-[64px]" />
          </div> */}
                <Link to="/MealPlans">
                  <div className="absolute top-[57px] left-[60px] cursor-pointer">Meal Plans</div>
                </Link>
                <Link to="/Recipes">
                  <div className=" absolute top-[125px] left-[75px]  cursor-pointer">Recipes</div>
                </Link>
                <Link to="/Consultation">
                  <div className="absolute top-[193px] left-[50px]  cursor-pointer">Consultation</div>
                </Link>
                <Link to="/Courses">
                  <div className="absolute top-[261px] left-[70px]  cursor-pointer">Courses</div>
                </Link>
                <Link to="/Workouts">
                  <div className="absolute top-[329px] left-[65px]  cursor-pointer">Workouts</div>
                </Link>
              </div>
            )}
          </div>
          {/* Link who We Are */}
          <Link to= "/WhoWeAre" className="text-inherit">  
          <li
            className="absolute top-[0px] left-[calc(50%_+_38px)] leading-xl font-semibold cursor-pointer"
            onClick={onWhoWeAreClick}
            >
            Who we are
          </li>
          </Link>
            {/* Link who We Are */}
          {/*link store */}
          <Link to="/Store" className="text-inherit">
            <li
              className="absolute top-[0px] left-[calc(50%_+_235.5px)]  leading-xl font-semibold cursor-pointer"
              onClick={onStoreTextClick}
            >
              Store
            </li>
          </Link>
        </ul>
      </div>

      {/* my Account */}
      <Link to="/MyAccount" className="text-2xl">
        <div
          className="absolute top-[47px]  text-green-700 left-[calc(50%_+_584px)] leading-xl font-semibold cursor-pointer"
          onClick={onMyAccountTextClick}
        >
          My Account
        </div>
      </Link>
    </div>
  );
};

export default Nav;
