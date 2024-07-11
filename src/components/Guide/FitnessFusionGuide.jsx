import React from "react";
import main_bg2 from "../../images/main_bg2.jpg";
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'
const FitnessFusionGuide = () => {
  return (
    <div className=" ">
      <div className="flex justify-center items-center">
        <img className="w-full h-[800px]" src={main_bg2} alt="main_bg2" />
        <div className="w-[1290px] h-[420px] my-transparant-bg absolute mt-12">
          <div className="text-white w-full flex flex-col justify-center items-center p-12">
            <h1 className="text-[80px]  mt-5 uppercase font-bebas">
              fitness Fusion <span className="text-[#1DA1D2]">guide</span>{" "}
            </h1>
            <div className=" w-[500px] h-1 bg-blue-500 mb-8 "></div>

            <p className="text-[40px] font-poppin ">
              4 WEEK MEAL PLAN & 12 WEEK WORKOUT GUIDE
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
        <div className="w-full text-[16px] text-center py-[65px]   ">
          <h1 className=" text-[70px] uppercase">
            how to use this <span className="text-[#1DA1D2]">plan</span>{" "}
          </h1>
          <div className="flex justify-center items-center w-full ">
            <div className="w-[1300px] h-[220px] flex flex-col justify-center items-center border-2 border-[#1DA1D2] text-[18px]">
              <p className="font-poppin">
                At the Green Gym Group, we believe that having a healthy
                lifestyle doesn’t need to be difficult. With the right
                information <br /> and support, anyone can achieve their goals.
              </p>
              <br />
              <p className="font-poppin">
                Each section within the portal can be combined with one another
                to create a total health and fitness blueprint. <br />{" "}
                Alternatively, each section can be used independently to
                complement other training strategies you may be used <br />{" "}
                depending on your current personal goals and abilities.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-12">
            <div className="w-[1300px]  flex flex-col justify-center items-center  text-[18px]">
              <div className="w-full">
              <div className="w-full py-3 flex  justify-between items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">MEAL PLAN</h1>
                   <Link to="/guide/days" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                  <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">MEAL PLAN</h1>
                   <Link to="/guide/days" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                </div>
                <div className="w-full py-3 flex  justify-between items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">MEAL PLAN</h1>
                   <Link to="/guide/days" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                  <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">MEAL PLAN</h1>
                   <Link to="/guide/days" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FitnessFusionGuide;
