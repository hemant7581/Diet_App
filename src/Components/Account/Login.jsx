import { useCallback } from "react";
import Logo from "../../asset/Logo.png"
import Lines from "../../asset/Lines.png"
import Google_logo from "../../asset/Google_logo.png"
import Subtract from "../../asset/Subtract.png"

const Login = () => {
  const onGroupContainer3Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    // Please sync "SIGNUP" to the project
  }, []);

  return (
    <form
      className="relative bg-beige font-sans w-full h-[982px] overflow-hidden"
      id="form"
    >
      <div className="absolute top-[0px] left-[756px] bg-whitesmoke w-[756px] h-[982px]" />
      <div className="absolute top-[80px] font-sans left-[915px] text-[40px] leading-[174.53%] font-semibold  text-gray text-center inline-block w-[438px]">
        Log in to your Account
      </div>
      <div className="absolute top-[40px] left-[299px] w-[158px] h-[114px]">
      <img src={Logo} alt="" />
     
      </div>
      <div className="absolute top-[294px] left-[897px] w-[474px] h-7">
        <img
          className="absolute top-[13.5px] left-[-0.5px] w-[212px] h-px"
          alt=""
          src={Lines}
        />
        <img
          className="absolute top-[13.5px] left-[262.5px] w-[212px] h-px"
          alt=""
          src={Lines}
        />
        <div className="absolute top-[0px] left-[228px] font-sans text-base leading-[174.53%] font-semibold  text-grey-color text-center inline-block w-[18px]">
          or
        </div>
      </div>
      <div className="absolute top-[198px] left-[891px] w-[486px] h-[68px]">
        <div
          className="absolute top-[0px] left-[0px] w-[486px] h-[68px] cursor-pointer"
          onClick={onGroupContainer3Click}
        >
          <div className="absolute top-[-1px] left-[-1px] rounded-lg bg-whitesmoke box-border w-[488px] h-[70px] border-[1px] border-solid border-grey-color" />
          <div className="absolute top-[18px] left-[100px] w-[286px] h-8">
            <div className="absolute top-[0px] left-[62px] text-5xl font-sans leading-[120.03%] font-semibold  text-gray text-left inline-block w-56 h-7">
              Sign in with Google
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded w-8 h-8 object-cover"
              alt=""
              src={Google_logo}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[350px] left-[891px] w-[486px] h-[102px]">
        <p
          className="m-0 absolute top-[0px] left-[6px] text-5xl leading-[174.53%] font-sans font-semibold  text-gray text-left inline-block w-[97px] h-[34px]"
          id="Email-ID"
        >
          Email-ID
        </p>
        <input
          className="bg-whitesmoke absolute placeholder:pl-3  pl-3 top-[41px] left-[-1px] rounded-lg box-border w-[488px] font-sans h-[62px] border-[1px] border-solid border-grey-color"
          name="email"
          id="email"
          placeholder="Enter your Email"
          type="email"
        />
      </div>
      <div className="absolute top-[476px] left-[891px] w-[486px] h-[138px]">
        <p
          className="m-0 absolute top-[0px]  font-sans left-[6px] text-5xl leading-[174.53%] font-semibold  text-gray text-left inline-block w-28 h-[34px]"
          id="Password"
        >
          Password
        </p>
        <a
          className="[text-decoration:none] absolute top-[110px] left-[0px] text-base leading-[174.53%] font-sans font-semibold text-dark-green-color text-left"
          id="forgotpass"
        >
          Forgot password?
        </a>
        <input
          className="bg-whitesmoke absolute placeholder:pl-3  pl-3 font-sans top-[41px] left-[-1px] rounded-lg box-border w-[488px] h-[62px] border-[1px] border-solid border-grey-color"
          name="password"
          id="password"
          placeholder="Enter Password"
          type="password"
        />
      </div>
      <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[764px] left-[1026px] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        id="button"
      >
        <div className="relative text-5xl leading-[120%] font-sans font-semibold  text-dark-green-color text-left">
          Log In
        </div>
      </button>
      <p
        className="m-0 ml-10 absolute top-[827px] left-[101px] text-5xl leading-[120%] font-sans font-semibold  text-dark-green-color text-left"
        id="fit"
      >
        Let’s get fit together
      </p>
      <div className="relative rounded-[18px] w-[554px] h-[547px] bg-[url('/public/subtract@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <img
          className="absolute top-[calc(50%_-_35.5px)] left-[101px] rounded-[36px] w-[554px] h-[547px] object-cover"
          alt=""
          src={Subtract}
        />
        <div className="absolute top-[645.92px] left-[569.84px] rounded-[50%] bg-gainsboro w-[170.32px] h-[158.69px]" />
      </div>
      <a
        className="[text-decoration:none] absolute top-[889px] left-[1013px] text-base leading-[174.53%] font-semibold font-sans text-left cursor-pointer"
        onClick={onDontHaveAnClick}
      >
        <span className="text-gray font-sans">{`Don’t have an account? `}</span>
        <span className="text-dark-green-color font-sans">Sign Up</span>
      </a>
    </form>
  );
};

export default Login;
