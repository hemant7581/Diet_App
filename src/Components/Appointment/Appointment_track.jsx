import { useCallback, useState } from "react";
import doctor from "../../asset/doctor.png";
import rating from "../../asset/rating.png";
import date from "../../asset/date.png";
import time from "../../asset/time.png";

const Appointment_track = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Appinment overview" to the project
  }, []);

  return (
   <>
      <h1
        className="m-0 absolute top-[170px] left-[458px] text-[36px] leading-[120%] font-semibold font-inherit text-green-700"
        id="My_Appointment"
      >
        My Appointments
      </h1>
      <p
        className="m-0 absolute top-[224px] left-[458px] leading-[120%] text-zinc-500 font-sans"
        id="Appointment_date"
      >
        Tuesday, July 25, 2023
      </p>
      <img
        className="absolute h-[3.11%] w-[2.65%] top-[13.3%] right-[2.65%] bottom-[83.59%] left-[94.71%] max-w-full overflow-hidden max-h-full"
        alt="Appointment_date"
        src={date}
      />
      <div
        className="absolute top-[317px] left-[calc(50%_-_298px)] w-[962px] h-[318px] cursor-pointer text-gray"
        onClick={onGroupContainer3Click}
      >
        <section
          className="absolute h-[318px] w-[962px] top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-whitesmoke shadow-[-6px_6px_25px_rgba(0,_0,_0,_0.2)] box-border border-[1px] border-solid border-stroke-green-color"
          id="appointment_section"
        />
        <img
          className="absolute h-[60.38%] w-[19.96%] top-[16.67%] right-[77.86%] bottom-[22.96%] left-[2.18%] rounded-[60px] max-w-full overflow-hidden max-h-full object-cover"
          alt="doctor_img"
          src={doctor}
        />
        <p
          className="m-0 absolute top-[26.73%] left-[25.36%] text-13xl leading-[156.23%] font-semibold font-sans text-zinc-900"
          id="Doctor_name"
        >
          Dr. Tony Chopper
        </p>
        <p
          className="m-0 absolute top-[43.71%] left-[25.36%] text-13xl leading-[156.23%] text-zinc-500"
          id="doctor_about"
        >
          Nutritionist
        </p>
        <div className="absolute h-[11.64%] w-[16.22%] top-[75.79%] right-[13.1%] bottom-[12.58%] left-[70.69%]">
          <p
            className="m-0 absolute w-[77.17%] top-[0%] left-[22.83%] leading-[156.23%] inline-block text-zinc-900"
            id="confirm_appointment"
          >
            Confirmed
          </p>
          <input
            className="cursor-pointer absolute h-[59.41%] w-[14.27%] top-[18.92%] right-[85.73%] bottom-[21.67%] left-[0%]"
            required={true}
            checked={isChecked}
            id="confirm_radio"
            type="radio"
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div className="absolute h-[11.64%] w-[17.05%] top-[75.79%] right-[57.59%] bottom-[12.58%] left-[27%]">
          <p
            className="m-0 absolute w-[78.43%] top-[0%] left-[22.57%] leading-[156.23%] inline-block  text-black"
            id="date"
          >
            09/07/2023
          </p>
          <img
            className="absolute h-[59.41%] w-[13.48%] top-[18.92%] right-[87.52%] bottom-[21.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt="date_img"
            src={date}
          />
        </div>
        <div className="absolute h-[11.64%] w-[14.55%] top-[75.79%] right-[36.49%] bottom-[12.58%] left-[50%]">
          <p
            className="m-0 absolute w-[74.72%] top-[0%] left-[25.28%] leading-[156.23%] inline-block  text-zinc-900"
            id="time"
          >
            13:30 PM
          </p>
          <img
            className="absolute h-[59.41%] w-[15.8%] top-[18.92%] right-[84.2%] bottom-[21.67%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt="time_img"
            src={time}
          />
        </div>
        <img
          className="absolute h-[5.9%] w-[10.26%] top-[60.46%] right-[64.41%] bottom-[33.65%] left-[25.33%] max-w-full overflow-hidden max-h-full object-cover"
          alt="rating_half"
          src={rating}
        />
      </div>
    </>
  );
};

export default Appointment_track;
