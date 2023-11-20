import Logo from "../../asset/Logo.png";
// import vector-61 from "../../asset/vector-61.svg"
import Footer_img from "../../asset/Footer_img.png";

// import { useCallback } from "react";
// import {useNavigate} from "react-router-dom"

const Footer = () => {
  // define useNavigate
  //     const navigate = useNavigate();

  // // Navigate files through useNavigate Hooks
  //     const onWhoWeAre1Click = useCallback(() => {
  //         // Please sync "ABOUT US" to the project
  //       }, []);

  //       const onFAQsTextClick = useCallback(() => {
  //         // Please sync "FAQs" to the project
  //       }, []);

  //       const onStoreText1Click = useCallback(() => {
  //         // Please sync "STORE" to the project
  //       }, []);

  //       const onTermsOfUse1Click = useCallback(() => {
  //         navigate("/");
  //       }, [navigate]);

  //       const onPrivacyPolicyTextClick = useCallback(() => {
  //         // Please sync "PRIVACY POLICY" to the project
  //       }, []);

  //       const onContactUsText1Click = useCallback(() => {
  //         // Please sync "CONTACTUS" to the project
  //       }, []);
  return (
    <>
      <div className="relative top-[4668px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[0px_-3px_11px_1px_rgba(231,_231,_231,_0.59)] w-[1512px] h-[400px]" />
        <div className="absolute top-[0px] left-[756px] bg-beige w-[756px] h-[400px]" />
        <div className="absolute top-[82px] left-[82px] w-[205px] h-[184px] text-center text-[37px] text-text-black-color font-roboto-flex">
          <div className="absolute top-[0px] left-[0px] w-[142px] h-[100px]">
            <div className="absolute top-[0px] left-[0px] leading-[150%] inline-block w-[134.11px] h-[63px]">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="absolute top-[130px] left-[0px] text-[18px] leading-[150%] font-open-sans text-grey-color text-left">
            <p className="m-0">Copyright © StayFIT LLC.</p>
            <p className="m-0">All rights reserved.</p>
          </div>
        </div>
        <div className="absolute top-[92px] left-[380px] w-[240px] h-[164px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[252px] h-[164px] object-cover"
            alt=""
            src={Footer_img}
          />
        </div>
        <div className="absolute top-[82px] left-[899px] w-[104px] h-[104px]">
          <div className="absolute top-[0px] left-[0px] leading-[150%]">
            Home
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            // onClick={onWhoWeAre1Click}
          >
            Who we are
          </div>
        </div>
        <div className="absolute top-[82px] left-[1071px] w-[106px] h-[178px]">
          <div
            className="absolute top-[148px] left-[0px] leading-[150%] cursor-pointer"
            // onClick={onFAQsTextClick}
          >
            FAQs
          </div>
          <div className="absolute top-[74px] left-[0px] leading-[150%]">
            My Account
          </div>
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            // onClick={onStoreText1Click}
          >
            Store
          </div>
        </div>
        <div className="absolute top-[82px] left-[1245px] w-[120px] h-[178px]">
          <div
            className="absolute top-[0px] left-[0px] leading-[150%] cursor-pointer"
            // onClick={onTermsOfUse1Click}
          >
            Terms of use
          </div>
          <div
            className="absolute top-[74px] left-[0px] leading-[150%] cursor-pointer"
            // onClick={onPrivacyPolicyTextClick}
          >
            Privacy Policy
          </div>
          <div
            className="absolute top-[148px] left-[5px] leading-[150%] cursor-pointer"
            // onClick={onContactUsText1Click}
          >
            Contact us
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
