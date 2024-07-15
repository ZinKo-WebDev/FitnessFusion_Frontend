import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import profileimg from '../../images/profile.jpg'

const CalculateBMI = () => {
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

console.log(currentUser)
  return (
   
    <div className="p-12 flex justify-center items-center mt-[100px]">
    
      <div className="p-12 flex justify-center items-center">
        <div className="">
          <h1 className="text-[90px] font-bebas">
            CALCULATE YOUR <span className="text-[#1DA1D2]">BMI</span>
          </h1>

          <div className="flex ">
            <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[170px]"></div>
            <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[70px]"></div>
          </div>

          <form
            action=""
            className=""
            onSubmit={(e) => {
              handleBmiSubmit(e);
            }}
          >
            <div className="flex items-center space-x-6 my-3">
              <div className="shrink-0">
                
                <img src={profileimg} alt={testimg} height="200" id="preview_img"
                  className="h-20 w-20 object-cover rounded-full"/>
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                />
              </label>
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Height
              </label>
              <br />
              <input
                className="mt-2 border-2 mr-5 border-slate-500 px-3 py-2"
                type="number"
                name="feet"
                id="height"
                placeholder="Height (in cm)"
              />
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Weight
              </label>
              <br />
              <input
                className="mt-2 border-2 border-slate-500 px-3 py-2 w-[450px]"
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight (in kg)"
              />
            </div>

            <button className="text-red-600 border-2 border-red-500 px-3 py-2">
              Generate Your BMI
            </button>
            <span>Please Do not Skil This.</span>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                BMI
              </label>
              <br />
              <input
                className="mt-2 border-2 border-slate-500 px-3 py-2 w-[450px]"
                type="number"
                name="bmi"
                id="bmi"
                placeholder="BMI"
             
                value={bmi}
                readOnly
              />
            </div>

            <button
              className="text-white bg-[#1DA1D2] px-7 py-2 mt-2"
              type="submit"
            >
              Calculate
            </button>
          </form>
        </div>
        <div className=" flex justify-center p-12">
          <div className="">
            <table className="w-[800px] border-collapse h-full ">
              <thead>
                <tr className="">
                  <th className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    BMI
                  </th>
                  <th className="py-5 text-center  border-b-2 border-b-slate-500">
                    WEIGHT STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    Below 18.5
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Underweight
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    18.5 - 24.9
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Healthy
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    25.0 - 29.9
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Overweight
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 ">
                    30.0 - and above
                  </td>
                  <td className="py-5 text-center  ">Obese</td>
                </tr>
              </tbody>
            </table>

            <p className="text-center py-5">
              <span className="font-bold">BMI</span> metabolic rate /{" "}
              <span className="font-bold">BMI</span> body mass index
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateBMI;
