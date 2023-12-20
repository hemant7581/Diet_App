
import React ,{useState} from 'react'
import Date from "../../asset/Date.png"
import img_3 from "../../asset/img_3.png"
import rating from "../../asset/rating.png"
import previous from "../../asset/previous.png"
import upwardArrow from "../../asset/upwardArrow.png"

const OrderOverview = () => {
    const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <img
        src={previous}
        className="absolute w-3 h-6 left-[436px] top-[178px]"
        alt="previous"
      />
      <h1 className="absolute left-[512px] top-[170px] font-inherit font-semibold text-dark-green-color text-4xl">
        My Orders
      </h1>
      <p className="Date font-inherit absolute text-grey-color font-normal text-2xl left-[512px] top-[224px]">
        Tuesday, July 25, 2023
      </p>
      <section className="date">
        <img
          src={Date}
          className="absolute left-[1432px] top-[171px] h-10 w-10"
          alt="date"
        />
      </section>

      <section className="Order_card absolute w-[962px] h-[318px]">
        <img
          src={img_3}
          className="absolute h-[160px] w-[160px] rounded-[60px] border border-grey-color shadow-md left-[458px] top-[381px]"
          alt=""
        />
        <p className="absolute text-black font-semibold font-inherit text-13xl w-[379px]  left-[660px] top-[402px]">
          Muscle Blaze - Snack Bar
        </p>
        <p className="absolute text-grey-color text-13xl font-normal left-[660px] top-[456px]">
          Product
        </p>
        <img
          src={rating}
          className="absolute left-[660px] top-[510px] w-[98px] h-[18px]"
          alt="rating"
        />

        {/* order placing date & put logic here */}
        <p className="absolute inline-flex left-[660px] top-[558px]  gap-3 text-black font-inherit font-semibold">
          Order Placed on{" "}
          <span>
            <img src={Date} alt="date" className="h-5 w-5 " />{" "}
          </span>
          31/07/2023
        </p>
        {/* order placing date & put logic here */}

        {/* input_radio btn for confirm */}
        <section>
          <input
            className="cursor-pointer absolute h-[21px] w-[21px] left-[1148px] top-[565px] accent-dark-green-color "
            required={true}
            checked={isChecked}
            id="confirm_radio"
            type="radio"
            onChange={() => setIsChecked(!isChecked)}
          />
          <p className="absolute text-black font-inherit left-[1183px] top-[558px] font-5xl font-normal  leading-[30px]">
            Confirmed
          </p>
          {/* input_radio btn for confirm */}
        </section>
        <section className="absolute border border-red-color rounded-xl w-[852px] h-[72px] left-[458px] top-[675px] bg-whitesmoke" >
          {/* track order */}
          <p className="absolute text-black font-inherit [background:linear-gradient(93.37deg,_rgba(175,_228,_126,_0.4),_rgba(216,_250,_185,_0.4))]  text-13xl font-semibold leading-[49px]  left-3 top-[11px]">
            Track Order
          </p>
          <img
            src={upwardArrow}
            className="absolute transform -rotate-180 left-[808px] top-[25px]  "
            alt="previous"
          />
          {/* track order */}
        </section>
      </section>
    </>
  );
}

export default OrderOverview;
