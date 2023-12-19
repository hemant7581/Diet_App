import { useCallback } from "react";
import Logo from "../../../asset/Logo.png"
import done from "../../../asset/done.png"
import outer_star from "../../../asset/outer_star.png"

const Payment_done = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  return (
    <div
      className="relative bg-whitesmoke w-full h-[982px] overflow-hidden text-center text-[35.22px] text-black font-sans"
      id="payment_done"
    >
      <div
        className="absolute top-[10px] left-[80px] w-[132px] h-[94px] cursor-pointer font-roboto-flex"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] leading-[150.19%] inline-block w-[124.67px] h-[59.68px]">
          <img src={Logo} alt="Logo" />
        </div>
      
      </div>
      <p
        className="m-0 absolute top-[355px] left-[calc(50%_-_50px)] text-[36px] leading-[120.03%] font-semibold text-gray"
        id="Done!"
      >
        Done!
      </p>
      <p
        className="m-0 absolute top-[calc(50%_-_10px)] left-[calc(50%_-_79px)] text-5xl leading-[120.03%] font-semibold text-grey-color"
        id="order_placed"
      >
        Order Placed!
      </p>
      <img
        className="absolute top-[132.51px] left-[calc(50%_-_100.56px)] rounded-[13px] w-[200.13px] h-[199.98px] object-cover"
        alt="done"
        src={outer_star}
      />
      <img
        className="absolute top-[181px] left-[695px] w-[106px] h-[101px] object-cover"
        alt="done"
        src={done}
      />
      <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[580px] left-[calc(50%_-_126px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        id="continue"
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block"
          id="Continue"
        >
          Continue
        </button>
      </button>
    </div>
  );
};

export default Payment_done;
