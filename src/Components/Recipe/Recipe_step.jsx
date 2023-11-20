// // import { useCallback } from "react";
// import Nav from "../Top_Nav/Nav";
// import Search from "../../asset/search.png";
// import Saved from "../../asset/Saved.png";
// import unsaved from "../../asset/unsaved.png";
// import grocery_icon from "../../asset/grocery_icon.png";
// import Chicken_tikka from "../../asset/Chicken_tikka.png";
// import rating from "../../asset/rating.png";

// const Recipe_step = () => {
// //   const onIngredientsTextClick = useCallback(() => {
// //     // Please sync "Recipes" to the project
// //   }, []);

// //   const onGroupContainer3Click = useCallback(() => {
// //     // Please sync "LANDING" to the project
// //   }, []);

//   return (
//   <>
//   <div className="relative bg-whitesmoke w-full h-[2687px] overflow-hidden text-left text-5xl text-black font-sans">
//         <div className="absolute top-[356px] left-[calc(50%_-_488px)] w-[976px] h-[78px]">
//         <input
//           className="bg-whitesmoke outline-none  pl-28 font-medium text-2xl rounded-[10px] absolute top-[-1px] left-[calc(50%_-_489px)] rounded-3xs box-border w-[978px] h-20 border-[1px] border-solid border-stroke-green-color placeholder:text-gray-500 placeholder:text-[18px] placeholder:h-6 placeholder:w-[127px] placeholder:italic  "
//           name="text"
//           placeholder="Select Recipes"
//           type="text"
//         />
//         <div className="absolute top-[-1px] left-[-1px] rounded-3xs bg-whitesmoke box-border w-[88px] h-20 border-[1px] border-solid border-stroke-green-color" />
//         <img
//           className="absolute h-[42.31%] w-[3.38%] top-[28.85%] rounded-[10px] right-[93.9%] bottom-[28.85%] left-[2.72%] max-w-full overflow-hidden max-h-full object-cover"
//           alt="searchhh"
//           id="search"
//           src={Search}
//         />
//       </div>
//       <h1
//         className="m-0 absolute top-[208px] left-[calc(50%_-_165px)] text-[48px] tracking-[0.53em] leading-[133%] font-semibold font-inherit text-stroke-green-color"
//         id="Recipes"
//       >
//         Recipes
//       </h1>
//       <header
//         className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
//         id="top_nav"
//       >
//         <Nav />
//       </header>
//       <img
//         className="absolute top-[383.5px] left-[1420.5px] w-[33px] h-[33px] object-cover"
//         alt="Saved"
//         src={Saved}
//       />
//       <img
//         className="absolute h-[1.27%] w-[1.98%] top-[14.25%] right-[9.26%] bottom-[84.48%] left-[88.76%] max-w-full overflow-hidden max-h-full object-cover"
//         alt="Grocery_icon"
//         src={grocery_icon}
//       />
//       <div className="absolute top-[554px] left-[100px] w-[1352px] h-[1616px]">
//         <img
//           className="absolute top-[66px] left-[1325px] w-[30px] h-[30px] object-cover"
//           alt="unsaved"
//           src={unsaved}
//         />
//         <img
//           className="absolute top-[-14px] left-[-37px] rounded-[60px] w-[706px] h-[412px] object-cover"
//           alt="Chicken_tikka"
//           src={Chicken_tikka}
//         />
//         <p
//           className="m-0 absolute top-[57px] left-[714px] text-[40px] tracking-[0.03em] leading-[120.23%] font-semibold"
//           id="Chicken_tikka_masala"
//         >
//           Chicken tikka masala
//         </p>
//         <p
//           className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%] pb-[10px] border-b-4  border-lime-300 font-semibold inline-block w-[1000px] hover:border-b-4 hover:border-dark-green-color hover:w-1/3"
//           id="Ingredients"
//         >
//           Ingredients
//         </p>
//         <p
//           className="m-0 absolute top-[722px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
//           id="For_Marinade"
//         >
//           For Marinade
//         </p>
//         <p
//           className="m-0 absolute top-[1309px] left-[116px] text-17xl tracking-[0.03em] leading-[120.23%] font-bold"
//           id="For_Sauce"
//         >
//           For Sauce
//         </p> 
//         {/* main */}
// <section>
// <h3
//         className="m-0 absolute top-[1276px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
//         id="step_1"
//       >
//         <p className="m-0">STEP 1</p>
//       </h3>
//       <h3
//         className="m-0 absolute top-[1682px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
//         id="step_2"
//       >
//         <p className="m-0">STEP 2</p>
//       </h3>
//       <h3
//         className="m-0 absolute top-[2045px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
//         id="step_3"
//       >
//         <p className="m-0">STEP 3</p>
//       </h3>
//       <h3
//         className="m-0 absolute top-[2263px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
//         id="step_4"
//       >
//         <p className="m-0">STEP 4</p>
//       </h3>
//       <p
//         className="m-0 absolute top-[1341px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1090px] h-[301px]"
//         id="step_1_explain"
//       >
//         For the marinade, finely grate the ginger and garlic (you should have 1
//         rounded tbsp of each), then mix them together. Put half of this mix into
//         a medium bowl, then stir in the yogurt, lime juice, chopped coriander,
//         chilli, garam masala, paprika and turmeric. Heat a small heavy-based dry
//         pan, tip in the cumin, coriander and fenugreek seeds, then heat briefly
//         until toasted and smelling fragrant (they will start to jump in the
//         pan). Remove and grind to a powder using a pestle and mortar. Stir half
//         into the yogurt mix (save the rest for the sauce). Stir the chicken
//         chunks into the spiced yogurt until well coated. Cover and leave to
//         marinate for at least 30 mins, or overnight if you like
//       </p>
//       <p
//         className="m-0 absolute top-[1747px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1090px] h-[258px]"
//         id="step_2_explain"
//       >
//         Meanwhile, make the sauce. Heat the oil in a large pan. Add the onions,
//         then fry over a medium heat for about 10 mins, stirring occasionally,
//         until softened and turning brown. Stir in the remaining ginger and
//         garlic, and stir-fry for 2 mins. Mix in the paprika, turmeric, garam
//         masala, chilli and the rest of the toasted cumin, coriander and
//         fenugreek. Cook for 1 min, stirring to scrape up the bits from the
//         bottom of the pan. Stir in the tomato purée, then 150ml water. Cook for
//         1 min. Carefully transfer to a food processor or blender. Process to a
//         thick, fairly smooth sauce.
//       </p>
//       <p
//         className="m-0 absolute top-[2110px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1067px] h-[113px]"
//         id="step_3_explain"
//       >
//         Heat the grill to high. Thread the chicken onto 8 wooden skewers (soaked
//         first), then balance them across a baking tray lined with foil, so they
//         are slightly raised over it. Grill for 12-15 mins until cooked and
//         slightly charred around the edges.
//       </p>
//       <p
//         className="m-0 absolute top-[2328px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1067px] h-[149px]"
//         id="step_4_explain"
//       >
//         When ready to serve, reheat the sauce, stirring in any juices from the
//         chicken and a drop more water to thin if necessary (it should be quite
//         thick). Remove from the heat, stir in the yogurt, then season with a
//         pinch of salt. Serve the chicken skewers with the rice, a scattering of
//         coriander and lime wedges.
//       </p>
// </section>

