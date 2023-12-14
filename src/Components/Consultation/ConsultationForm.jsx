import { useCallback } from "react";
import { Link } from "react-router-dom";


const ConsultationForm = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[2656px] overflow-hidden text-left text-13xl text-gray font-sans xl:w-full">
      <img
        className="absolute top-[392px] left-[calc(50%_-_293px)] w-[585px] h-[373px] object-cover"
        alt=""
        src="/rectangle-385@2x.png"
      />
      <div className="absolute top-[208px] left-[calc(50%_-_419px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold text-stroke-green-color">
        Consultation Form
      </div>
      <div className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-5xl text-dark-green-color">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[756px] h-32" />
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
      </div>
      <div className="absolute top-[892px] left-[380px] w-[752px] h-[138px]">
        <b className="absolute top-[0px] left-[0px] leading-[156.23%] inline-block w-[168px] h-[42px]">
          Full Name
        </b>
        <div className="absolute top-[64.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender" />
      </div>
      <div className="absolute top-[1084px] left-[380px] w-[752px] h-[146px]">
        <div className="absolute top-[0px] left-[0px] w-[100px] h-[146px]">
          <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
          <b className="absolute top-[0px] left-[0px] leading-[156.23%]">Age</b>
        </div>
        <div className="absolute top-[0px] left-[437px] w-[315px] h-[124px] text-center">
          <b className="absolute top-[0px] left-[0px] leading-[156.23%]">
            Gender
          </b>
          <div className="absolute top-[74px] left-[0px] w-[121px] h-[50px]">
            <img
              className="absolute top-[7px] left-[-3px] w-9 h-9"
              alt=""
              src="/ellipse-64.svg"
            />
            <div className="absolute top-[0px] left-[48px] leading-[156.23%]">
              Male
            </div>
          </div>
          <div className="absolute top-[74px] left-[159px] w-[156px] h-[50px]">
            <img
              className="absolute top-[7px] left-[-3px] w-9 h-9"
              alt=""
              src="/ellipse-64.svg"
            />
            <div className="absolute top-[0px] left-[48px] leading-[156.23%]">
              Female
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1284px] left-[380px] w-[752px] h-[146px]">
        <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[75px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <b className="absolute top-[0px] left-[0px] leading-[156.23%]">
          Contact
        </b>
        <div className="absolute top-[91px] left-[18px] text-5xl leading-[156.23%] text-lightsteelblue-200">
          +91
        </div>
        <img
          className="absolute top-[103.5px] left-[69.5px] w-[21px] h-[13.74px]"
          alt=""
          src="/vector-161.svg"
        />
      </div>
      <div className="absolute top-[1484px] left-[380px] w-[757px] h-[383px] text-5xl text-lightsteelblue-200">
        <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[755px] h-[312px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[98px] left-[18px] leading-[156.23%]">
          Describe in 0-500 words.
        </div>
        <div className="absolute top-[0px] left-[0px] text-13xl leading-[156.23%] text-gray">
          <b>{`Reason for Consultation `}</b>
          <span>(Include Medical history)</span>
        </div>
      </div>
      <div className="absolute top-[1921px] left-[380px] w-[520px] h-[282px]">
        <div className="absolute top-[227px] left-[270px] w-[63px] h-[31px] text-5xl text-lightsteelblue-100 font-montserrat">
          <div className="absolute top-[0px] left-[0px] w-[63px] h-[31px]">
            <img
              className="absolute top-[17.5px] left-[47.5px] w-[17px] h-[9px]"
              alt=""
              src="/vector-74.svg"
            />
            <div className="absolute top-[0px] left-[0px] leading-[156.23%] font-medium inline-block w-[41px] h-[31px]">
              AM
            </div>
          </div>
        </div>
        <img
          className="absolute h-[14.18%] w-[7.69%] top-[31.91%] right-[0%] bottom-[53.9%] left-[92.31%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <b className="absolute top-[0px] left-[0px] leading-[156.23%]">{`Preferred Date & Time`}</b>
        <div className="absolute top-[72.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[208.5px] left-[-1.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[208.5px] left-[144.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[72.5px] left-[176.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <div className="absolute top-[72.5px] left-[354.5px] rounded-xl box-border w-[103px] h-[75px] border-[3px] border-solid border-lavender" />
        <img
          className="absolute top-[88.5px] left-[122.5px] w-[33px] h-[43px]"
          alt=""
          src="/vector-162.svg"
        />
        <img
          className="absolute top-[88.5px] left-[300.5px] w-[33px] h-[43px]"
          alt=""
          src="/vector-162.svg"
        />
        <b className="absolute top-[221px] left-[118px] leading-[156.23%]">:</b>
      </div>
      <div className="absolute top-[2343px] left-[calc(50%_-_173px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] box-border w-[346px] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] text-5xl text-dark-green-color border-[1px] border-solid border-palegoldenrod">
        <div className="relative leading-[120%] font-semibold">
          Book Appointment
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
