import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PRIVACYPOLICY = () => {
  const navigate = useNavigate();

  const onStoreTextClick = useCallback(() => {
    // Please sync "STORE" to the project
  }, []);

  const onWhoWeAreClick = useCallback(() => {
    // Please sync "ABOUT US" to the project
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

  const onPrivacyPolicyText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    // Please sync "CONTACTUS" to the project
  }, []);

  return (
    <div className="relative bg-beige w-full h-[4258px] overflow-hidden text-left text-5xl text-black font-open-sans">
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[4258px]" />
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_26px_rgba(0,_0,_0,_0.05)] w-[1512px] h-32 text-dark-green-color">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-32" />
        <div className="absolute top-[17px] left-[56px] w-[132px] h-[94px] text-center text-[35.22px] text-black font-roboto-flex">
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
        <div className="absolute top-[46px] left-[calc(50%_-_298px)] w-[595px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] w-[595px] h-[37px]">
            <div
              className="absolute top-[0px] left-[calc(50%_+_235.5px)] leading-[156.23%] font-semibold cursor-pointer"
              onClick={onStoreTextClick}
            >
              Store
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_297.5px)] leading-[156.23%] font-semibold">
              Home
            </div>
            <div
              className="absolute top-[0px] left-[calc(50%_+_38.5px)] leading-[156.23%] font-semibold cursor-pointer"
              onClick={onWhoWeAreClick}
            >
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
      {/* navbar ends here  */}

      {/* main content starts here */}

      {/* heading */}
      <div className="absolute top-[170px] left-[calc(50%_-_251px)] text-29xl tracking-[0.3em] leading-[133%] font-semibold text-stroke-green-color">
        Privacy Policy
      </div>
      {/* heading */}
      <div className="absolute top-[354px] left-[calc(50%_-_716px)] w-[1400px] h-[390px] text-darkslategray">
        <img
          className="absolute top-[0px] left-[calc(50%_+_88px)] w-[612px] h-[390px] object-cover"
          alt=""
          src="/rectangle-318@2x.png"
        />
        <img
          className="absolute top-[0px] left-[685px] w-[695.96px] h-[624.85px] overflow-hidden"
          alt=""
          src="/undraw-private-data-re-4eab-1.svg"
        />
        <div className="absolute top-[5px] left-[0px] w-[694px] h-[379px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[663px]">
            <span>{`Welcome to `}</span>
            <span className="font-semibold">Stay</span>
            <i className="font-semibold">FIT</i>
            <span>{` Your privacy and the security of your personal information are of utmost importance to us. `}</span>
          </div>
          <div className="absolute top-[305px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[611px]">
            {" "}
            By using our website and services, you agree to the terms outlined
            in this Privacy Policy.
          </div>
          <div className="absolute top-[134px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[694px]">
            This Privacy Policy outlines how we collect, use, and safeguard your
            data when you access and interact with our website or use our
            services.
          </div>
        </div>
      </div>
      <div className="absolute top-[974px] left-[54px] w-[1407px] h-[747px] text-inherit text-darkslategray">
        <div className="absolute top-[220px] left-[0px] w-[1407px] h-[527px]">
          <div className="absolute top-[305px] left-[753px] tracking-[0.02em] leading-[156.23%] inline-block w-[654px]">
            <ul className="m-0 pl-8">
              <span className="font-semibold font-open-sans">
                Cookies and Similar Technologies:
              </span>
              <span>
                {" "}
                Like many websites, we use cookies and similar technologies to
                enhance your browsing experience and gather information about
                how our website is used. You can adjust your browser settings to
                manage cookies preferences.
              </span>
            </ul>
          </div>
          <div className="absolute top-[305px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[663px]">
            <ul className="m-0 pl-8">
              <span className="font-semibold font-open-sans">Usage Data:</span>
              <span>
                {" "}
                We may collect information about your interactions with our
                website, such as the pages you visit, the links you click, and
                your usage patterns.
              </span>
            </ul>
          </div>
          <div className="absolute top-[0px] left-[753px] tracking-[0.02em] leading-[156.23%] inline-block w-[654px]">
            <ul className="m-0 pl-8">
              <span className="font-semibold font-open-sans">Health Data:</span>
              <span>
                {" "}
                To provide personalized nutrition and fitness solutions, we may
                collect health-related data, such as weight, height, dietary
                preferences, and fitness activities.
              </span>
            </ul>
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[663px]">
            <ul className="m-0 pl-8">
              <span className="font-semibold font-open-sans">
                Personal Information
              </span>
              <span>
                : When you sign up for an account or use our services, we may
                collect personal information, including your name, email
                address, contact information, and any other information you
                provide to us voluntarily.
              </span>
            </ul>
          </div>
        </div>
        <div className="absolute top-[0px] left-[110px] w-[1184px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[1184px] h-[100px]">
            <div className="absolute top-[0px] left-[590.66px] rounded-sm bg-beige w-[593.34px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[593.34px] h-[100px]" />
          </div>
          <h2 className="m-0 absolute top-[18px] left-[calc(50%_-_531.95px)] tracking-[0.53em] leading-[133%] font-semibold  w-[1086.9px] h-[64px]">
            Information we Collect
          </h2>
        </div>
      </div>
      {/* how do we use it section */}
      <div className="absolute top-[1951px] left-[33px] w-[1458px] h-[599px] text-inherit">
        {/* security */}
        <div className="absolute top-[488px] left-[745px] tracking-[0.02em] leading-[156.23%] inline-block w-[713px]">
          <ul className="m-0 pl-8">
            <span className="font-semibold font-open-sans">{`Security: `}</span>
            <span>
              We take data security seriously and implement measures to protect
              your personal information from unauthorized access or disclosure.
            </span>
          </ul>
        </div>
        {/* security */}

        {/* how do we use it */}
        <div className="absolute top-[0px] left-[307px] w-[832px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[832px] h-[100px]">
            <div className="absolute top-[0px] left-[415.06px] rounded-sm bg-beige w-[416.94px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[416.94px] h-[100px]" />
          </div>
          <div className="absolute top-[18px] left-[calc(50%_-_314px)] tracking-[0.53em] leading-[133%] font-semibold">
            How we use it
          </div>
        </div>
        {/* how do we use it */}