//         {/* main */}
  
//         <p
//           className="m-0 absolute top-[594px] left-[964px] text-17xl tracking-[0.03em] pb-[10px]  leading-[120.23%] font-semibold cursor-pointer "
//           id="Method"
//         //   onClick={onMethodClick}
//         >
//           Method
//         </p>
//         <div className="absolute top-[169px] left-[712px] rounded box-border w-[152px] h-[54px]   border-rose-500 border-2 " />
//         <div className="absolute top-[243px] left-[712px] rounded box-border w-[152px] h-[54px] border-2 border-amber-600" />
//         <div className="absolute top-[243px] left-[884px] rounded box-border w-[152px] h-[54px] border-2 border-blue" />
//         <div className="absolute top-[243px] left-[1056px] rounded box-border w-[152px] h-[54px] border-2  border-pink-400" />
//         <p
//           className="m-0 absolute top-[181px] left-[739px] tracking-[0.03em] leading-[120.23%] font-semibold text-rose-500"
//           id="total_calories"
//         >
//           396 kcal
//         </p>
//         <p
//           className="m-0 absolute top-[255px] left-[764px] tracking-[0.03em] leading-[120.23%] font-semibold  text-amber-600"
//           id="total_Fats"
//         >
//           10 g
//         </p>
//         <p
//           className="m-0 absolute top-[308px] left-[763px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
//           id="Fats"
//         >
//           Fats
//         </p>
//         <p
//           className="m-0 absolute top-[308px] left-[926px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
//           id="Carbs"
//         >
//           Carbs
//         </p>
//         <p
//           className="m-0 absolute top-[308px] left-[1082px] tracking-[0.03em] leading-[120.23%] font-semibold text-text-dark-grey-color"
//           id="Proteins"
//         >
//           Proteins
//         </p>
//         <p
//           className="m-0 absolute top-[255px] left-[936px] tracking-[0.03em] leading-[120.23%] font-semibold text-blue"
//           id="total_carbs"
//         >
//           33 g
//         </p>
//         <p
//           className="m-0 absolute top-[255px] left-[1108px] tracking-[0.03em] leading-[120.23%] font-semibold  text-pink-400"
//           id="total_protein"
//         >
//           45 g
//         </p>
//         <img
//           className="absolute top-[122.25px] left-[713.8px] w-[132.4px] h-[24.75px] object-cover"
//           alt="rating"
//           src={rating}
//         />
//       </div>
//       <div className="absolute top-[974px] left-[376px] w-[760px] h-[34px]">
//         <p
//           className="m-0 absolute top-[0px] left-[0px] leading-[156.23%] inline-block w-[279px] h-[34px]"
//           id="Prep_time"
//         >
//           <b>{`Prep time: `}</b>
//           <span>60 mins</span>
//           <b>{` `}</b>
//         </p>
//         <p
//           className="m-0 absolute top-[0px] left-[626px] leading-[156.23%] inline-block w-[134px] h-[34px]"
//           id="serves"
//         >
//           <b>{`Serves: `}</b>
//           <span>4</span>
//           <b>{` `}</b>
//         </p>
//         <p
//           className="m-0 absolute top-[0px] left-[calc(50%_-_41px)] leading-[156.23%] inline-block w-[228px] h-[34px]"
//           id="difficulty"
//         >
//           <b>{`Difficulty:  `}</b>
//           <span>{`Easy `}</span>
//         </p>
//       </div>
//       {/* <img
//         className="absolute top-[1215.5px] left-[calc(50%_-_540.5px)] w-[1081px] h-px"
//         alt=""
//         src="/vector-159.svg"
//       />
//       <img
//         className="absolute top-[1214px] left-[calc(50%_-_542px)] w-[544px] h-1 object-cover"
//         alt="Slider"
//         src="/vector-160@2x.png"
//       /> */}
    
