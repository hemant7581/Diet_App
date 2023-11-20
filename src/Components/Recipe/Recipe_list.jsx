import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import Search from "../../asset/search.png";
import Saved from "../../asset/Saved.png";
import unsaved from "../../asset/unsaved.png";
import grocery_icon from "../../asset/grocery_icon.png";
import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";

const Recipe_list = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onMethodClick = useCallback(() => {
    // Please sync "Recipes" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[2687px] overflow-hidden text-left text-5xl text-black font-sans">
        <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke outline-none  pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic  "
          name="text"
          placeholder="Select Recipes"
          type="text"
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={Search}
        />
      </div>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
        id="Recipes"
      >
        Recipes
      </h1>
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      <img
        className="absolute top-[383.5px] left-[1420.5px] w-[33px] h-[33px] object-cover"
        alt="Saved"
        src={Saved}
      />
      <img
        className="absolute h-[1.27%] w-[1.98%] top-[14.25%] right-[9.26%] bottom-[84.48%] left-[88.76%] max-w-full overflow-hidden max-h-full object-cover"
        alt="Grocery_icon"
        src={grocery_icon}
      />
      <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
        <img
          className="absolute top-[66px] left-[1325px] w-[30px] h-[30px] object-cover"
          alt="unsaved"
          src={unsaved}
        />
        <img
          className="absolute top-[-14px] left-[-37px] rounded-[60px] w-[706px] h-[412px] object-cover"
          alt="Chicken_tikka"
          src={Chicken_tikka}
        />
        <p
          className="m-0 absolute top-[57px] left-[714px] text-[40px] tracking-[0.03em] leading-[120.23%] font-semibold"
          id="Chicken_tikka_masala"
        >
          Chicken tikka masala
        </p>
        <p
          className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%] pb-[10px] border-b-4  border-lime-300 font-semibold inline-block w-[1000px] hover:border-b-4 hover:border-dark-green-color hover:w-1/3"
          id="Ingredients"
        >
          Ingredients
        </p>
        <p
          className="m-0 absolute top-[722px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
          id="For_Marinade"
        >
          For Marinade
        </p>
        <p
          className="m-0 absolute top-[1309px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
          id="For_Sauce"
        >
          For Sauce
        </p> 
        <section
          className="absolute top-[789px] left-[116px] text-inherit tracking-[0.04em] leading-[200.23%] font-sans text-black font-semibold"
          id="Marinade_list"
        >
          <ul className="m-0 pl-8 font-sans font-semibold list-disc">
            <li className="mb-0">4-5 cm peeled Ginger</li>
            <li className="mb-0">4 Garlic cloves</li>
            <li className="mb-0">3-tbsp Yogurt</li>
            <li className="mb-0">2 tsp Lime juice</li>
            <li className="mb-0">1 tbsp finely chopped Coriander leaves</li>
            <li className="mb-0">2 tsp each hot Chilli powder, Paprika & Garam masala powder</li>
            <li className="mb-0">1/2 tsp turmeric</li>
            <li className="mb-0">1 tsp each Cumin & Coriander leaves</li>
            <li className="mb-0">1 tsp fenugreek seeds</li>
            <li>600g Chicken breasts (cut into 4 cm chunks)</li>
          </ul>
        </section>
        <section
          className="absolute top-[1376px] left-[116px] text-inherit tracking-[0.04em] leading-[200.23%] font-sans font-semibold text-black"
          id="For_Sauce_list"
        >
          <ul className="m-0 pl-8 font-sans text-black list-disc">
            <li className="mb-0">2 tbsp Rapeseed oil</li>
            <li className="mb-0">2 thin sliced Onions</li>
            <li className="mb-0">2tbsp tomato puree</li>
            <li className="mb-0">2 tbsp Yoghurt</li>
            <li>{`1 tsp each Chilli powder, turmeric, Paprika & Garam masala.`}</li>
          </ul>
        </section>
        <p
          className="m-0 absolute top-[594px] left-[964px] text-17xl tracking-[0.03em] pb-[10px]  leading-[120.23%] font-semibold cursor-pointer "
          id="Method"
          onClick={onMethodClick}
        >
          Method
        </p>
        <div className="absolute top-[169px] left-[712px] rounded box-border w-[152px] h-[54px]   border-rose-500 border-2 " />
        <div className="absolute top-[243px] left-[712px] rounded box-border w-[152px] h-[54px] border-2 border-amber-600" />
        <div className="absolute top-[243px] left-[884px] rounded box-border w-[152px] h-[54px] border-2 border-blue" />
        <div className="absolute top-[243px] left-[1056px] rounded box-border w-[152px] h-[54px] border-2  border-pink-400" />
        <p
          className="m-0 absolute top-[181px] left-[739px] tracking-[0.03em] leading-[120.23%] font-semibold text-rose-500"
          id="total_calories"
        >
          396 kcal
        </p>
        <p
          className="m-0 absolute top-[255px] left-[764px] tracking-[0.03em] leading-[120.23%] font-semibold  text-amber-600"
          id="total_Fats"
        >
          10 g
        </p>
        <p
          className="m-0 absolute top-[308px] left-[763px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
          id="Fats"
        >
          Fats
        </p>
        <p
          className="m-0 absolute top-[308px] left-[926px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
          id="Carbs"
        >
          Carbs
        </p>
        <p
          className="m-0 absolute top-[308px] left-[1082px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
          id="Proteins"
        >
          Proteins
        </p>
        <p
          className="m-0 absolute top-[255px] left-[936px] tracking-[0.03em] leading-[120.23%] font-semibold text-blue"
          id="total_carbs"
        >
          33 g
        </p>
        <p
          className="m-0 absolute top-[255px] left-[1108px] tracking-[0.03em] leading-[120.23%] font-semibold  text-pink-400"
          id="total_protein"
        >
          45 g
        </p>
        <img
          className="absolute top-[122.25px] left-[713.8px] w-[132.4px] h-[24.75px] object-cover"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[974px] left-[376px] w-[760px] h-[34px]">
        <p
          className="m-0 absolute top-[0px] left-[0px] leading-[156.23%] inline-block w-[279px] h-[34px]"
          id="Prep_time"
        >
          <b>{`Prep time: `}</b>
          <span>60 mins</span>
          <b>{` `}</b>
        </p>
        <p
          className="m-0 absolute top-[0px] left-[626px] leading-[156.23%] inline-block w-[134px] h-[34px]"
          id="serves"
        >
          <b>{`Serves: `}</b>
          <span>4</span>
          <b>{` `}</b>
        </p>
        <p
          className="m-0 absolute top-[0px] left-[calc(50%_-_41px)] leading-[156.23%] inline-block w-[228px] h-[34px]"
          id="difficulty"
        >
          <b>{`Difficulty:  `}</b>
          <span>{`Easy `}</span>
        </p>
      </div>
      {/* <img
        className="absolute top-[1215.5px] left-[calc(50%_-_540.5px)] w-[1081px] h-px"
        alt=""
        src="/vector-159.svg"
      />
      <img
        className="absolute top-[1214px] left-[calc(50%_-_542px)] w-[544px] h-1 object-cover"
        alt="Slider"
        src="/vector-160@2x.png"
      /> */}
      <button
        className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[2310px] left-[calc(50%_-_196.5px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod"
        autoFocus={false}
        id="Generate_Grocery_list"
      >
        <div className="relative text-5xl leading-[120%] font-semibold font-sans text-dark-green-color text-left">
          Generate Grocery list
        </div>
      </button>
    </div>
  );
};

export default Recipe_list;


