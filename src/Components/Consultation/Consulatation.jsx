import { useCallback } from "react";

const CONSULTATION = () => {
  const onGroupContainer3Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onWhoWeAre1Click = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  const onFAQsTextClick = useCallback(() => {
    // Please sync "FAQs" to the project
  }, []);

  const onStoreText1Click = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onTermsOfUseClick = useCallback(() => {
    // Please sync "terms of services" to the project
  }, []);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "PRIVACY POLICY" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "CONTACTUS" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[6064px] overflow-hidden text-left text-5xl text-gray font-sans xl:w-full">
      <div className="absolute top-[392px] left-[100px] w-[1312px] h-[373px] text-9xl">
        <img
          className="absolute top-[0px] left-[815px] w-[497px] h-[373px] object-cover"
          alt=""
          src="/rectangle-385@2x.png"
        />
        <div className="absolute top-[11px] left-[0px] w-[727px] h-[350px]">
          <div className="absolute top-[0px] left-[0px] w-[727px] h-[212px]">
            <div className="absolute top-[124px] left-[0px] leading-[156.23%] inline-block w-[656px]">{`Our experienced nutritionists are here to help you achieve your health and wellness goals. `}</div>
            <b className="absolute top-[0px] left-[0px] text-13xl leading-[156.23%] inline-block w-[727px]">{`Book a consultation to get expert advice tailored to your unique needs. `}</b>
          </div>
          <div className="absolute top-[252px] left-[0px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[282px] h-[98px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
            <div className="relative leading-[120%] font-semibold">
              Book Appointment
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[208px] left-[calc(50%_-_288px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold text-stroke-green-color">
        Consultation
      </div>
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-dark-green-color">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
        <div
          className="absolute top-[17px] left-[56px] w-[132px] h-[94px] cursor-pointer text-center text-[35.22px] text-black font-roboto-flex"
          onClick={onGroupContainer3Click}
        >
          <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
            <i>stay</i>
            <i className="text-[52.83px] font-body-main">FIT</i>
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
      </div>
      <div className="absolute top-[965px] left-[calc(50%_-_158px)] text-27xl leading-[156.23%] font-semibold">
        How it Works?
      </div>
      <div className="absolute top-[1937px] left-[calc(50%_-_91px)] text-27xl leading-[156.23%] font-semibold">
        Why us?
      </div>
      <div className="absolute top-[1137px] left-[137px] w-[1238px] h-[158px] text-13xl text-rosybrown font-montserrat">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-snow w-[1238px] h-[158px]" />
        <div className="absolute top-[54px] left-[64px] w-[1004px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] leading-[156.23%] font-semibold inline-block w-[104px] h-[50px]">
            Step 1
          </div>
          <div className="absolute top-[0px] left-[154.26px] leading-[156.23%] font-medium text-gray inline-block w-[849.74px] h-[49.56px]">
            {" "}
            Fill the Consultation form to book the appointment.
          </div>
        </div>
      </div>
      <div className="absolute top-[1579px] left-[137px] w-[1238px] h-[158px]">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-snow w-[1238px] h-[158px]" />
      </div>
      <div className="absolute top-[1358px] left-[137px] w-[1238px] h-[325px] text-13xl text-rosybrown font-montserrat">
        <div className="absolute top-[0px] left-[0px] rounded-md bg-snow w-[1238px] h-[158px]" />
        <div className="absolute top-[54px] left-[64px] w-[1125px] h-[50px]">
          <div className="absolute top-[0.44px] left-[0px] leading-[156.23%] font-semibold inline-block w-[103px] h-[49.56px]">
            Step 2
          </div>
          <div className="absolute top-[0px] left-[154px] leading-[156.23%] font-medium text-gray inline-block w-[971px] h-[49.56px]">
            We will Connect you with a Specialist with complete detail.
          </div>
        </div>
        <div className="absolute top-[275px] left-[64px] w-[1093px] h-[50px]">
          <div className="absolute top-[0px] left-[0px] leading-[156.23%] font-semibold inline-block w-[103px] h-[49.56px]">
            Step 3
          </div>
          <div className="absolute top-[0px] left-[154px] leading-[156.23%] font-medium text-gray inline-block w-[939px] h-[50px]">
            Have a personalized session and receive expert guidance.
          </div>
        </div>
      </div>
      <div className="absolute top-[2129px] left-[130px] w-[264px] h-[147px]">
        <div className="absolute top-[0px] left-[82px] rounded-[50%] bg-honeydew w-[100.58px] h-[100px]" />
        <div className="absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[264px]">
          Personalized Guidance
        </div>
      </div>
      <div className="absolute top-[2426px] left-[667px] w-[178px] h-44 text-center">
        <div className="absolute top-[0px] left-[39px] rounded-[50%] bg-mistyrose w-[100px] h-[100px]" />
        <img
          className="absolute top-[23px] left-[59px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/fluentmdl2health.svg"
        />
        <div className="absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[178px]">
          Long term Health benefits
        </div>
      </div>
      <div className="absolute top-[2129px] left-[696px] w-[158px] h-[147px] text-center">
        <div className="absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[158px]">
          Expert Advice
        </div>
        <div className="absolute top-[0px] left-[29px] rounded-[50%] bg-lavender w-[100px] h-[100px]" />
      </div>
      <div className="absolute top-[2129px] left-[1156px] w-[229px] h-[147px]">
        <div className="absolute top-[118px] left-[0px] leading-[120%] font-semibold inline-block w-[229px]">
          Tailored Meal Plans
        </div>
        <div className="absolute top-[0px] left-[65px] rounded-[50%] bg-lightcyan w-[100px] h-[100px]" />
        <img
          className="absolute top-[20px] left-[85px] w-[60px] h-[60px] overflow-hidden"
          alt=""
          src="/iconparkoutlinebabymeal.svg"
        />
      </div>
      <img
        className="absolute top-[2149px] left-[232px] w-[60px] h-[60px]"
        alt=""
        src="/vuesaxoutlineprofile2user.svg"
      />
      <img
        className="absolute top-[2149px] left-[745px] w-[60px] h-[60px]"
        alt=""
        src="/vuesaxoutlineuser.svg"
      />
      <img
        className="absolute top-[2192.5px] left-[768.5px] w-[13px] h-2.5"
        alt=""
        src="/vector-154.svg"
      />
      <div className="absolute top-[2802px] left-[calc(50%_-_287px)] text-27xl leading-[156.23%] font-semibold">
        Our Consultation Services
      </div>
      <div className="absolute top-[4783px] left-[calc(50%_-_312px)] text-27xl leading-[156.23%] font-semibold">
        Frequently Asked Questions
      </div>
      <img
        className="absolute top-[4983px] left-[980px] w-[370px] h-[374px] object-cover"
        alt=""
        src="/rectangle-344@2x.png"
      />
      <div className="absolute top-[5109px] left-[160px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden text-7xl border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
          What can I expect during a nutritionist consultation?
        </div>
        <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[4949px] left-[159px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden text-7xl border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
          What is a nutritionist consultation, and why do I need one?
        </div>
        <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[5269px] left-[160px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden text-9xl border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
          Do I need to prepare anything for the consultation?
        </div>
        <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[3033px] left-[140px] w-[1266px] h-[318px] text-inherit font-inherit">
        <img
          className="absolute top-[0px] left-[885px] w-[381px] h-[318px] object-cover"
          alt=""
          src="/rectangle-386@2x.png"
        />
        <div className="absolute top-[41px] left-[0px] w-[651px] h-[236px]">
          <div className="absolute top-[0px] left-[0px] leading-[156.23%] font-semibold">
            <ul className="m-0 pl-12">Initial Nutrition Assessment</ul>
          </div>
          <div className="absolute top-[104px] left-[54px] text-9xl leading-[156%] font-sans inline-block w-[597px]">
            <p className="m-0">
              In-depth evaluation of your diet, lifestyle, and health history.
            </p>
            <p className="m-0">Personalized nutrition recommendations</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[4302px] left-[140px] w-[1266px] h-[318px] text-inherit font-inherit">
        <img
          className="absolute top-[0px] left-[885px] w-[381px] h-[318px] object-cover"
          alt=""
          src="/rectangle-389@2x.png"
        />
        <div className="absolute top-[26px] left-[0px] w-[597px] h-[266px]">
          <div className="absolute top-[0px] left-[0px] leading-[120.23%] font-semibold inline-block w-[407px]">
            <ul className="m-0 pl-12">Meal Planning and Customization</ul>
          </div>
          <div className="absolute top-[134px] left-[0px] text-9xl leading-[156%] font-sans inline-block w-[597px]">
            <p className="m-0">
              Custom meal plans based on your dietary preferences and goals.
            </p>
            <p className="m-0">Tips for successful meal preparation.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[3469px] left-[140px] w-[1266px] h-[318px] text-inherit font-inherit">
        <img
          className="absolute top-[0px] left-[885px] w-[381px] h-[318px] object-cover"
          alt=""
          src="/rectangle-387@2x.png"
        />
        <div className="absolute top-[48px] left-[0px] w-[630px] h-[223px]">
          <div className="absolute top-[0px] left-[0px] leading-[120.23%] font-semibold">
            <ul className="m-0 pl-12">Weight Management Coaching</ul>
          </div>
          <div className="absolute top-[91px] left-[33px] text-9xl leading-[156%] font-sans inline-block w-[597px]">
            <p className="m-0">
              Strategies to reach and maintain a healthy weight.
            </p>
            <p className="m-0">Sustainable lifestyle changes.</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[3888px] left-[140px] w-[1266px] h-[318px] text-inherit font-inherit">
        <img
          className="absolute top-[0px] left-[885px] w-[381px] h-[318px] object-cover"
          alt=""
          src="/rectangle-388@2x.png"
        />
        <div className="absolute top-[26px] left-[0px] w-[597px] h-[266px]">
          <div className="absolute top-[0px] left-[0px] leading-[120.23%] font-semibold inline-block w-[369px]">
            <ul className="m-0 pl-12">Specialized Diets Guidance</ul>
          </div>
          <div className="absolute top-[134px] left-[0px] text-9xl leading-[156%] font-sans inline-block w-[597px]">
            <p className="m-0">
              Advice for specific diets like keto, vegan, gluten-free, and more.
            </p>
            <p className="m-0">Ensuring balanced nutrition.</p>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[0.71%] w-[2.58%] top-[3.6%] right-[6.51%] bottom-[95.69%] left-[90.91%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
      <div className="absolute top-[5664px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37.87px] text-black font-roboto-flex">
          <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[134.11px] h-[63.49px]">
              <i>stay</i>
              <i className="text-[56.8px] font-body-main">FIT</i>
            </div>
            <img
              className="absolute top-[69.84px] left-[6.31px] w-[135.69px] h-[30.16px]"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className="absolute top-[59px] left-[116.46px] w-[12.56px] h-[21.91px]"
              alt=""
              src="/vector-61.svg"
            />
            <img
              className="absolute top-[78.36px] left-[117.89px] w-[24.24px] h-[10.69px]"
              alt=""
              src="/vector-71.svg"
            />
          </div>
          <div className="absolute top-[130px] left-[0px] text-[18px] leading-[150%] font-sans text-grey-color text-left">
            <p className="m-0">Copyright © StayFIT LLC.</p>
            <p className="m-0">All rights reserved.</p>
          </div>
        </div>
        <div className="absolute top-[92px] left-[380px] w-[252px] h-[164px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
            alt=""
            src="/rectangle-347@2x.png"
          />
        </div>
        <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Home
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onWhoWeAre1Click}
          >
            Who we are
          </div>
        </div>
        <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
          <div
            className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onFAQsTextClick}
          >
            FAQs
          </div>
          <div className="absolute top-[74px] left-[0px] leading-[150%]">
            My Account
          </div>
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onStoreText1Click}
          >
            Store
          </div>
        </div>
        <div className="absolute top-[82px] left-[1245px] w-[124px] h-[178px]">
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onTermsOfUseClick}
          >
            Terms of use
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            onClick={onPrivacyPolicyTextClick}
          >
            Privacy Policy
          </div>
          <div
            className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default CONSULTATION;
