import { useCallback } from "react";
import Nav from "../Top_Nav/Nav"
import { Line } from "rc-progress";

const Course_track = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Appointment" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[982px] overflow-hidden text-left text-5xl text-gray font-sans xl:w-full">
      <div className="absolute top-[208px] left-[calc(50%_-_248px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold text-stroke-green-color">
        My Courses
      </div>
      <div
        className="absolute top-[392px] left-[calc(50%_-_656px)] w-[1312px] h-[434px] cursor-pointer"
        onClick={onGroupContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whitesmoke shadow-[-6px_6px_25px_rgba(0,_0,_0,_0.2)] box-border border-[1px] border-solid border-base-red-color" />
      </div>
      <p
        className="m-0 absolute top-[644px] left-[421px] leading-[156.23%] font-bold font-sans"
        id="progress"
      >
        Progress:
      </p>
      <p
        className="m-0 absolute top-[681px] left-[544px] text-[16px] leading-[156.23%] font-sans text-grey-color"
        id="percentage"
      >
        8% of 100%
      </p>
        <Line percent={8} strokeWidth={4} strokeColor="#88A0FB" trailColor="#D7DDF4" trailWidth={4} className="absolute top-[0px] left-[0px] box-border w-[42px] h-4 border-[1px] border-solid border-grey-color" />

       
     
      <img
        className="absolute top-[499px] left-[calc(50%_-_603px)] rounded-[84px] w-[220px] h-[220px] object-cover"
        alt=""
        src="/rectangle-362@2x.png"
      />
      {/* nav */}
      <Nav/>
      {/* nav */}
      <p className="m-0 absolute top-[522px] left-[421px] text-[32px] leading-[156.23%] font-semibold">
        Nutrition Fundamentals
      </p>
      <img
        className="absolute top-[595.25px] left-[420.8px] w-[132.4px] h-[24.75px] object-cover"
        id="star"
        alt=""
        src="/group-662@2x.png"
      />
      <div className="absolute top-[504px] left-[1095px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[293px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-dark-green-color border-[1px] border-solid border-palegoldenrod">
        <div className="absolute leading-[120%] font-semibold">
          Continue Learning
        </div>
      </div>
    </div>
  );
};

export default Course_track;
