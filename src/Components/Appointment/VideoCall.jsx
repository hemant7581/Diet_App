import { useCallback } from "react";
import Nav from "../Top_Nav/Nav";
import mute from '../../asset/mute.png'
import patient from '../../asset/patient.gif'
import doctor from '../../asset/doctor.gif'
import endcall from '../../asset/endcall.png'
import chat from '../../asset/chat.png'
import voice_1 from '../../asset/voice_1.png'
import videoOff from '../../asset/VideoOff.png'

const Videocall = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "LANDING" to the project
  }, []);

  const onEndCallImage2Click = useCallback(() => {
    // Please sync "Videocall" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke w-full h-[952px] overflow-hidden text-left text-5xl text-white font-inter">
      <div className="absolute top-[128px] left-[0px] bg-darkslategray w-[1512px] h-[824px]" />
      <div className="absolute h-[35.06%] w-[86.77%] top-[31.66%] right-[6.61%] bottom-[33.28%] left-[6.61%] rounded-xl bg-whitesmoke shadow-[-6px_6px_25px_rgba(0,_0,_0,_0.2)] box-border hidden border-[1px] border-solid border-base-red-color" />
      <header
        className="absolute top-[0px] left-[0px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.07)] w-[1512px] h-32 text-left text-5xl text-dark-green-color font-open-sans"
        id="top_nav"
      >
      <Nav/>
      </header>
      <img
        className="absolute top-[194px] left-[calc(50%_-_708px)] rounded-xl w-[690px] h-[564px] object-cover"
        alt="doctor"
        src={doctor}
      />
      <div className="absolute top-[698px] left-[60px] w-[127.72px] h-12">
        <div className="absolute top-[0px] left-[0px] rounded-23xl bg-gray w-[127.72px] h-12" />
        <p className="m-0 absolute top-[10px] left-[27px]" id="dr Rin">
          Dr. Rin
        </p>
      </div>
      <img
        className="absolute top-[801px] left-[706px] w-[100px] h-[100px] object-cover"
        alt="end call"
        src={endcall}
      />
      <img
        className="absolute top-[801px] left-[831px] w-[100px] h-[100px] object-cover"
        alt="mute"
        src={mute}
      />
      <img
        className="absolute top-[801px] left-[956px] w-[100px] h-[100px] object-cover cursor-pointer"
        alt="chat"
        src={chat}
        onClick={onEndCallImage2Click}
      />
      <img
        className="absolute bg-gray rounded-full  top-[801px] left-[581px] w-[100px] h-[100px] object-cover"
        alt="video_off"
        src={videoOff}
      />
      <img
        className="absolute top-[698px] left-[678px] w-12 h-12 object-cover"
        alt="voice_1"
        src={voice_1}
      />
      <div className="absolute top-[194px] left-[calc(50%_+_18px)] w-[690px] h-[564px]">
        <img
          className="absolute top-[0px] left-[calc(50%_-_345px)] rounded-xl w-[690px] h-[564px] object-cover"
          alt="patient"
          src={patient}
        />
        <div className="absolute top-[504px] left-[11px] w-[104.23px] h-12">
          <div className="absolute top-[0px] left-[0px] rounded-23xl bg-gray w-[104.23px] h-12" />
          <p
            className="m-0 absolute top-[10px] left-[31px] inline-block w-[43px]"
            id="patient"
          >
            You
          </p>
        </div>
        <img
          className="absolute top-[504px] left-[632px] w-[46px] h-12 object-cover"
          alt="voice_2"
          src={voice_1}
        />
      </div>
    </div>
  );
};

export default Videocall;
