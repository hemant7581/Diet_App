import React, {useState} from "react";
import Nav from "../Top_Nav/Nav";
import Sidebar from "../ProPic/Sidebar";
import Profile_picture from "../../asset/Profile_picture.png";
import Above from "../../asset/Above.png";
// import rating from "../../asset/rating.png";
const UnitMeasurement=()=>{
    const [rotation,setRotation]= useState(0)
    const [showDetails, setShowDetails] = useState(true);
    const [isChecked, setIsChecked] = useState(true);

    const onBtnClick=()=>{
        // Toggle between original position (0 degrees) and top position (180 degrees)
     const newRotation = rotation===0 ? -180 : 0;
   setRotation(newRotation);
 setShowDetails(!showDetails);
      // Show/hide details based on the rotation
     //  setShowDetails(!showDetails);
     // }, [rotation, showDetails];
 };
    return(
<div className="relative w-full overflow-hidden h-[1286px] font-sans">
        {/* navbar */}
        <Nav />
      {/* navbar */}

      {/* sidebar */}
      <Sidebar />
      {/* sidebar */}

      {/* upper section */}
      <h1 className="absolute left-[458px] top-[170px] font-sans text-dark-green-color text-17xl font-semibold">
        User Account
      </h1>
      <p className="absolute left-[458px] top-[224px] font-normal text-5xl text-grey-color leading-[28.8px] ">
        Tuesday, July 25, 2023
      </p>
      {/* add border-2 to image    */}
      <img
        src={Profile_picture}
        className="absolute w-[200px] h-[200px] left-[853px] top-[317px] rounded-3xl border-green  outline-none "
        alt=""
        />
      {/* add border-2 to image    */}
      <p className="absolute text-5xl font-inherit font-semibold left-[892px] top-[546px] text-black leading-[29px]">
        Yor Forger
      </p>
      <p className="absolute left-[860px] top-[581px] text-[18px] font-inherit font-normal leading-[28px] text-grey-color ">
        Joined on Jun 30, 2023
      </p>
      {/* upper section */}

      {/* main section */}

<section className='absolute w-[852px] leading-[48px] h-[72px] left-[515px] top-[689px] border border-strokegreen-color rounded-xl'>
 <h1 className='absolute left-[18px] top-[11px] text-13xl font-semibold font-inherit leading-[50px]'>Units of Measurement</h1>
 <img src={Above} alt="" className='absolute left-[808px] top-[24px]' onClick={onBtnClick} style={{ transform: `rotate(${rotation}deg)` }} />
 </section>
{/* main section */}
{showDetails && (
     <section className='absolute w-[852px] leading-[48px] h-[501px] left-[515px] top-[773px] border border-strokegreen-color rounded-xl'>
        {/* first section */}
<p className="absolute left-[18px] top-[24px] text-[#333] text-5xl font-sans leading-10 font-semibold">Energy</p>
<p className="absolute left-[18px] top-[73px] text-[#333] font-sans text-5xl leading-10 font-normal">Calories (Kcal)</p>
{/* leading 7 */}
<p className="absolute left-[18px] top-[118px] text-[#333] font-sans text-5xl leading-[37px] font-normal">Kilo Joules (Kj)</p> 
<input type="radio" name="energy"  className="absolute top-[76px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"  required={true}  onClick={() => setIsChecked(!isChecked)} />
<input type="radio" name="energy"  className="absolute top-[121px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"  required={true}  onClick={() => setIsChecked(!isChecked)} />
<hr className="absolute top-[167px] left-3  w-[828px] stroke-gray"/>
        {/* first section */}

        {/* second section */}
        <p className="absolute left-[18px] top-[179px] text-[#333] text-5xl font-sans leading-10 font-semibold">Length</p>
<p className="absolute left-[18px] top-[228px] text-[#333] font-sans text-5xl leading-10 font-normal">Inch (in)</p>
{/* leading 7 */}
<p className="absolute left-[18px] top-[273px] text-[#333] font-sans text-5xl leading-[37px] font-normal">Centimeters (cm)</p> 
<input type="radio" name="measure"  className="absolute top-[231px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"  required={true}  onClick={() => setIsChecked(!isChecked)} />
<input type="radio" name="measure"  className="absolute top-[276px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"  required={true}  onClick={() => setIsChecked(!isChecked)} />
<hr className="absolute top-[322px] left-3  w-[828px] stroke-gray"/>
        {/* second section */}

        {/* third section */}
        <p className="absolute left-[18px] top-[334px] text-[#333] text-5xl font-sans leading-10 font-semibold">Serving</p>
<p className="absolute left-[18px] top-[383px] text-[#333] font-sans text-5xl leading-10 font-normal">Gram (g) ; Milliliters (ml) ; Liters (L)</p>
{/* leading 7 */}
<p className="absolute left-[18px] top-[428px] text-[#333] font-sans text-5xl leading-[37px] font-normal">Ounces (oz) ; Fluid Ounce (F oz)</p> 
<input type="radio" name="serve"  className="absolute top-[386px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]" required={true}  onClick={() => setIsChecked(!isChecked)} />
<input type="radio" name="serve"  className="absolute top-[431px] left-[804px]  accent-dark-green-color w-[30px] h-[30px]"  required={true}  onClick={() => setIsChecked(!isChecked)} />

        {/* third section */}
     </section>
)}
{/* main section */}
</div>
    )
}
export default UnitMeasurement