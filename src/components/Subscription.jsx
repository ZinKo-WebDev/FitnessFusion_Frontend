import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import React, {
  accessToken,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";


const Subscription = () => {
  const navigate = useNavigate();

  const { setUserSubscriptionId, subscriptionPlans, currentUser } =
    useContext(AuthContext);

  const addSubscription = async (e, subsID) => {
    if(currentUser){
    setUserSubscriptionId(subsID);
    console.log(subsID);
    navigate(`/user/${currentUser.id}/checkout`)
    }else{
    navigate(`/register`);}
  };


  return (
    <div id="subscriptions" className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas py-[65px] px-12">
      <div className="w-full text-[16px] text-center  ">
        <span className=" text-[70px] text-[#1DA1D2]">LEVEL UP  </span>
        <span className="text-[70px]">YOUR </span>
        <h1 className=" text-[70px]">
          JOURNEY WITH  {" "}
          <span className=" text-[70px] text-[#1DA1D2] ">FITNESS FUSION </span>
        </h1>
      </div>
      {
        // console.log(currentUser)
      }
      <div className="flex  justify-center items-center">
        {subscriptionPlans.map((subsPlans) => {
          return (
            <div
              key={subsPlans.id}
              className="flex flex-col max-w-sm p-3  text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow  scale-90  hover:scale-100 font-poppin transition-all h-[600px] relative"
            >
              <h3 className="mb-4 mt-4 text-2xl font-semibold text-[#C0C0C0]">
                {subsPlans.name}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-700">
                Relevant for multiple users, extended &amp; premium support.
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">$25</span>
                <span
                  className="text-gray-500 dark:text-gray-700"
                  dark:text-gray-400=""
                >
                  6 Week Package
                </span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>Unlimited Gym Access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>6 Week Package</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>
                    12 - 18
                    <span className="font-semibold">Training Sessions</span>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>
                    <span className="font-semibold">Mobile App </span>
                  </span>
                </li>
                <li className="flex items-center space-x-3"></li>
              </ul>
              <button
                className="text-white bg-[#1DA1D2] focus:ring-4 hover:bg-white focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-4 text-center dark:text-white  dark:focus:ring-purple-900 hover:border-2 hover:border-[#1DA1D2] absolute bottom-3 w-[94%] hover:text-[#1DA1D2]"
                onClick={(e) => addSubscription(e, subsPlans.id)}
              >
                Buy Now
              </button>
              <span>{subsPlans.id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscription;