{/* improve services */}
        <div className="absolute top-[488px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[690px]">
          <ul className="m-0 pl-8">
            <span className="font-semibold font-open-sans">{`Improve our Services: `}</span>
            <span>
              Your data helps us analyze user behavior and preferences to
              improve our services and website performance.
            </span>
          </ul>
        </div>
{/* improve services */}

        {/* communication */}
        <div className="absolute top-[220px] left-[745px] tracking-[0.02em] leading-[156.23%] inline-block w-[703px]">
          <ul className="m-0 pl-8">
            <span className="font-semibold font-open-sans">{`Communication: `}</span>
            <span>
              We may use your contact information to send you relevant updates,
              newsletters, or promotional materials. You can opt-out of
              marketing communications at any time.
            </span>
          </ul>
        </div>
        {/* communication */}
        {/* personalization section */}
        <div className="absolute top-[220px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[675px]">
          <ul className="m-0 pl-8">
            <span className="font-semibold font-open-sans">
              Personalization:
            </span>
            <span>
              {" "}
              We use the information you provide to personalize your experience
              and deliver tailored nutrition and fitness recommendations.
            </span>
          </ul>
        </div>
      </div>
            {/* personalization section */}

      {/* datasharing section starts */}
      <div className="absolute top-[2780px] left-[calc(50%_-_666px)] w-[1332px] h-[331px]">
        <div className="absolute top-[220px] left-[calc(50%_-_666px)] tracking-[0.02em] leading-[156.23%] inline-block w-[1332px]">
          We do not sell or rent your personal information to third parties.
          However, we may share certain data with trusted service providers who
          assist us in delivering our services, such as nutritionists and
          fitness experts, to fulfill your requests and improve your experience
          on our platform.
        </div>
        <div className="absolute top-[0px] left-[295px] w-[742px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[742px] h-[100px]">
            <div className="absolute top-[0px] left-[370.16px] rounded-sm bg-beige w-[371.84px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[371.84px] h-[100px]" />
          </div>
          <div className="absolute top-[18px] left-[calc(50%_-_291px)] tracking-[0.53em] leading-[133%] font-semibold">
            Data Sharing
          </div>
        </div>
      </div>

{/* datasharing section ends  */}

{/* legal section starts here */}
      <div className="absolute top-[3341px] left-[calc(50%_-_610px)] w-[1213px] h-[257px]">
        <div className="absolute top-[220px] left-[calc(50%_-_606.5px)] tracking-[0.02em] leading-[156.23%]">
          We may disclose your information if required by law or to protect our
          rights, privacy, safety, or property.
        </div>
        <div className="absolute top-[0px] left-[63px] w-[1094px] h-[100px] text-29xl text-stroke-green-color">
          <div className="absolute top-[0px] left-[0px] w-[1094px] h-[100px]">
            <div className="absolute top-[0px] left-[545.77px] rounded-sm bg-beige w-[548.23px] h-[100px]" />
            <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[548.23px] h-[100px]" />
          </div>
          <div className="absolute top-[18px] left-[calc(50%_-_447px)] tracking-[0.53em] leading-[133%] font-semibold">
            Legal Requirements
          </div>
        </div>
      </div>

{/* laga-section ends here */}

{/*main-section ends here  */}
      {/* footer section starts here */}
      <div className="absolute top-[3858px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
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
          <div className="absolute top-[130px] left-[0px] text-[18px] leading-[150%] font-open-sans text-grey-color text-left">
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
            onClick={onPrivacyPolicyText1Click}
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

export default PRIVACYPOLICY;
