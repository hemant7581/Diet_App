
import React ,{useState} from 'react'
import Date from "../../asset/Date.png"
import img_3 from "../../asset/img_3.png"
import rating from "../../asset/rating.png"
import upwardArrow from "../../asset/upwardArrow.png"
import previous from "../../asset/previous.png"

const OrderOverview2 = () => {
    const [isChecked, setIsChecked] = useState(true);

  return (
    <>
    <div className='relative w-full h-[1536px]'>
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
            onClick={() => setIsChecked(!isChecked)}
          />
          <p className="absolute text-black font-inherit left-[1183px] top-[558px] font-5xl font-normal  leading-[30px]">
            Confirmed
          </p>
          {/* input_radio btn for confirm */}
        </section>
        <section className="absolute border-b-2 border-b-grayColor w-[852px] h-[72px] left-[458px] top-[675px] bg-whitesmoke" >
          {/* track order */}
          <p className="absolute text-black font-inherit text-13xl font-semibold leading-[49px]  left-3 top-[11px]">
            Track Order
          </p>
          <img
            src={upwardArrow}
            className="absolute transform font- left-[808px] top-[25px]  "
            alt="previous"
          />
          {/* track order */}
        </section>

      </section>
      <div>
        
        <section className=' absolute rounded-full w-[30px] h-[30px] top-[772px] left-[458px] bg-strokegreen-color'/><span className='left-[516px] top-[769px] absolute text-2xl font-inherit font-semibold'>Confirm</span> <span className='left-[651px] top-[769px] absolute text-2xl font-inherit font-normal text-grey-color leading-[37px]'>31 July, 2023</span>
        
        

        <section className='absolute w-1 h-20 bg-strokegreen-color left-[471px] rounded-xl top-[806px]'/>
        {/* 1 */}
    
        <section className='absolute rounded-full w-[30px] h-[30px] top-[890px] left-[458px] bg-strokegreen-color'/><span className='left-[516px] top-[886px] absolute text-2xl font-inherit font-semibold'>Packed</span> <p className='text-2xl absolute left-[651px] top-[883px] font-inherit font-normal text-grey-color leading-[37px] '>01 Aug, 2023</p>
        
        
        <section className='absolute w-1 h-20 border outline-1 outline-black  rounded-xl left-[471px] top-[924px]'/>
        {/* 2 */}
    
        <section className='absolute rounded-full w-[30px] h-[30px] top-[1011px] left-[458px] border outline-1 outline-black '/><span className='left-[516px] top-[1010px] absolute text-2xl font-inherit font-semibold'>Shipped</span> <span className='text-2xl absolute left-[651px] top-[1008px] font-inherit font-normal text-grey-color leading-[37px] '>02 Aug, 2023</span>
        
        
        <section className='absolute w-1 h-20 border outline-1 outline-black  rounded-xl left-[471px] top-[1045px]'/>
        {/* 3 */}
    
        <section className='absolute rounded-full w-[30px] h-[30px] top-[1132px] left-[458px] border outline-1 outline-black '/><span className='left-[516px] top-[1130px] absolute text-2xl font-inherit font-semibold'>Out of Delivery</span> <span className='text-2xl font-inherit absolute left-[713px] top-[1129px] font-normal text-grey-color leading-[37px] '>05 Aug, 2023</span>
        
        
        <section className='absolute w-1 h-20 border outline-1 outline-black  rounded-xl left-[471px] top-[1166px]'/>
        {/* 4 */}
    
        <section className='absolute rounded-full w-[30px] h-[30px] top-[1253px] left-[458px] border outline-2 outline-black '/><span className='left-[516px] top-[1251px] absolute text-2xl font-inherit font-semibold'>Delivered Successfully</span> <span className='text-2xl font-inherit font-normal absolute left-[785px] top-[1250px] text-grey-color leading-[37px] '>05 Aug, 2023</span>
       
        
      {/* 5 */}
      </div>
      <button className='absolute inline-flex items-center left-[921px] top-[1415px] font-inherit text-dark-green-color text-2xl font-semibold  py-[28px] px-[73px] rounded w-16 h-[29px] border border-solid border-[#CFF7AA] bg-gradient-to-r from-green-300 via-green-300 to-green-200'>Track</button>
      </div>
    </>
  );
}

export default OrderOverview2;

