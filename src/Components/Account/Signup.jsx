import { useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo.png";
import Lines from "../../asset/Lines.png";
import Google_logo from "../../asset/Google_logo.png";
import Subtract from "../../asset/Subtract.png";

const Signup = () => {
  const onGroupContainer3Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "LogIN" to the project
  }, []);

  return (
    <form
      className="relative bg-beige w-full h-[982px] overflow-hidden font-sans"
      id="SIGNUP"
    >
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[982px]" />
      <div className="absolute top-[40px] left-[299px] w-[158px] h-[114px]">
        <img src={Logo} alt="" />
      </div>
      <div className="absolute top-[294px] left-[897px] w-[474px] h-7">
        <img
          className="absolute top-[13.5px] left-[-0.5px] w-[212px] h-px object-cover"
          alt="line"
          src={Lines}
        />
        <p
          className="m-0 absolute top-[0px] left-[228px] text-base leading-[174.53%] font-semibold font-open-sans text-grey-color text-center inline-block w-[18px]"
          id="or"
        >
          or
        </p>
        <img
          className="absolute top-[13.5px] left-[262.5px] w-[212px] h-px object-cover"
          alt="line1"
          src={Lines}
        />
      </div>
      <div
        className="absolute top-[198px] left-[891px] w-[486px] h-[68px] cursor-pointer"
        onClick={onGroupContainer3Click}
      >
        <Link
          to={"https://accounts.google.com/signin"}
          className="[text-decoration:none] absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[488px] h-[70px] border-[1px] border-solid border-grey-color"
          id="signin"
          target="_blank"
        />
        <div className="absolute top-[18px] left-[100px] w-[286px] h-8">
          
          <p
            className="m-0 absolute font-inherit top-[0px] left-[62px] text-5xl leading-[120.03%] font-semibold  text-gray text-left inline-block w-56 h-7"
            id="sign_in"
          >
            Sign in with Google
          </p>
          <img
            className="absolute top-[0px] left-[0px] rounded w-8 h-8 object-cover"
            alt="Google_logo"
            src={Google_logo}
          />
        </div>
      </div>
      <div className="absolute top-[350px] left-[891px] w-[486px] h-[102px]">
        <label
          className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold text-gray text-left inline-block w-[70px] h-[34px]"
          htmlFor="Name"
        >
          Name
        </label>
        <input
          className="placeholder:pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
          name="text"
          id="Name"
          placeholder="Enter your Name"
          type="text"
        />
      </div>
      <div className="absolute top-[476px] left-[891px] w-[486px] h-[102px]">
        <label
          className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold  text-gray text-left inline-block w-[97px] h-[34px]"
          htmlFor="Email-ID"
        >
          Email-ID
        </label>
        <input
          className="placeholder:pl-pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
          name="Email"
          id="Email"
          placeholder="Enter your Email-ID"
          type="email"
        />
      </div>
      <div className="absolute top-[602px] left-[891px] w-[486px] h-[102px]">
        <label
          className="cursor-pointer absolute font-inherit top-[0px] left-[6px] text-5xl leading-[174.53%] font-semibold  text-gray text-left inline-block w-28 h-[34px]"
          htmlFor="Password"
        >
          Password
        </label>
        <input
          className="placeholder:pl-3  pl-3 font-inherit bg-whitesmoke absolute top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
          name="Password"
          id="Password"
          placeholder="Enter Password"
          type="password"
        />
      </div>
      <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[764px] left-[1017px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        // autoFocus={true}
        id="Btn"
      >
        <button className="cursor-pointer outline-none border-none p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block">
          Sign Up
        </button>
      </button>
      <div className="relative rounded-[18px] w-[554px] h-[547px] bg-[url('/public/subtract@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute top-[calc(50%_-_35.5px)] left-[101px] rounded-[36px] w-[554px] h-[547px] object-cover"
          alt="healthy_foods"
          id="healthy_foods"
          src={Subtract}
        />
        <div className="absolute top-[645.92px] left-[569.84px] rounded-[50%] bg-gainsboro w-[170.32px] h-[158.69px]" />
        <p
          className="m-0 ml-10 absolute top-[839px] left-[101px] text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left"
          id="tag_line"
        >
          Let’s get fit together
        </p>
      </div>
      {/* p tag */}
      <Link to="/Login"
        className="text-decoration-none absolute top-[889px] left-[1010px] text-base leading-[174.53%] font-semibold font-open-sans text-left cursor-pointer"
        id="Login"
        onClick={onAlreadyHaveAnClick}
      >
        <span className="text-gray">{`Already have an account? `}</span>
        <span className="text-dark-green-color">Log In</span>
      </Link>
{/* create acc prob */}
      <h1 className="absolute top-[50px] font-sans left-[936px] text-[40px] leading-[174.53%] font-semibold  text-gray text-center inline-block w-[396px]">
            Create your Account
          </h1>
{/* create acc prob */}
    </form>
  );
};

export default Signup;
