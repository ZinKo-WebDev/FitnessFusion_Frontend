import mainbg from "../images/image.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import About from "./About";
import Trainer from "./Trainer";
import Subscription from "./Subscription";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/authContext";

export default function Home() {
  const navigate = useNavigate();
  const {
    userSubscriptionId,
    accessToken,
    setAccessToken,
    currentUser,
    setCurrentUser,
    subscriptionPlans,
  } = useContext(AuthContext);
  const testimg = "apple.jpg";

  const addSubscription = async (e, subsID) => {
    const data = {
      subscription_id: subsID,
    };
    console.log(data);
  };
  console.log(currentUser?.subscription_id);

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

      <About ></About>

      <Trainer></Trainer>
      {currentUser?.subscription_id ? (
        <Subscription></Subscription>
      ) : (
        <Subscription></Subscription>
      )}


      <Footer></Footer>
    </div>
  );
}
