// import { useCallback } from "react";
import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";
import saved from "../../asset/saved.png";
import unsaved from "../../asset/unsaved.png";
import previous_page from "../../asset/previous_page.png";
import Nav from "../../Components/Top_Nav/Nav";

const Grocery_list = () => {
  //   const onGroupContainerClick = useCallback(() => {
  //     // Please sync "LANDING" to the project
  //   }, []);

  //   const onHomeTextClick = useCallback(() => {
  //     // Please sync "LANDING" to the project
  //   }, []);

  //   const onGroupIconClick = useCallback(() => {
  //     // Please sync "Recipes" to the project
  //   }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[2687px] overflow-hidden text-left text-5xl text-text-dark-grey-color font-sans">
      <section
        className="absolute top-[392px] left-[100px] w-[1352px] h-[360px] text-left text-[40px] text-gray font-open-sans"
        id="food_Nutritional_information"
      >
        <img
          className="absolute top-[66px] left-[1325px] w-[30px] h-[30px] object-cover"
          alt="UnSaved"
          src={unsaved}
        />
        <img
          className="absolute top-[-14px] left-[-37px] rounded-[60px] w-[706px] h-[412px] object-cover"
          alt="chicken_tikka_image"
          id="food_nutrition_image"
          src={Chicken_tikka}
        />
        <p
          className="m-0 absolute top-[57px] left-[714px] tracking-[0.03em] leading-[120.23%] text-black font-sans font-semibold"
          id="food_name"
        >
          Chicken tikka masala
        </p>
        <img
          className="absolute top-[122.25px] left-[713.8px] w-[132.4px] h-[24.75px] object-cover"
          alt="food_rating"
          src={rating}
        />
      </section>
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_272px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-sans text-stroke-green-color"
        id="Grocery_list"
      >
        Grocery list
      </h1>
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
        <Nav />
      </header>
      <img
        className="absolute top-[223.5px] left-[1420.5px] w-[33px] h-[33px] object-cover"
        alt="Saved"
        src={saved}
      />
      <div className="absolute top-[872px] left-[calc(50%_-_489px)] w-[978px] h-[1453px] text-center text-13xl text-black font-sans">
        <section
          className="absolute top-[0px] left-[calc(50%_-_489px)] rounded-xl bg-whitesmoke shadow-[0px_0px_30px_rgba(0,_0,_0,_0.39)] box-border w-[978px] h-[1453px] border-[1px] border-solid border-base-red-color"
          id="Ingredients_list"
        />
        <h3
          className="m-0 absolute top-[60px] left-[60px] text-17xl tracking-[0.03em] leading-[120.23%] font-semibold font-inherit text-left inline-block w-[213px]"
          id="Ingredients"
        >
          Ingredients
        </h3>
        <h3
          className="m-0 absolute top-[60px] left-[473px] text-17xl tracking-[0.03em] leading-[120.23%] font-semibold font-inherit text-left inline-block w-[161px]"
          id="Quantity"
        >
          Quantity
        </h3>
        <div className="absolute top-[163px] left-[60px] w-[849px] h-[38px] text-left text-inherit font-inherit">
          <div className="absolute top-[0px] left-[0px] w-[535px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[0px] tracking-[0.03em] leading-[120.23%]"
              id="Chicken_breasts"
            >
              <ul className="m-0 pl-[43px]">Chicken Breasts</ul>
            </p>
            <p
              className="m-0 absolute top-[0px] left-[451px] text-13xl tracking-[0.03em] leading-[120.23%] font-sans text-center"
              id="600g"
            >
              600g
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            // checked={true}
            id="chicken_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[241px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="40g"
            >
              40g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Ginger"
            >
              <ul className="m-0 pl-[43px]">Ginger</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            // checked={true}
            id="ginger_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[319px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="30g"
            >
              30g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Garlic"
            >
              <ul className="m-0 pl-[43px]">Garlic</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            // checked={true}
            id="garlic_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[397px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[535px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[451px] tracking-[0.03em] leading-[120.23%]"
              id="100g"
            >
              100g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="onions"
            >
              <ul className="m-0 pl-[43px]">Onions</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            // checked={true}
            id="onion_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[475px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="70g"
            >
              70g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="yogurt"
            >
              <ul className="m-0 pl-[43px]">Yoghurt</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="yogurt_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[553px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="40g"
            >
              40g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="coriander_leaves"
            >
              <ul className="m-0 pl-[43px]">Coriander leaves</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="coriander_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[631px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="2"
            >
              2
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Limes"
            >
              <ul className="m-0 pl-[43px]">Limes</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="Lime_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[709px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Turmeric"
            >
              <ul className="m-0 pl-[43px]">Turmeric</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="Turmeric_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[787px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Garam_Masala"
            >
              <ul className="m-0 pl-[43px]">Garam masala</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="garam_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[865px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Red_chilli_powder"
            >
              <ul className="m-0 pl-[43px]">Red chilli powder</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="Red_chilli_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[943px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="fenugreek_seed"
            >
              <ul className="m-0 pl-[43px]">Fenugreek seeds</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="fenugreek_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[1021px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="20g"
            >
              20g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Coriander_Leaves"
            >
              <ul className="m-0 pl-[43px]">Coriander seeds</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="coriander_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[1099px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="cumin_powder"
            >
              <ul className="m-0 pl-[43px]">Cumin Powder</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="cumin_check"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[1177px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[503px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[484px] tracking-[0.03em] leading-[120.23%]"
              id="1"
            >
              1
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="RapeSeed_oil"
            >
              <ul className="m-0 pl-[43px]">Rapeseed oil</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="Rapeseed_oil"
            type="checkbox"
          />
        </div>
        <div className="absolute top-[1255px] left-[60px] w-[849px] h-[38px]">
          <div className="absolute top-[0px] left-[0px] w-[526px] h-[38px]">
            <p
              className="m-0 absolute top-[0px] left-[461px] tracking-[0.03em] leading-[120.23%]"
              id="80g"
            >
              80g
            </p>
            <p
              className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[0.03em] leading-[120.23%] font-inherit text-left"
              id="Tomatoes"
            >
              <ul className="m-0 pl-[43px]">Tomatoes</ul>
            </p>
          </div>
          <input
            className="absolute top-[4px] left-[819px] w-[30px] h-[30px]"
            required={true}
            id="Tomatoes_check"
            type="checkbox"
          />
        </div>
      </div>
      <div className="absolute top-[2465px] left-[calc(50%_-_104px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-[1px] border-solid border-palegoldenrod">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left inline-block"
          autoFocus={true}
          id="Done"
        >
          Done
        </button>
      </div>
      <img
        className="absolute top-[224px] left-[100px] w-[46px] h-8 object-cover cursor-pointer"
        alt="Previous_Page"
        id="Previous_Page"
        src={previous_page}
        // onClick={onGroupIconClick}
      />
      <div className="absolute top-[561px] left-[812px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
      <div className="absolute top-[635px] left-[812px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-darkorange" />
      <div className="absolute top-[635px] left-[984px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-cornflowerblue" />
      <div className="absolute top-[635px] left-[1156px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-orchid" />
      <p
        className="m-0 absolute top-[573px] left-[839px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color"
        id="total_food_calorie"
      >
        396 kcal
      </p>
      <p
        className="m-0 absolute top-[647px] left-[864px] tracking-[0.03em] leading-[120.23%] font-semibold text-darkorange"
        id="Total_Fats"
      >
        10 g
      </p>
      <p
        className="m-0 absolute top-[700px] left-[863px] tracking-[0.03em] leading-[120.23%] font-semibold"
        id="Fats"
      >
        Fats
      </p>
      <p
        className="m-0 absolute top-[700px] left-[1026px] tracking-[0.03em] leading-[120.23%] font-semibold"
        id="Carbs"
      >
        Carbs
      </p>
      <p
        className="m-0 absolute top-[700px] left-[1182px] tracking-[0.03em] leading-[120.23%] font-semibold"
        id="Proteins"
      >
        Proteins
      </p>
      <p
        className="m-0 absolute top-[647px] left-[1036px] tracking-[0.03em] leading-[120.23%] font-semibold text-cornflowerblue"
        id="Total_Carbs"
      >
        33 g
      </p>
      <p
        className="m-0 absolute top-[647px] left-[1208px] tracking-[0.03em] leading-[120.23%] font-semibold text-orchid"
        id="Total_Protein"
      >
        45 g
      </p>
    </div>
  );
};

export default Grocery_list;
