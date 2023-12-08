import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Top_Nav/Nav";
import logo from "../../asset/logo.png"
// import Footer from "../Footer/Footer";

const CONTACTUS = () => {
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

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "PRIVACY POLICY" to the project
  }, []);

  const onContactUsText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-beige w-[1512px] h-[4125px] overflow-hidden text-left text-5xl text-text-black-color font-sans xl:w-full ">
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[4125px]" />
      {/* nav */}
      <Nav/>
      {/* nav */}

      {/* main content */}
  
      <div className="absolute top-[170px] left-[calc(50%_-_191px)] text-29xl tracking-[0.3em] leading-[133%] z-10 font-semibold text-stroke-green-color">
        Contact Us
      </div>
      <div className="absolute top-[479px] left-[101px] tracking-[0.02em] leading-[156.23%] inline-block w-[611px]">
        We value your feedback, questions, and inquiries. Our team is here to
        assist you with any concerns you may have.
      </div>
      <div className="absolute top-[690px] left-[101px] tracking-[0.02em] leading-[156.23%] font-semibold inline-block w-[571px]">
        {" "}
        Please feel free to get in touch with us using the contact details
        below:
      </div>
      <div className="absolute top-[1740px] left-[886px] tracking-[0.02em] leading-[156.23%] inline-block w-[496px]">
        Monday - Friday: 9:00 AM to 5:00 PM (IST)
      </div>
      <div className="absolute top-[2480px] left-[calc(50%_-_534px)] tracking-[0.02em] leading-[156.23%]">
        Follow us on social media to stay updated on the latest news, health
        tips, and special offers:
      </div>
      <img
        className="absolute top-[354px] left-[calc(50%_+_72px)] w-[612px] h-[390px] object-cover"
        alt=""
        src="/rectangle-318@2x.png"
      />
      <img
        className="absolute top-[1640px] left-[calc(50%_-_604px)] w-[452px] h-[390px] object-cover"
        alt=""
        src="/rectangle-319@2x.png"
      />
      <div className="absolute top-[864px] left-[200px] w-[1155px] h-[326px] text-inherit text-[inherit]">
        <div className="absolute top-[0px] left-[728px] tracking-[0.02em] leading-[156.23%]">
          <p className="m-0">
            <span className="font-semibold font-sans">
              Business and Partnership Inquiries
            </span>
            <span>:</span>
          </p>
          <ul className="m-0 pl-8">
            <li className="mb-0">
              <span>{`Email: `}</span>
              <a
                className="text-[inherit]"
                href="mailto:partnerships@yourdietwebsite.com"
                target="_blank"
              >
                <span>
                  <span className="[text-decoration:underline]">
                    partnerships@s
                  </span>
                </span>
              </a>
              <span>tayfit.abc</span>
            </li>
            <li>
              <span>Phone: +91 11 22 33 9900</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-[215px] left-[0px] tracking-[0.02em] leading-[156.23%]">
          <p className="m-0">
            <span className="font-semibold font-sans">
              General Inquiries:
            </span>
          </p>
          <ul className="m-0 pl-8">
            <li className="mb-0">
              <span>{`Email: `}</span>
              <a
                className="text-[inherit]"
                href="mailto:info@yourdietwebsite.com"
                target="_blank"
              >
                <span>
                  <span className="[text-decoration:underline]">
                    info@stayfit.a
                  </span>
                </span>
              </a>
              <span>bc</span>
            </li>
            <li>
              <span>Phone: +91 11 22 33 9900</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-[0px] left-[0px] tracking-[0.02em] leading-[156.23%] whitespace-pre-wrap">
          <p className="m-0">
            <span className="font-semibold font-sans">
              Customer Support:
            </span>
          </p>
          <ul className="m-0 pl-8">
            <li className="mb-0">
              <span>{`Email: `}</span>
              <a
                className="text-[inherit]"
                href="mailto:support@yourdietwebsite.com"
                target="_blank"
              >
                <span>
                  <span className="[text-decoration:underline]">
                    support@StayFIT.a
                  </span>
                </span>
              </a>
              <span>bc</span>
            </li>
            <li>
              <span>Phone: +91 11 22 33 9900</span>
            </li>
          </ul>
        </div>
        <div className="absolute top-[211px] left-[728px] tracking-[0.02em] leading-[156.23%] text-text-black-color inline-block w-[392px] h-28">
          <p className="m-0 font-semibold">Address:</p>
          <ul className="m-0 pl-8">
            <li className="mb-0">
              <span className="font-semibold font-sans">Stay</span>
              <i className="font-semibold font-sans">FIT</i>
              <span>
                {" "}
                123 Nutrition Street, Healthyville, State 12345,India
              </span>
            </li>
          </ul>
          <p className="m-0 font-semibold">&nbsp;</p>
          <p className="m-0 font-semibold">{` `}</p>
        </div>
      </div>
      <div className="absolute top-[1420px] left-[340px] w-[832px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[832px] h-[100px]">
          <div className="absolute top-[0px] left-[415.06px] rounded-sm bg-beige w-[416.94px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[416.94px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_326px)] tracking-[0.53em] leading-[133%] font-semibold">
          Working Hours
        </div>
      </div>
      <div className="absolute top-[2260px] left-[387px] w-[738px] h-[100px] text-29xl text-stroke-green-color">
        <div className="absolute top-[0px] left-[0px] w-[738px] h-[100px]">
          <div className="absolute top-[0px] left-[368.17px] rounded-sm bg-beige w-[369.83px] h-[100px]" />
          <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke w-[369.83px] h-[100px]" />
        </div>
        <div className="absolute top-[18px] left-[calc(50%_-_244px)] tracking-[0.53em] leading-[133%] font-semibold">
          Connect us
        </div>
      </div>
      <img
        className="absolute top-[2617px] left-[900px] w-[468px] h-[282px] object-cover"
        alt=""
        src="/rectangle-517@2x.png"
      />
      <img
        className="absolute h-[4.29%] w-[19.84%] top-[65.48%] right-[65.08%] bottom-[30.23%] left-[15.08%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-914.svg"
      />
      <div className="absolute top-[3099px] left-[286px] tracking-[0.05em] leading-[156.23%] text-[inherit] text-center inline-block w-[940px] h-[193px]">
        <p className="m-0">
          <span className="font-semibold font-sans">
            We Value Your Privacy:
          </span>
        </p>
        <p className="m-0">
          <span className="font-semibold font-sans">&nbsp;</span>
        </p>
        <p className="m-0">
          <span>{`Rest assured that any information you provide during your interactions with us will be handled with utmost confidentiality. For more information, please review our `}</span>
          <a
            className="text-[inherit]"
            href="https://chat.openai.com/c/link-to-privacy-policy"
            target="_blank"
          >
            <span>
              <span className="[text-decoration:underline]">
                Privacy Policy
              </span>
            </span>
          </a>
          <span>.</span>
        </p>
      </div>
      <div className="absolute top-[3392px] left-[382px] tracking-[0.05em] leading-[156.23%] text-black text-center inline-block w-[748px] h-[73px]">
        <p className="m-0">
          <span className="font-sans">{`Thank you for choosing `}</span>
          <span className="font-semibold font-sans">Stay</span>
          <i className="font-semibold font-sans">FIT.</i>
          <span>
            {" "}
            We look forward to being a part of your health and wellness journey!
          </span>
        </p>
      </div>
       {/* main content */}

      {/* footer */}
      <footer className="absolute top-[3725px] left-[-1px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37.87px] text-black font-roboto-flex">
   <img src={logo} alt="" />
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
            onClick={onContactUsText1Click}
          >
            Contact us
          </div>
        </div>
      </footer>
      <img
        className="absolute top-[195px] left-[820px] w-[695.96px] h-[624.85px] overflow-hidden"
        alt=""
        src="/undraw-private-data-re-4eab-1.svg"
      />
      {/* footer */}
    </div>
  );
};

export default CONTACTUS;
