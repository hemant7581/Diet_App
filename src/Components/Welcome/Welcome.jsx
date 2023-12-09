import { Link } from "react-router-dom";
import Lime from "../../asset/Lime.png";
import Avacado from "../../asset/Avacado.png";
import Rectangle_five from "../../asset/Rectangle_five.png";
import Rectangle_seven from "../../asset/Rectangle_seven.png";

const Welcome = () => {
  return (
    <>
      <div className="absolute top-[128px] left-[756px] bg-whitesmoke-100 w-[756px] h-[9130px]" />
      <img
        className="absolute top-[711px] left-[558px] w-[174px] h-[174px]"
        alt="Lime"
        src={Lime}
      />
      <img
        className="absolute top-[299px] left-[659px] w-[258px] h-[247px]"
        alt="Lime"
        src={Lime}
      />
      <img
        className="absolute top-[551px] left-[0px] w-[258px] h-[247px]"
        alt="Lime"
        src={Lime}
      />
      <img
        className="absolute top-[165px] left-[399px] w-[163px] h-[156px]"
        alt="Lime"
        src={Lime}
      />
      <img
        className="absolute top-[132px] left-[0px] w-[258px] h-[247px]"
        alt="Lime"
        src={Lime}
      />
      <img
        className="absolute top-[366px] left-[244px] w-[130px] h-[126px]"
        alt="Lime"
        src={Lime}
      />
      <div className="absolute top-[128px] left-[100px] w-[1412px] h-[823px]">
        <img
          className="absolute top-[78px] left-[727px] rounded-[14px] w-[614px] h-[694px] object-cover"
          alt="Avacado"
          src={Avacado}
        />
        <img
          className="absolute top-[0px] left-[800px] w-[114px] h-[272px]"
          alt="Rectangle_five"
          src={Rectangle_five}
        />
        <img
          className="absolute top-[683px] left-[1044px] w-[368px] h-[140px]"
          alt="Rectangle_seven"
          src={Rectangle_seven}
        />
        <p className="absolute top-[260px] left-[calc(50%_-_233px)] text-29xl tracking-[0.53em] leading-[133%] font-semibold font-sans text-strokegreen-color ">
          Welcome
        </p>
        <div className="absolute top-[416px] left-[calc(50%_-_706px)] leading-[120%] inline-block w-[458px]">
          <p className="m-0 font-sans">{`Your trusted resource for healthy eating, nutrition tips, and more. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 font-semibold font-sans ">
            Get a 7-day free meal plan. Try now!
          </p>
        </div>
        <div className="absolute top-[572px] mx-auto rounded-2xl [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))] overflow-hidden flex flex-row items-center justify-center py-7 px-[73px] border-strokegreen-color border-solid border-palegoldenrod-100">
  <Link to="/StartYourJourney" className=" leading-[120%] font-semibold font-sans">
    Start your Journey
  </Link>
</div>

      </div>
    </>
  );
};

export default Welcome;
