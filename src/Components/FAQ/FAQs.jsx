import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
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

  const onFAQsText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
    <div className="relative bg-beige w-full h-[3078px] overflow-hidden text-left text-9xl text-text-black-color font-open-sans">
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[3078px]" />
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_26px_rgba(0,_0,_0,_0.05)] w-[1512px] h-32 text-5xl text-dark-green-color">
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
      <div className="absolute top-[170px] left-[calc(50%_-_81px)] text-[48px] tracking-[0.3em] leading-[133%] font-semibold text-stroke-green-color">
        FAQs
      </div>
      <div className="absolute top-[488px] left-[79px] w-[598px] h-[322px] text-5xl">
        <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[597px]">{`Welcome to our FAQ page! Here, we address some common queries and concerns to provide you with quick answers and helpful information. `}</div>
        <div className="absolute top-[211px] left-[0px] tracking-[0.02em] leading-[156.23%] inline-block w-[598px]">
          If you don't find the answer you're looking for, please feel free to
          contact our customer support team, and they'll be happy to assist you.
        </div>
      </div>
      <img
        className="absolute top-[354px] left-[837px] w-[584px] h-[590px] object-cover"
        alt=""
        src="/rectangle-344@2x.png"
      />
      <div className="absolute top-[1143px] left-[78px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
          How do i get started with StayFIT?
        </div>
        <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[1288px] left-[78px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
          Are Meal Plans customizable?
        </div>
        <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[1433px] left-[78px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
          Are Meal Plans customizable?
        </div>
        <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[1578px] left-[78px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[99px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold">
          How can i track my progress?
        </div>
        <div className="absolute top-[27px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <img
        className="absolute top-[1166px] left-[806px] w-[646px] h-[653px] object-cover"
        alt=""
        src="/rectangle-345@2x.png"
      />
      <div className="absolute top-[1757px] left-[77px] rounded-7xl bg-whitesmoke box-border w-[598px] h-[136px] overflow-hidden border-[1px] border-solid border-stroke-green-color">
        <div className="absolute top-[30px] left-[30px] leading-[133%] font-semibold inline-block w-[436px]">
          Are workout plans suitable for beginners?
        </div>
        <div className="absolute top-[45.5px] left-[546px] text-13xl leading-[133%] font-tsukimi-rounded">
          +
        </div>
      </div>
      <div className="absolute top-[2122px] left-[calc(50%_-_574px)] leading-[133%] font-semibold text-center inline-block w-[1147px]">
        We hope this FAQ section answers some of your questions. If you have
        additional inquiries, feel free to get in touch with us. Your health and
        satisfaction are our top priorities!
      </div>
      <div className="absolute top-[2333px] left-[calc(50%_-_136px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
        <div className="relative leading-[120%] font-semibold">Contact Us</div>
      </div>
      <div className="absolute top-[2678px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
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
            onClick={onFAQsText1Click}
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

export default FAQ;
