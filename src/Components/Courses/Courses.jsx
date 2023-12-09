import { useCallback } from "react";

const Courses = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    // Please sync "Courses" to the project
  }, []);

  return (
    <div
      className="relative bg-whitesmoke-100 w-[1512px] h-[1767px] overflow-hidden text-left text-5xl text-gray font-sans xl:w-full"
      id="Course"
    >
      <div className="absolute top-[563px] left-[41px] rounded-lg bg-whitesmoke-200 box-border w-[393px] h-[62px] border-[1px] border-solid border-whitesmoke-300" />
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-sans"
        id="top_nav"
      >
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[756px] h-32" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
        <div
          className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.22px] text-black font-roboto-flex"
          onClick={onGroupContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
            <i>stay</i>
            <i className="text-[52.83px] font-roboto">FIT</i>
          </div>
          <img
            className="absolute top-[65.65px] left-[5.87px] w-[126.13px] h-[28.35px]"
            alt=""
            src="/vector-5.svg"
          />
          <img
            className="absolute top-[55.47px] left-[108.26px] w-[11.68px] h-[20.58px]"
            alt=""
            src="/vector-6.svg"
          />
          <img
            className="absolute top-[73.66px] left-[109.59px] w-[22.52px] h-[10.04px]"
            alt=""
            src="/vector-7.svg"
          />
        </div>
        <div className="absolute top-[47px] left-[calc(50%_+_584px)] leading-[156.23%] font-semibold">
          My Account
        </div>
        <div className="absolute top-[47px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
            <div className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold">
              Store
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold">
              Home
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold">
              Who we are
            </div>
            <div className="absolute top-[0px] left-[130px] w-[146px] h-[37px]">
              <div className="absolute top-[0%] left-[0%] leading-[156.23%] font-semibold">
                Our Services
              </div>
            </div>
          </div>
        </div>
      </header>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_396px)] text-[48px] tracking-[0.53em] leading-[133%] text-stroke-green-color font-inherit"
        id="stayfit_learning"
      >
        <i className="font-semibold">StayFIT</i>
        <span className="font-semibold"> Learning</span>
      </h1>
      <p
        className="m-0 absolute top-[392px] left-[calc(50%_-_289px)] text-[46px] leading-[156.23%] font-bold font-sans-hebrew text-center"
        id="Introduction_to_nutrition"
      >
        Introduction to Nutrition
      </p>
      <div className="absolute top-[575px] left-[66px] w-[349px] h-[37px]">
        <img
          className="absolute top-[13.5px] left-[329.5px] w-[21px] h-[11px] cursor-pointer"
          alt=""
          src="/vector-169.svg"
          onClick={onVectorIcon2Click}
        />
        <div className="absolute top-[0px] left-[calc(50%_-_174.5px)] leading-[156.23%] font-semibold">
          Course Overview
        </div>
      </div>
      <div
        className="absolute top-[564px] left-[475px] shadow-[0px_0px_18px_rgba(0,_0,_0,_0.05)] w-[977px] h-[513px] text-xs text-white"
        id="nutrition_introduction_video"
      >
        <img
          className="absolute top-[-1px] left-[-1px] rounded-lg w-[979px] h-[512px] object-cover"
          alt="nutrition_img"
          src="/rectangle-224@2x.png"
        />
        <div className="absolute top-[453px] left-[0px] w-[977px] h-[60px]">
          <section
            className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
            id="youtube_setting"
          >
            <img
              className="absolute top-[0px] left-[0px] w-[977px] h-[60px]"
              alt=""
              src="/rectangle-226.svg"
            />
            <img
              className="absolute top-[17.01px] left-[39.5px] w-[28.5px] h-[25.98px]"
              alt=""
              src="/polygon-3.svg"
            />
            <div className="absolute top-[22px] left-[105px] w-[734px] h-[15px]">
              <div className="absolute top-[0px] left-[0px] rounded-md bg-silver box-border w-[734px] h-[15px] border-[1px] border-solid border-darkgray" />
              <div className="absolute top-[0px] left-[0px] rounded-md bg-mediumslateblue box-border w-[81px] h-[15px] border-[1px] border-solid border-darkgray" />
              <div className="absolute top-[0px] left-[73px] rounded-[50%] bg-white w-[15px] h-[15px]" />
            </div>
            <img
              className="absolute h-[33.33%] w-[2.46%] top-[33.33%] right-[10.24%] bottom-[33.33%] left-[87.31%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <img
              className="absolute h-[38.33%] w-[2.76%] top-[30.83%] right-[1.48%] bottom-[30.83%] left-[95.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute h-[37.75%] w-[2.73%] top-[31.12%] right-[5.8%] bottom-[31.12%] left-[91.47%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/mask-group.svg"
            />
          </section>
          <div className="absolute top-[41px] left-[105px] leading-[156.23%] font-semibold inline-block w-8 h-4">
            04:16
          </div>
          <div className="absolute top-[41px] left-[805px] leading-[156.23%] font-semibold inline-block w-[34px] h-4">
            24:30
          </div>
        </div>
      </div>
      <p
        className="m-0 absolute top-[1101px] left-[1357px] leading-[156.23%] font-semibold text-blue"
        id="Next"
      >{`Next   >`}</p>
      <img
        className="absolute top-[498px] left-[42px] w-[42px] h-[42px] object-cover cursor-pointer"
        alt="click_backward"
        src="/group-744@2x.png"
        onClick={onGroupIcon1Click}
      />
    </div>
  );
};

export default Courses;
