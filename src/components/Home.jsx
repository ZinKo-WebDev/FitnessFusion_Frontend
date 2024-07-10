import React from "react";
import mainbg from "../images/image.png";
import { Link } from "react-router-dom";


import Footer from "./footer/Footer";
import About from "./About";
import Trainer from "./Trainer";
import Subscription from "./Subscription";
export default function Home() {
  return (
    <div className="absolute">
      <div className=" relative my-transparant-bg w-full flex justify-end  text-[16px]">
        <img className=" w-[90%] h-auto z-[-1]" src={mainbg} alt="mainbg" />
        <div className="absolute px-[67px] top-[15%] left-0 text-white w-full font-bebas">
          <h1 className="text-[70px] font-bold tracking-wider">
            FITNESS FUSION
          </h1>
          <h1 className="text-[70px] font-bold text-[#1DA1D2] tracking-wider">
            AND MOBILE FITNESS
          </h1>
          <div className="py-[60px] tracking-wide text-lg">
            <p>
              Level up your fitness and health journey with XLEVELs onsite
              personalized <br /> training, fitness technology and dietitian
              services
            </p>
          </div>
          <div>
            <Link
              to="https://play.google.com/store/apps?hl=en_US&pli=1"
              className="btn btn-primary rounded-md outline outline-blue-600 px-6 py-1 font-bebas text-[35px] font-bold text-[#1DA1D2]"
            >
              GET THE APP
            </Link>
          </div>
          <div className="flex py-[60px]   items-center ">
            <div className=" py-3">
              <h1 className="font-[400] text-[40px] text-[#1DA1D2] text-center">
                05+
              </h1>
              <p className="tracking-wide text-lg">Years of Experience</p>
            </div>
            <div className="m-6 w-[1px] h-[70px] bg-slate-400"></div>
            <div className="text-center py-3">
              <h1 className="font-[400] text-[40px] text-[#1DA1D2]">1000+</h1>
              <p className="tracking-wide text-lg">Members Join</p>
            </div>
            <div className="m-6 w-[1px] h-[70px] bg-slate-400"></div>
            <div className=" py-3">
              <h1 className="font-[400] text-[40px] text-[#1DA1D2] text-center">
                1000+
              </h1>
              <p className="tracking-wide text-lg">Happy members</p>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
     <About></About>
      {/* about section END */}

      {/* trainer section */}
     <Trainer></Trainer>
      {/* Trainer Section END */}


      {/* subscription plan */}
    <Subscription></Subscription>
      {/* subscription plan END */}

      {/* BMI Calculation */}
      <div className="p-12 flex justify-center items-center">
        <div className="w-[48%]">
            <p className="font-poppin text-[#1DA1D2] text-[25px]">CALCULATE BMI</p>
            <h1 className="text-[90px] font-bebas">CALCULATE YOUR <span className="text-[#1DA1D2]">BMI</span></h1>
            
            <div className="flex ">
                <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[170px]"></div>
                <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[70px]"></div>
            </div>
            <div className="flex">

           
            <div className="flex flex-row-reverse pr-3">
                <label className="p-2 font-bold text-slate-500 font-poppin" htmlFor="">IMPERIAL</label>
                <input className="p-2" type="radio" name="imperial" id="" />
               
            </div>
            <div className="flex flex-row-reverse pr-3">
                <label className="p-2 font-bold text-slate-500 font-poppin" htmlFor="">METRIC</label>
                <input className="p-2" type="radio" name="metric" id="" />
               
            </div>
            </div>
            <form action="" className="">
                <div className="py-2">
                    <label className="font-poppin font-bold py-5" htmlFor="">Height</label>
                    <br />
                    <input className="mt-2 border-2 mr-5 border-slate-500 px-3 py-2" type="number" name="feet" id="" placeholder="FT"/>
                    <input className="border-2 mr-5 border-slate-500 px-3 py-2" type="number" name="inch" id="" placeholder="IN"/>
                   
                </div>
                <div className="py-2">
                    <label className="font-poppin font-bold py-5" htmlFor="">Weight</label>
                    <br />
                    <input className="mt-2 border-2 border-slate-500 px-3 py-2 w-[440px]"  type="number" name="weight" id="" placeholder="LBS"/>
                </div>
                <button  className="text-white bg-[#1DA1D2] px-7 py-2 mt-2" type="submit">Calculate</button>
            </form>
        </div>
        <div className="w-[48%] flex justify-center p-12">

 <div className="">
 <table className="w-[800px] border-collapse h-full ">
  <thead>

  <tr className="">
    <th className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">BMI</th>
    <th className="py-5 text-center  border-b-2 border-b-slate-500">WEIGHT STATUS</th>
  </tr>
  </thead>
  <tbody>

  <tr className="">
    <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">Below 18.5</td>
    <td className="py-5 text-center  border-b-2 border-b-slate-500">Underweight</td>
  </tr>
  <tr className="">
    <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">18.5 - 24.9</td>
    <td className="py-5 text-center  border-b-2 border-b-slate-500">Healthy</td>
  </tr>
  <tr className="">
    <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">25.0 - 29.9</td>
    <td className="py-5 text-center  border-b-2 border-b-slate-500">Overweight</td>
  </tr>
  <tr className="">
    <td className="py-5 text-center border-r-2 border-r-slate-500 ">30.0 - and above</td>
    <td className="py-5 text-center  ">Obese</td>
  </tr>
  </tbody>
</table>
  
  <p className="text-center py-5"><span className="font-bold">BMI</span> metabolic rate / <span className="font-bold">BMI</span> body mass index</p>

 </div>
       

        </div>
      </div>
      {/* BMI Calculation END*/}

<Footer></Footer>
    </div>
  );
}
