import { useCallback } from "react";
import Done_img from "../../asset/Done_img.png"
import Black_right from "../../asset/Black_right.png"
import Keto_meal from "../../asset/Keto_meal.png"
import logo from "../../asset/logo.png"


const Result = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "MEAL PLANS" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[982px] overflow-hidden text-center text-5xl text-gray font-montserrat">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke-100 w-[1512px] h-[982px]" />
    <img src={logo} alt="" />
      <p
        className="m-0 absolute top-[505px] left-[calc(50%_-_292px)] font-medium"
        id="plan"
      >{`As per your response this is your ideal meal plan `}</p>
      <h3
        className="m-0 absolute top-[392px] left-[calc(50%_-_64px)] text-[40px] font-semibold font-inherit inline-block w-[129px]"
        id="done"
      >
        Done
      </h3>
      <img
        className="absolute top-[116px] left-[calc(50%_-_190px)] w-[381px] h-[254px] object-cover"
        alt="Done_img"
        src={Done_img}
      />
      <div className="absolute top-[556px] left-[calc(50%_-_332px)] w-[665px] h-[236px] text-left text-[32px]">
        <section
          className="absolute top-[0px] left-[calc(50%_-_332.5px)] rounded-2xl [background:linear-gradient(97.1deg,_#def2fa,_#cae5f1)] w-[665px] h-[236px]"
          id="meal_section"
        />
        <h3
          className="m-0 absolute top-[24px] left-[calc(50%_-_308.5px)] text-inherit leading-[156.23%] font-semibold font-inherit"
          id="keto_meal_plan"
        >
          Keto Meal Plan
        </h3>
        <img
          className="absolute top-[34px] left-[494px] rounded-[50%] w-[150px] h-[150px] object-cover"
          alt="ketomeal"
          src={Keto_meal}
        />
        <p
          className="m-0 absolute top-[92px] left-[24px] text-[28px] leading-[156.23%] inline-block w-[461px] h-[81px]"
          id="low_carb"
        >
          Low-carb, high-fat diet to promote ketosis and fat burning.
        </p>
        <div className="absolute top-[196px] left-[calc(50%_-_308.5px)] w-[120px] h-[17px] text-center text-[16px] text-slategray">
          <p
            className="m-0 absolute top-[0px] left-[calc(50%_-_60px)] text-blue leading-[156.23%] font-medium inline-block w-[120px] h-[17px]"
            id="starts@599"
          >
            Starts @ 599/-
          </p>
        </div>
      </div>
      <div
        className="absolute top-[856px] left-[calc(50%_-_166px)] w-[332px] h-[29px] cursor-pointer text-left"
        onClick={onGroupContainer3Click}
      >
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_166px)] font-medium"
          id="explore_meal"
        >
          Explore more meal plans
        </p>
        <img
          className="absolute top-[2.5px] left-[320.5px] w-[13.62px] h-[23px] object-cover"
          alt="right"
          src={Black_right}
        />
      </div>
    </div>
  );
};

export default Result;
