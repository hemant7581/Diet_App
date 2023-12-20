
import React ,{useState} from 'react'
import Date from "../../asset/Date.png"
import img_3 from "../../asset/img_3.png"
import rating from "../../asset/rating.png"
import { Link } from 'react-router-dom'


const Order = () => {
    const [isChecked, setIsChecked] = useState(false);

  return (
   <>
      <h1 className='absolute left-[458px] top-[170px] font-inherit font-semibold text-dark-green-color text-4xl'>My Orders</h1>
      <p className='Date font-inherit absolute text-grey-color font-normal text-2xl left-[458px] top-[224px]'>Tuesday, July 25, 2023</p>
      <section className='date' >
        <img src={Date} className='absolute left-[1432px] top-[171px] h-10 w-10'  alt="date"  />
      </section>

      <section className='Order_card absolute w-[962px] h-[318px] left-[458px] top-[317px] rounded-xl  border-2 border-strokegreen-color bg-gray-200 shadow-md'>
        <img src={img_3} className='absolute h-[160px] w-[160px] rounded-[60px] border border-grey-color shadow-md left-[42px] top-16'  alt="" />
        <p className='absolute text-black font-semibold font-inherit text-13xl left-[244px] top-[85px]'>Muscle Blaze - Snack Bar</p>
        <p className='absolute text-grey-color text-13xl font-normal left-[244px] top-[139px]'>Product</p>
        <img src={rating} className='absolute left-[244px] top-[193px] w-[98px] h-[18px]' alt="rating" />
        
        {/* order placing date & put logic here */}
        <p className='absolute inline-flex left-[244px] top-[241px] gap-3 text-black font-inherit font-semibold'>Order Placed on <span><img src={Date} alt="date" className='h-5 w-5  ' /> </span>31/07/2023</p>
        {/* order placing date & put logic here */}

       {/* input_radio btn for confirm */}
       <section>
      <Link to="/OrderOverview">
       <input
            className="cursor-pointer absolute h-[21px] w-[21px] left-[732px] top-[248px] accent-dark-green-color"
            required={true}
            checked={isChecked}
            id="confirm_radio"
            type="radio"
            onChange={() => setIsChecked(!isChecked)}
          /></Link>
          <p className='absolute text-black font-inherit left-[767px] font-5xl font-normal top-[241px] leading-[30px]'>Confirmed</p>
       {/* input_radio btn for confirm */}
       </section>
      </section>
      </>
  )
}

export default Order
