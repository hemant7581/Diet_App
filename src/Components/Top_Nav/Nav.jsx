import { useCallback } from "react";
import Logo from "../../asset/Logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
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
    <div className="relative shadow-[0px_2px_26px_rgba(0,_0,_0,_0.09)] w-full h-32 font-sans ">
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
            <Link to="/OurService" className="text-inherit">
            <li className="absolute top-[0%] left-[0%] leading-xl font-semibold">
              Our Services
            </li>
            </Link>
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
