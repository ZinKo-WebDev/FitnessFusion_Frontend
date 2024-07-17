import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import image_04 from "../images/image_04.png";
import image_05 from "../images/image_05.png";
import image_06 from "../images/image_06.png";

const Trainer = () => {
  const navigate = useNavigate();
  const {
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
  } = useContext(AuthContext);
  return (
    <div id='coach' className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas py-[65px] px-12">
    <div className="w-full text-[16px] text-center  ">
      <h1 className=" text-[70px]">Our professional</h1>
      <span className=" text-[70px] text-[#1DA1D2] ">trainers</span>
      <p className="font-poppin">
        Whether you're looking to set up a home gym or enhance your current{" "}
        <br />
        workout routine
      </p>
    </div>
    <div className="flex  justify-between items-center p-12">
      <div className="w-[28%] h-auto">
        <img src={image_05} alt="image_05" className="object-cover" />
        <div className="">
          <h2 className=""></h2>
          <p className=""></p>
          <div className=""></div>
        </div>
      </div>
      <div className="w-[28%] h-auto ">
        <img src={image_04} alt="image_04" className="object-cover" />
        <div className="">
          <h2 className=""></h2>
          <p className=""></p>
          <div className=""></div>
        </div>
      </div>
      <div className="w-[28%] h-auto ">
        <img src={image_06} alt="image_06" className="object-cover" />
        <div className="">
          <h2 className=""></h2>
          <p className=""></p>
          <div className=""></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Trainer