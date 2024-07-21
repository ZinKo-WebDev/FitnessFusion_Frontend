import main_bg2 from "../../images/main_bg2.jpg";

import Footer from "../footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate,NavLink } from "react-router-dom";


const FitnessFusionGuide_HowTo = () => {
const [firstWeekWrokout,setFirstWeekWrokout]=useState()
 const navigate = useNavigate();
  const {
    
    modalopen,
    setModalOpen,
    accessToken,
    setAccessToken,
    currentUser,
    setCurrentUser,
    subscription,
    setSubscription,
    age,
    setAge,
    bmi,
    setBmi,
    gender,
    setGender,
    height,
    setHeight,
    weight,
    setWeight,
    image,
    setImage,
    goal,
    setGoal,
    task,
    setTask,
    meals,
    setMeals,
    workouts,
    setWorkouts,
    profileImg,
    setProfileImg,
    progress,
    setprogress,
    modaldata,
    setModalData,
    subData,
    setSubData
  } = useContext(AuthContext);
 const gotoday=() =>{
  navigate('/user/:id/week/day')
 } 

console.log(firstWeekWrokout)
  return (
    <div>
     
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
                4 WEEK MEAL & WORKOUT PLANS
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
            <div className="w-full border-2 border-[#1DA1D2]  px-[110px] py-[38px] font-poppin">
              <div className="text-lg tracking-wide">
                <p className="text-center ">
                  Below we have included the key principles that work for
                  nutrition for health and fat loss. If anything you read, see
                  or hear deviates from any of the six principles below, chances
                  are you can dismiss it immediately as a short-term fad diet.
                  This is a way of eating that will enable you to achieve both
                  fast and permanent results in a way.{" "}
                </p>

                <br />
                <p className="">
                  You see this change has to be permanent so it has to be both
                  straightforward and above all enjoyable.
                </p>
                <br />
                <p className="">
                  The good news is that our recipe guide will show you how
                  quick, easy, and tasty eating this way is:{" "}
                </p>
                <br />
                <ol className="text-left" type="1">
                  <li className="p-2">
                    <span>1 . </span>
                    <span>
                      {" "}
                      Eating fewer calories than you burn <br /> &nbsp; &nbsp;
                      &nbsp; (vitamins and minerals).
                    </span>
                    <br />
                  </li>
                  <li className="p-2">
                    <span>2 . </span>
                    <span>
                      {" "}
                      Eat plenty of protein for repair and maintenance of lean
                      tissue, and to keep you feeling full <br /> &nbsp; &nbsp;
                      &nbsp; (protein satisfies the appetite more than any other
                      macronutrient).
                    </span>
                    <br />
                  </li>
                  <li className="p-2">
                    <span>3 . </span>
                    <span>
                      {" "}
                      Eat enough healthy fats from oily fish, nuts, avocados,
                      coconut, and olive oils <br /> &nbsp; &nbsp; &nbsp;
                      (healthy fats are an essential part of a balanced diet).
                    </span>
                    <br />
                  </li>
                  <li className="p-2">
                    <span>4 . </span>
                    <span>
                      {" "}
                      Drink plenty of water to naturally detoxify the body,
                      keeping the brain and body hydrated so it can <br />{" "}
                      &nbsp; &nbsp; &nbsp; function properly (green and herbal
                      teas count towards this water intake).
                    </span>
                    <br />
                  </li>
                  <li className="p-2">
                    <span>5 . </span>
                    <span>
                      {" "}
                      Limit processed foods and artificial sweeteners and
                      preservatives.
                    </span>
                    <br />
                  </li>
                  <li className="p-2">
                    <span>6 . </span>
                    <span>
                      {" "}
                      Eating fewer calories than you burn <br /> &nbsp; &nbsp;
                      &nbsp; (calorie deficit).
                    </span>
                    <br />
                  </li>
                </ol>
              </div>

              <div className="w-full flex justify-center items-center mt-12">
                <div className="w-[1300px]  flex flex-col justify-center items-center  text-[18px]">
                  <div className="w-full">
                    <div className="w-full py-3 flex  justify-between items-center ">
                      <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                        <h1 className="font-bebas">Week One</h1>
                        <button
                        onClick={gotoday}
                          to="/user/:id/week/day"
                          className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                        >
                          CLICK HERE
                        </button>
                      </div>
                      <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                        <h1 className="font-bebas">Week Two</h1>
                        <button
                        onClick={gotoday}
                          to="/user/:id/week/day"
                          className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                        >
                          CLICK HERE
                        </button>
                      </div>
                    </div>
                    <div className="w-full py-3 flex  justify-between items-center ">
                      <div className="py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                        <h1 className="font-bebas">Week 3</h1>
                       
                        <button
                        onClick={gotoday}
                          to="/user/:id/week/day"
                          className="pointer border-2 border-[#1DA1D2] px-3 py-1 font-bebas rounded-lg text-[#1da1d2] text-[25px] mt-2"
                        >
                          CLICK HERE
                        </button>
                      </div>
                      <div className="  py-8 text-[30px] border-2 border-[#1DA1D2] w-[49%] ">
                        <h1 className="font-bebas">Week 4</h1>
                        <button
                        onClick={gotoday}
                          to="/user/:id/week/day"
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

export default FitnessFusionGuide_HowTo;
