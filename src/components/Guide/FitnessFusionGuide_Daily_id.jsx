import React from "react";
import main_bg2 from "../../images/main_bg2.jpg";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const FitnessFusionGuide_Daily_id = () => {
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
              4 WEEK DAY 1 & 12 WEEK WORKOUT GUIDE
            </p>
          </div>
        </div>
      </div>
      <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
        <div className="w-full text-[16px] text-center py-[65px]   ">
          <h1 className=" text-[70px] uppercase">
            DAY <span className="text-[#1DA1D2]">One</span>{" "}
          </h1>

          <div className="w-full flex justify-center items-center mt-12">
            <div className="w-[1300px]  flex flex-col justify-center items-center  text-[18px]">
            Hello World
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FitnessFusionGuide_Daily_id;