//     </div>

//   </>
//   );
// };
// export default Recipe_step;



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
          className="m-0 absolute top-[594px] left-[192px]  text-17xl tracking-[0.03em] leading-[120.23%] pb-[10px] border-b-4  border-lime-300 font-semibold inline-block w-[1000px] "
          id="Ingredients"
        >
          Ingredients
        </p>
       
       
        <p
          className="m-0 absolute top-[594px] hover:border-b-4 hover:border-dark-green-color hover:w-1/3 left-[964px] text-17xl tracking-[0.03em] pb-[10px]  leading-[120.23%] font-semibold cursor-pointer "
          id="Method"
          onClick={onMethodClick}
        >
          Method
        </p>
         {/* main */}
 <section className="absolute -top-[600px] -left-[30px]">
 <h3
         className="m-0 absolute top-[1276px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
         id="step_1"
       >
         <p className="m-0">STEP 1</p>
       </h3>
       <h3
         className="m-0 absolute top-[1682px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
         id="step_2"
       >
         <p className="m-0">STEP 2</p>
       </h3>
       <h3
         className="m-0 absolute top-[2045px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
         id="step_3"
       >
         <p className="m-0">STEP 3</p>
       </h3>
       <h3
         className="m-0 absolute top-[2263px] left-[216px] text-17xl leading-[120%] font-semibold font-inherit inline-block w-[113px] h-[41px]"
         id="step_4"
       >
         <p className="m-0">STEP 4</p>
       </h3>
       <p
         className="m-0 absolute top-[1341px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1090px] h-[301px]"
         id="step_1_explain"
       >
         For the marinade, finely grate the ginger and garlic (you should have 1
         rounded tbsp of each), then mix them together. Put half of this mix into
         a medium bowl, then stir in the yogurt, lime juice, chopped coriander,
         chilli, garam masala, paprika and turmeric. Heat a small heavy-based dry
         pan, tip in the cumin, coriander and fenugreek seeds, then heat briefly
         until toasted and smelling fragrant (they will start to jump in the
         pan). Remove and grind to a powder using a pestle and mortar. Stir half
         into the yogurt mix (save the rest for the sauce). Stir the chicken
         chunks into the spiced yogurt until well coated. Cover and leave to
         marinate for at least 30 mins, or overnight if you like
       </p>
       <p
         className="m-0 absolute top-[1747px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1090px] h-[258px]"
         id="step_2_explain"
       >
         Meanwhile, make the sauce. Heat the oil in a large pan. Add the onions,
         then fry over a medium heat for about 10 mins, stirring occasionally,
         until softened and turning brown. Stir in the remaining ginger and
         garlic, and stir-fry for 2 mins. Mix in the paprika, turmeric, garam
         masala, chilli and the rest of the toasted cumin, coriander and
         fenugreek. Cook for 1 min, stirring to scrape up the bits from the
         bottom of the pan. Stir in the tomato purée, then 150ml water. Cook for
         1 min. Carefully transfer to a food processor or blender. Process to a
         thick, fairly smooth sauce.
       </p>
       <p
         className="m-0 absolute top-[2110px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1067px] h-[113px]"
         id="step_3_explain"
       >
         Heat the grill to high. Thread the chicken onto 8 wooden skewers (soaked
         first), then balance them across a baking tray lined with foil, so they
         are slightly raised over it. Grill for 12-15 mins until cooked and
         slightly charred around the edges.
       </p>
       <p
         className="m-0 absolute top-[2328px] left-[216px] tracking-[0.04em] leading-[156%] inline-block w-[1067px] h-[149px]"
         id="step_4_explain"
       >
         When ready to serve, reheat the sauce, stirring in any juices from the
         chicken and a drop more water to thin if necessary (it should be quite
         thick). Remove from the heat, stir in the yogurt, then season with a
         pinch of salt. Serve the chicken skewers with the rice, a scattering of
         coriander and lime wedges.
       </p>
 </section>
         {/* main */}
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
      
    </div>
  );
};

export default Recipe_list;





