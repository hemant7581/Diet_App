import { useState } from "react";
import search from "../../asset/search.png";
import unsaved from "../../asset/unsaved.png";
import Chicken_tikka from "../../asset/Chicken_tikka.png";
import rating from "../../asset/rating.png";
import ratings_full from "../../asset/ratings_full.png";
import nutty from "../../asset/nutty.png";
import oats from "../../asset/oats.png";
import Pesto_Pasta from "../../asset/Pesto_Pasta.png";
import omlette_roll from "../../asset/omlette_roll.png";
import Avacado_toast from "../../asset/Avacado_toast.png";
import saved from "../../asset/saved.png";
import grocery_icon from "../../asset/grocery_icon.png";
import Footer from "../Footer/Footer";
import Nav from "../Top_Nav/Nav";
import { Link } from "react-router-dom";

const Recipes = () => {
  // const [filter, setFilter] = useState('');

  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value);
  // };

  //   const filteredRecipes = yourRecipesArray.filter((recipe) =>
  //   recipe.Course_Name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div className="relative bg-whitesmoke w-[1512px] h-[3228px] overflow-hidden text-left text-5xl text-green-700 leading-[37.49px] font-semibold  font-sans xl:w-full">
      {/* navbar   */}
      <Nav />
      {/* navbar   */}
      {/* main concent */}
      <h1
        className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold  text-stroke-green-color font-sans border-green"
        id="Recipes"
      >
        Recipes
      </h1>
      {/* input */}*{" "}
      <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
        <input
          className="bg-whitesmoke outline-none pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic  "
          name="text"
          placeholder="Select Recipes"
          type="text"
          // value={filter}
          // onChange={handleFilterChange}
        />
        <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
        <img
          className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt="searchhh"
          id="search"
          src={search}
        />
      </div>
      {/* img */}
      {/* popular */}
      <h1
        className="m-0 absolute top-[554px] left-[calc(50%_-_177px)] text-[46px] text-black leading-[156.23%] font-semibold font-inherit"
        id="popular-recipe"
      >
        Popular Recipes
      </h1>
      {/* images */}
      <div
        className="absolute top-[726px] left-[93px] w-[400px] h-[440px] cursor-pointer"
        id="recipe_card"
        // onClick={onGroupDivClick}
      >
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink" />
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px] object-cover"
          alt="saaved"
          id="Saved_vector"
          src={unsaved}
        />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="chicken tikka masala"
            id="chiken_tikka"
            src={Chicken_tikka}
          />
          <p
            className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold"
            id="Recipe_Name"
          >
            Chicken tikka masala
          </p>
        </Link>
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p
          className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color"
          id="kcal"
        >
          396 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px] object-cover"
          alt="ratings"
          id="ratings"
          src={rating}
        />
      </div>
      <div className="absolute top-[1538px] left-[93px] w-[400px] h-[440px]">
        <div
          className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink"
          id="Most_loved_card"
        />
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px] object-cover"
          alt="savedd"
          id="savedd"
          src={unsaved}
        />
      </div>
      {/* images */}
      {/* popular */}
      {/* most loved */}
      <h1
        className="m-0 absolute top-[1366px] left-[calc(50%_-_218px)] text-[46px] text-black leading-[156.23%] font-semibold font-inherit"
        id="popular-recipe"
      >
        Most Loved Recipes
      </h1>
      {/* img */}
      <div className="absolute top-[1538px] left-[93px] w-[400px] h-[440px]">
        <div
          className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink"
          id="Most_loved_card"
        />
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px] object-cover"
          alt="savedd"
          id="savedd"
          src={unsaved}
        />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="Nutty pastry"
            id="Nuttypastry"
            src={nutty}
          />
          <p
            className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold"
            id="NuttyPastry"
          >
            Nutty pastry
          </p>
        </Link>
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p
          className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color"
          id="kcaal"
        >
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px] object-cover"
          alt="rtings"
          id="rtings"
          src={ratings_full}
        />
      </div>
      {/* img */}
      {/* editable */}
      <div className="absolute top-[2128px] left-[93px] w-[400px] h-[440px]">
        <div
          className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px 6px 21px rgba(0,0,0,0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink"
          id="most_loved"
        />
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="chicken_tikka"
            src={Chicken_tikka}
          />
          <p
            className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold"
            id="name"
          >
            Chicken tikka masala
          </p>
        </Link>
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p
          className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color"
          id="calorie"
        >
          396 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[726px] left-[556px] w-[400px] h-[440px]">
        <div
          className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink"
          id="cards"
        />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="avacado"
            src={Avacado_toast}
          />
          <p
            className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold"
            id="name"
          >
            Avocado toast
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p
          className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color"
          id="calorie"
        >
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[1538px] left-[556px] w-[400px] h-[440px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px_6px_21px_rgba(0,_0,_0,_0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink" />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="oats"
            src={oats}
          />
          <p className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold">
            Oats with sliced fruits
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={saved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color">
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="ratings"
          src={rating}
        />
      </div>
      <div className="absolute top-[2128px] left-[556px] w-[400px] h-[440px]">
        <div
          className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px 6px 21px rgba(0,0,0,0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink"
          id="most_loved"
        />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="nutty"
            src={Avacado_toast}
          />
          <p className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold">
            Avocado toast
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color">
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[726px] left-[1019px] w-[400px] h-[440px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px 6px 21px rgba(0,0,0,0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink" />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="omlette_rolls"
            src={omlette_roll}
          />
          <p className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold">
            Omelette roll up
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color">
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="rating"
          src={rating}
        />
      </div>
      <div className="absolute top-[1538px] left-[1019px] w-[400px] h-[440px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px 6px 21px rgba(0,0,0,0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink" />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt=""
            src={Pesto_Pasta}
          />
          <p className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold">
            Pesto pasta
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color">
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="ratings"
          src={ratings_full}
        />
      </div>
      <div className="absolute top-[2128px] left-[1019px] w-[400px] h-[440px]">
        <div className="absolute top-[-1px] left-[-1px] rounded-xl bg-whitesmoke shadow-[6px 6px 21px rgba(0,0,0,0.15)] box-border w-[402px] h-[442px] border-[1px] border-solid border-lightpink" />
        <Link to="/Recipes2">
          <img
            className="absolute top-[-9px] left-[0px] rounded-t-xl rounded-b-21xl w-[422px] h-[242px] object-cover"
            alt="omlette_rolls"
            src={omlette_roll}
          />
          <p className="m-0 absolute top-[244px] left-[30px] tracking-[0.03em] leading-[120.23%] font-semibold">
            Omelette roll up
          </p>
        </Link>
        <img
          className="absolute top-[241px] left-[349px] w-[30px] h-[30px]"
          alt=""
          src={unsaved}
        />
        <div className="absolute top-[295px] left-[28px] rounded box-border w-[152px] h-[54px] border-[2px] border-solid border-base-red-color" />
        <p className="m-0 absolute top-[307px] left-[55px] tracking-[0.03em] leading-[120.23%] font-semibold text-base-red-color">
          501 kcal
        </p>
        <img
          className="absolute top-[364.25px] left-[29.8px] w-[132.4px] h-[24.75px]"
          alt="rating"
          src={ratings_full}
        />
      </div>
      <img
        className="absolute top-[378.5px] left-[1420.5px] w-[33px] h-[33px]"
        alt=""
        src={saved}
      />
      <img
        className="absolute h-[1.05%] w-[1.98%] top-[11.71%] right-[9.13%] bottom-[87.24%] left-[88.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={grocery_icon}
      />
      {/* editable */}
      {/* most loved */}
      {/* main */}
      {/* footer */}
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Recipes;
