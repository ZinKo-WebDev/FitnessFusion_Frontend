import React from "react";
import {useNavigate,NavLink} from 'react-router-dom'
import main_bg2 from "../../images/main_bg2.jpg";
const FitnessFusionGuide_Daily = () => {
  const gotoguide=() => {
    navigate('/user/:id/week/day/:id')
  }
  const navigate=useNavigate()
  return (
    <div>
    {" "}
    <div className="relative flex justify-center items-center">
      <img className="w-full h-[800px]" src={main_bg2} alt="main_bg2" />
      <div className="absolute top-0 left-0 w-full h-[800px] flex justify-center items-center">
        <div className="w-[1290px] h-[420px] my-transparant-bg bg-black bg-opacity-30 rounded-md  mt-12 ">
          <div className="text-white w-full flex flex-col justify-center items-center p-12 ">
            <h1 className="text-[80px]  mt-5 uppercase font-bebas">
              fitness Fusion <span className="text-[#1DA1D2]">guide</span>{" "}
            </h1>
            <div className=" w-[500px] h-1 bg-blue-500 mb-8 "></div>

            <p className="text-[40px] font-poppin ">
            7 DAY MEAL & WORKOUT PLANS 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
      <div className="">
        <div className="w-full text-[16px] text-center py-[65px] uppercase  px-[250px] ">
          <h1 className=" text-[70px] uppercase mb-[40px]">
            how to use this <span className="text-[#1DA1D2]"> plan</span>{" "}
          </h1>
          <div className="w-full border-2 border-[#1DA1D2]  px-[110px] py-[38px]">
            <div className="text-lg tracking-wide">
              <p className="text-center ">
              These training plans have been designed to help strengthen and shape your body whilst improving your overall fitness and general health.{" "}
             
              </p>
              
              <br />
              <p className="">
              The plans have been broken down into two sections, plan A and plan B. Each section lasts 6 weeks. Done correctly the whole plan will last 12 weeks. We recommended you take a break between each 6-week phase to help your body rest and recover.
              </p>
              <br />
              <p className="">
              Rome wasn’t built in a day, so be patient and stay consistent and you will see results.
              </p>
              <br /> <p className="">
              Remember we are here to support you with your goals. If you have any questions or need support one of the team will gladly help you.
              </p>
              <br /> <p className="">
              Good luck and enjoy yourself.
              </p>
              <br />
              <p className="">
              Here are some examples of how this may look depending on what you choose.
              </p>
              <br />
            
            </div>

            <div className="w-full flex justify-center items-center mt-12">
              <div className="w-[1300px]  flex flex-col justify-center items-center  text-[18px]">
                <div className="w-full">
                  <div className="w-full py-3 flex  justify-between items-center ">
                    <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Monday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                    <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Tuesday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                  </div>
                  <div className="w-full py-3 flex  justify-between items-center ">
                    <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Wednesday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                    <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Thursday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                  </div>
                  <div className="w-full py-3 flex  justify-between items-center ">
                    <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Friday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                    <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Saturday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                  </div>
                  <div className="w-full py-3 flex  justify-center items-center ">
                    <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                      <h1 className="font-bebas">Sunday</h1>
                      <button
                      onClick={gotoguide}
                        to="#"
                        className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                      >
                        CLICK HERE
                      </button>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FitnessFusionGuide_Daily;
