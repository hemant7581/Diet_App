import React from "react";

const AboutUs = () => {
  return (
    <section>
      <h1
        className="m-0 absolute top-[170px] left-[calc(50%_-_220px)] text-29xl tracking-[0.3em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
        id="welcome"
      >
        Who we are?
      </h1>
      <section className="absolute top-[314px] left-[64px] w-[1447px] h-[607px] text-gray">
        <img
          className="absolute top-[356px] left-[526px] w-[921px] h-[150px]"
          alt="pickHealthyHabits"
          src="/rectangle-509.svg"
        />
        <img
          className="absolute top-[356px] left-[526px] w-[167px] h-[150px]"
          alt=""
          src="/rectangle-510.svg"
        />
        <img
          className="absolute top-[-19px] left-[884px] rounded-xl w-[386px] h-[657px] object-cover"
          id="welcome_img"
          alt=""
          src="/rectangle-506@2x.png"
        />
        <p
          className="m-0 absolute top-[120px] left-[0px] tracking-[0.06em] leading-[156.23%] inline-block w-[669px]"
          id="About_stayFit"
        >
          <span>{`At `}</span>
          <span className="font-semibold">Stay</span>
          <i className="font-semibold">FIT</i>
          <span>{`, we are passionate about empowering insectioniduals to lead healthier and happier lives through personalized nutrition and fitness solutions. `}</span>
        </p>
        <p
          className="m-0 absolute top-[412px] left-[566px] tracking-[0.04em] leading-[156.23%] font-bold text-dark-green-color inline-block w-[252px] h-[38px]"
          id="pick_healthy_habit"
        >
          Pick Healthy Habits
        </p>
      </section>
    </section>
  );
};

export default AboutUs;
