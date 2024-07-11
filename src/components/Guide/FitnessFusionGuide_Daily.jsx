import React from "react";
import main_bg2 from "../../images/main_bg2.jpg";
import Footer from '../footer/Footer'
import { Link } from "react-router-dom";
const FitnessFusionGuide_Daily = () => {
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
           WEEK  <span className="text-[#1DA1D2]">One</span>{" "}
          </h1>
         
          <div className="w-full flex justify-center items-center mt-12">
            <div className="w-[1300px]  flex flex-col justify-center items-center  text-[18px]">
              <div className="w-full">
              <div className="w-full py-3 flex  justify-between items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 1</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                  <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 2</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                </div>
                <div className="w-full py-3 flex  justify-between items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 3</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                  <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 4</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                </div>
                <div className="w-full py-3 flex  justify-between items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 5</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                  <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 6</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
                  </div>
                </div>
                <div className="w-full py-3 flex  justify-center items-center ">
                  <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                    <h1 className="font-bebas">DAY 7</h1>
                   <Link to="#" className="border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px]">CLICK HERE</Link>
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

export default FitnessFusionGuide_Daily;
