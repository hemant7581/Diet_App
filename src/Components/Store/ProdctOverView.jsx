import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import Search from "../../asset/search.png";
import Bag from "../../asset/Bag.png";
import logo from "../../asset/logo.png";
import Liked from "../../asset/Liked.png";
import img_3 from "../../asset/img_3.png";
import rating from "../../asset/rating.png";
import star from "../../asset/star.png";
import man from "../../asset/man.png";
import { Link } from "react-router-dom";
import ratings_full from "../../asset/ratings_full.png";
import rating_four from "../../asset/rating_four.png";
import women from "../../asset/women.png";
import Next from "../../asset/Next.png";
import blue from "../../asset/blue.png";
import down from "../../asset/down.png";
const ProdctOverView = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Favs" to the project
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
    <div className="relative bg-whitesmoke w-[1512px] h-[2997px] overflow-hidden text-left text-21xl text-text-black-color font-sans xl:w-full">
      {/* nav */}
      <Nav />
      {/* nav */}
      <h1 className="m-0 absolute top-[208px] left-[calc(50%_-_113px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color inline-block w-[226px]">
        Store
      </h1>
      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke absolute top-[-1px] outline-none  pl-28 left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color"
          placeholder="Enter Products"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="search"
          src={Search}
        />
      </div>

      <img
        className="absolute h-[0.98%] w-[2.08%] top-[12.69%] right-[9.08%] bottom-[86.33%] left-[88.84%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt="liked"
        src={Liked}
        onClick={onVectorIcon2Click}
      />
      <img
        className="bag absolute h-[1.1%] w-[2.18%] top-[12.63%] right-[3.87%] bottom-[86.27%] left-[93.95%] max-w-full overflow-hidden max-h-full object-cover"
        alt="bag"
        src={Bag}
      />
      <img
        className="absolute top-[524px] left-[110px] rounded-xl w-[526px] h-[612px] object-cover"
        alt="mb"
        src={img_3}
      />
      {/* <p
        className="m-0 absolute top-[534px] left-[calc(50%_-_44px)] leading-[156.23%] inline-block w-[576px]"
        id="Panme"
      >
        <span className="block">Muscle Blaze - Snack Bars with </span>
        <span className="block">Rice Crispy, rolled Oats & Dry fruits, Pack of 6 (180 g)</span>
      </p> */}

      <p className="absolute left-[712px] top-[534px] text-[40px] font-sans font-normal leading-[156.227%]">
        Muscle Blaze - Snack Bars with <br />
        Rice Crispy, rolled Oats & Dry
        <br />
        fruits, Pack of 6 (180 g)
      </p>
      {/* <p
        className=" absolute top-[824px] left-[calc(50%_-_44px)] leading-[156.23%] font-semibold"
        id="rs"
      >
        Rs. 399.00
      </p> */}
      <p className="absolute left-[712px] top-[824px] text-[40px] font-semibold font-sans">
        Rs. 399.00
      </p>
      {/* <p
        className="m-0 absolute top-[926px] left-[calc(50%_-_44px)] leading-[156.23%] font-semibold"
        id="quant"
      >
        Quantity
      </p> */}

      <p className="absolute left-[712px] top-[926px] text-[40px] font-semibold font-sans">
        {" "}
        Quantity
      </p>
      <img
        className="absolute h-[0.98%] w-[2.08%] top-[17.79%] right-[3.92%] bottom-[81.22%] left-[94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[759.25px] left-[711.8px] w-[132.4px] h-[24.75px]"
        alt="rating"
        src={rating}
      />
      <div className="absolute top-[1018px] left-[712px] w-[146px] h-[108px] text-white">
        {/* <div className="absolute top-[0px] left-[0px] rounded-xl bg-royalblue w-[146px] h-[108px]" /> */}
        <button
          className="absolute top-[3px] text-[40px]  font-semibold font-sans py-[23px] px-[22px] text-white bg-[#7087FB] rounded-[20px] "
          id="180g"
        >
          180 g
        </button>
      </div>
      <div className="absolute top-[1018px] left-[888px] w-[156px] h-[108px]">
        {/* <div className="absolute top-[0px] left-[0px] rounded-xl box-border w-[146px] h-[108px] border-[1px] border-solid border-royalblue" /> */}
        <button
          className="absolute top-[3px]  text-[40px]  font-sans py-[23px] px-[22px] text-black bg-white rounded-[20px]  font-semibold border border-solid border-[#7087FB]"
          id="240g"
        >
          240 g
        </button>
      </div>

      {/* <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[1246px] left-[calc(50%_-_139px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        id="addtocart"
      > */}
      {/* </button> */}
      <button className="absolute px-[73px] py-[28px] [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] border border-solid border-[#CFF7AA] rounded-2xl left-[617px] top-[1246px] text-5xl leading-[120%] font-semibold font-sans text-dark-green-color text-center overflow-hidden hover:bg-green">
        Add to Cart
      </button>
      <div className="absolute top-[1451px] left-[120px] w-[1332px] h-32">
        <section
          className="absolute top-[0px] left-[0px] rounded-xl bg-whitesmoke shadow-[0px_0px_8px_rgba(0,_0,_0,_0.15)] w-[1332px] h-32"
          id="pdet"
        />
        <p
          className=" text-[40px] absolute top-[33px] left-[calc(50%_-_636px)] leading-[156.23%] font-semibold"
          id="productDetails"
        >
          Product Details
        </p>
        <img
          className="absolute top-[50.5px] left-[1252.5px]  object-cover "
          alt="downarrow"
          src={down}
        />
      </div>
      <div className="absolute top-[1699px] left-[calc(50%_-_111px)] w-[222px] h-[72px] text-[46px]">
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_111px)] leading-[156.23%] font-semibold"
          id="reviews"
        >
          Reviews
        </p>
        <img
          className="absolute h-[34.72%] w-[11.26%] top-[35.64%] right-[-0.23%] bottom-[32.64%] left-[88.96%] max-w-full overflow-hidden max-h-full object-cover"
          alt="starsi"
          src={star}
        />
      </div>
      <div className="absolute top-[1871px] left-[70px] w-[1372px] h-[466px] text-9xl">
        <div className="absolute top-[0px] left-[0px] w-[536px] h-[412px]">
          <section
            className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color"
            id="reviews"
          />
          <img
            className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
            alt="man"
            src={man}
          />
          <p
            className="m-0 absolute top-[100px] left-[288px] leading-[133%] font-semibold"
            id="nsme"
          >
            Sam Smith
          </p>
          <p
            className="m-0 absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[356px]"
            id="comment"
          >
            I've been on the Classic Plan for a month now, and it has made
            healthy eating so effortless!
          </p>
          <img
            className="absolute top-[238px] left-[81px] w-6 h-6 object-cover"
            alt="blue"
            src={blue}
          />
          <img
            className="absolute top-[161px] left-[288px] w-[86px] h-3.5 object-cover"
            alt="rating_full"
            src={ratings_full}
          />
        </div>
        <div className="absolute top-[0px] left-[756px] w-[536px] h-[412px]">
          <section
            className="absolute top-[65px] left-[64px] rounded-17xl bg-whitesmoke box-border w-[473px] h-[348px] border-[1px] border-solid border-grey-color"
            id="2"
          />
          <img
            className="absolute top-[0px] left-[0px] rounded-54xl w-[258px] h-[218px] object-cover"
            alt="women"
            src={women}
          />
          <p
            className="m-0 absolute top-[100px] left-[288px] leading-[133%] font-semibold"
            id="pname"
          >
            Cindy Hart
          </p>
          <p
            className="m-0 absolute top-[256px] left-[117px] text-xl tracking-[0.01em] leading-[120%] inline-block w-[387px]"
            id="2"
          >
            The Classic meal plans provided by StayFIT have made healthy eating
            easy and enjoyable for me. Thank you!
          </p>
          <img
            className="absolute top-[238px] left-[81px] w-6 h-6 object-cover"
            alt="blur"
            src={blue}
          />
          <img
            className="absolute top-[161px] left-[288px] w-[86px] h-3.5 object-cover"
            alt="rating_four"
            src={rating_four}
          />
        </div>
        <img
          className="absolute top-[458px] left-[649px] w-[74px] h-2 object-cover"
          alt=""
          src="/group-595@2x.png"
        />
        <img
          className="absolute top-[218px] left-[1308px] w-16 h-16"
          alt=""
          src={Next}
        />
      </div>

      <img
        className="absolute top-[739.5px] left-[696px] w-[748px] h-px"
        alt=""
        src="/vector-196.svg"
      />
      <img
        className="absolute top-[803.5px] left-[696px] w-[748px] h-px"
        alt=""
        src="/vector-197.svg"
      />
      <img
        className="absolute top-[905.5px] left-[696px] w-[748px] h-px"
        alt=""
        src="/vector-198.svg"
      />
      <div className="absolute top-[2597px] left-[0px] w-[1512px] h-[400px] text-xl text-dark-green-color font-body-main">
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
            onClick={onContactUsTextClick}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdctOverView;
