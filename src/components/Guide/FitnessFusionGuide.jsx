import React from "react";
import main_bg2 from "../../images/main_bg2.jpg";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
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
        <h1 className="text-center text-[80px]">
          Today <span className="text-[#1DA1D2]">Meal Plans</span>{" "}
        </h1>
        <ul class="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WMgvOd6VOLfsgHBsvZ59igcvKIzGycNNA&s"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WMgvOd6VOLfsgHBsvZ59igcvKIzGycNNA&s"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WMgvOd6VOLfsgHBsvZ59igcvKIzGycNNA&s"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
              width="1216"
              height="640"
            />
          </li>
       
        </ul>
      
      </div>

      {/* --------Workout Plans--------*/}
      <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
        <h1 className="text-center text-[80px]">
          Today <span className="text-[#1DA1D2]">WorkOut Plans</span>{" "}
        </h1>
        <ul class="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
          <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
            <div class="order-1 sm:ml-6 xl:ml-0 ">
              <h3 class="mb-1 text-slate-900 font-semibold ">
                <span class="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                  Hero Patterns
                </span>
              </h3>
              <div class=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                <p>
                  A collection of over 100 free MIT-licensed high-quality SVG
                  patterns for you to use in your web projects.
                </p>
              </div>
              <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide">
                <a class="font-bebas" href="">
                  Finished
                </a>
              </div>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
              alt=""
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
        </ul>
      </div>
        <div class="fixed bottom-0 w-screen bg-gray-100  rounded-md py-1">
          <div class=" bg-gray-600 rounded-full ">
            <div class="w-[75%] m-[3px] bg-[#1DA1D2]  text-center rounded-full flex justify-center items-center">
              <div class="text-white font-bold text-sm inline-block bg-[#001821] px-2 rounded-full">
                75% 
              </div>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default FitnessFusionGuide;
