import  { useState } from 'react';
import Nav from '../Top_Nav/Nav';
import male from '../../asset/male.png';
import female from '../../asset/female.png';
import slider_dial from '../../asset/slider_dial.png';

const Bmi = () => {
  // const [GenderSelect, setGenderSelect] = useState(0);
  // const [sliderDialStyle, setSliderDialStyle] = useState({ center:"0px"});
  const [Age,setAge]=useState('');
  const [Weight,setWeight]=useState('');
  const [Height, setHeight]=useState('');
  // const [Bmi,setBmi]=useState('');
  const [TBW, setTBW] = useState("");
  

  // const handleSliderClick = () => {
  //   // Toggle between "Male" and "Female"
  //   const newGender = GenderSelect === 'Male' ? 'Female' : 'Male';
  //   setGenderSelect(newGender);
  //   console.log('slider is clicked');

  //   // Update the slider_dial_style based on the selected gender
  //   const newLeftStyle = newGender === 'Male' ? '-30px' : '60px';
  //   setSliderDialStyle({ left: newLeftStyle });
  // };
//   const CalculateBmi=()=>{
//     if(Age && Height && Weight){
//     // bmi calculation formula
// const HeightinMeters = Height/100; 
// const BmiValue = Weight/(HeightinMeters * HeightinMeters);


// // update the state with the calculated BmiValue
// setBmi(BmiValue.toFixed(2))
//   }
//   }

const CalculateTBW=()=>{
  if(Age && Height && Weight){
  // bmi calculation formula
// const HeightinMeters = Height/100; 
const TBWValue = 2.447-(0.09145*Age)+(0.1074*Height)+(0.3362*Weight)


// update the state with the calculated BmiValue
setTBW(TBWValue.toFixed(2))
}
}
  return (
    <div className="relative bg-whitesmoke w-full h-[982px] overflow-hidden text-center text-13xl text-gray-300 font-sans" id="BMI">
      {/* header section */}
      <header className="absolute top-[2px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-full h-32 text-left text-5xl text-dark-green-color font-sans" id="navigation">
        <Nav />
      </header>
      {/* header section */}
      {/* main section  */}
      <main className="font-semibold text-black">
        <h1 className="m-0 absolute top-[172px] left-[calc(50%-_312px)] text-[40px] leading-[174.53%] font-semibold font-inherit" id="Body_mass_index">
          Calculate Body Mass Index (BMI)
        </h1>
        <p className="m-0 absolute top-[254px] left-[calc(50%-_549px)] text-5xl leading-[150.19%] font-medium font-roboto-flex text-gray text-2xl" id="about_body_mass_index">
          The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
        </p>
        <div className="absolute top-[385px] left-[calc(50%-_216px)] w-[864px] h-[275px] text-5xl text-rosybrown">
          <h2 className="m-0 absolute top-[0px] left-[calc(50%-_254px)] text-13xl leading-[174.53%] font-semibold font-inherit text-gray-300" id="Gender">
            Gender
          </h2>
          <p className="m-0 absolute top-[95px] left-[calc(50%-_432px)] leading-[174.53%] font-semibold" id="female">
            Female
          </p>
          <p className="m-0 absolute top-[95px] left-[calc(50%-_57px)] leading-[174.53%] font-semibold" id="male">
            Male
          </p>
          <p className="m-0 absolute top-[233px] left-[calc(50%-_54px)] leading-[174.53%] font-semibold" id="cm_height">
            cm
          </p>
          <p className="m-0 absolute top-[233px] left-[calc(50%+_404px)] leading-[174.53%] font-semibold" id="weight_kg">
            kg
          </p>
          <div className="absolute top-[86px] left-[108px] w-[243px] h-[60px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[46px] bg-gray-100 box-border border-[1px] border-solid border-base-red-color" id="outer_section" />
            <img
              className="absolute h-[90%] w-[22.22%] top-[5%] right-[39.09%] bottom-[5%] left-[38.68%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
              alt="slider_dial"
              id="slider_dial"
              src={slider_dial}
              // style={sliderDialStyle}
              // onClick={handleSliderClick}
            />
            <img
              className="absolute h-[76.67%] w-[10.7%] top-[11.67%] right-[82.3%] bottom-[11.67%] left-[7%] max-w-full overflow-hidden max-h-full object-cover"
              alt="female"
              src={female}
            />
            <img
              className="absolute h-[71.67%] w-[10.7%] top-[13.33%] right-[7%] bottom-[15%] left-[82.3%] max-w-full overflow-hidden max-h-full object-cover"
              alt="male"
              src={male}
            />
          </div>
        </div>
        <div className="absolute top-[611px] left-[calc(50%-_561px)] w-[263px] h-14">
          <p className="m-0 absolute top-[0px] left-[calc(50%-_131.5px)] leading-[174.53%] font-semibold" id="Age">
            Age
          </p>
          <input className="bg-whitesmoke absolute top-[0px] left-[82px] rounded-md text-center text-5xl pl-2 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] box-border w-[181px] h-14 border-[1px] border-solid border-base-red-color" id="age" type="number" autoComplete='off'     value={Age} onChange={(e)=>{setAge(e.target.value);Age(e.target.value)}}   />
        </div>
        <div className="absolute top-[611px] left-[calc(50%-_154px)] w-[308px] h-14">
          <p className="m-0 absolute top-[0px] left-[calc(50%-_154px)] leading-[174.53%] font-semibold" id="Height">
            Height
          </p>
          <input className="bg-whitesmoke absolute top-[0px] left-[127px] rounded-md text-5xl pl-2 text-center shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] box-border w-[181px] h-14 border-[1px] border-solid border-base-red-color" name="height" id="height" type="number"autoComplete='off'      value={Height} onChange={(e)=>{setHeight(e.target.value);Height(e.target.value)}}   />
        </div>
        <div className="absolute top-[611px] left-[calc(50%+_295px)] w-[314px] h-14">
          <p className="m-0 absolute top-[0px] left-[calc(50%-_157px)] leading-[174.53%] font-semibold" id="weight">
            Weight
          </p>
          <input className="bg-whitesmoke absolute top-[0px] left-[133px] text-5xl pl-2 text-center rounded-md shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] box-border w-[181px] h-14 border-[1px] border-solid border-base-red-color" name="weight" id="weight" type="number" autoComplete='off'     value={Weight} onChange={(e)=>{setWeight(e.target.value);Weight(e.target.value)}}  />
        </div>
        <button className="cursor-pointer py-7 px-[73px] bg-[transparent] absolute top-[807px] left-[calc(50%-_126px)] rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-palegoldenrod" id="Calculate" onClick={CalculateTBW}>
          <div className="relative text-5xl leading-[120%] font-semibold font-open-sans text-dark-green-color text-left">
            Calculate
          </div>
        </button>
      </main>
      {/* main section  */}

      {/* result */}
      {/* <p className="absolute top-[900px] left-[50%] transform [-translate-x-1/2] text-3xl font-semibold">
        {Bmi ? `Your BMI is: ${Bmi}` : ''}
      </p> */}
      <p className="absolute top-[900px] left-[50%] transform [-translate-x-1/2] text-3xl font-semibold">
        {TBW ? `Your BMI is: ${Bmi}` : ''}
      </p>
      {/* result */}
    
    </div>
  );
};

export default Bmi;
