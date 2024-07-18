import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import profileimg from "../../images/profile.jpg";
import axios from "axios";
import { toast } from "react-toastify";

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
    error,
    setErrors,
    profileImg,
    setProfileImg,
  } = useContext(AuthContext);

 
  const generateBmi = (e) => {
    e.preventDefault();
    const bmi = weight / (height * height);
    const finalBmi = Math.ceil(bmi * 10000);
    setBmi(finalBmi);
  };
//  --------
const storeImageHandler = async (e) => {
  e.preventDefault();
  const dataImg = {

    image:image
  };
 

  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
      dataImg,  // Send data as the second argument for PUT request
      {
        headers: {
          'Content-Type' : 'multipart/form-data',

          "Authorization": `Bearer ${accessToken}`
        }
      }
    );
 
    
    toast.success(response.data.message);

  } catch (error) {
    if (error?.response) {
      if (error.response.status === 400) {
        toast.error("Bad request. Please check your data.");
      } else if (error.response.status === 401) {
        toast.error("Unauthorized. Please log in.");
      } else if (error.response.status === 404) {
        toast.error("User not found.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
      setErrors(error.response.data.errors);
    } else {
      toast.error("Network error. Please check your connection.");
    }
    console.log(error);
  }
};
  // --------
  const storeBmiHandler = async (e) => {
    e.preventDefault();
  
    const data = {
      BMI: bmi,
      weight: weight,
      height: height,

    };
    console.log(data);
    try {
    
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
        data,  // Send data as the second argument for PUT request
        {
          headers: {
            'Content-Type' : 'application/json',
  
            "Authorization": `Bearer ${accessToken}`
          }
        }
      );
      
      toast.success(response.data.message);
      navigate(`/`);
      location.reload();
    } catch (error) {
      if (error?.response) {
        if (error.response.status === 400) {
          toast.error("Bad request. Please check your data.");
        } else if (error.response.status === 401) {
          toast.error("Unauthorized. Please log in.");
        } else if (error.response.status === 404) {
          toast.error("User not found.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
        setErrors(error.response.data.errors);
      } else {
        toast.error("Network error. Please check your connection.");
      }
      console.log(error);
    }
  };
  // --------


  console.log(currentUser);

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
              storeImageHandler(e);
            }}
          >
            <div className="flex items-center space-x-6 my-3">
            <div className="flex items-center space-x-6 my-3">
              <div className="shrink-0">
                <img
                  src={profileimg}
                  alt="profile.img"
                  height="200"
                  id="preview_img"
                  className="h-20 w-20 object-cover rounded-full"
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file" 
                  name="image"
                  className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                  // form image to image state
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImage(event.target.files[0]);
                  }}
                />
               <button type="submit">Upload Image</button>
              </label>
              </div>
              </div>
          </form>
          <form
            action=""
            className=""
            onSubmit={(e) => {
              storeBmiHandler(e);
            }}
          >
        
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
                onChange={(e) => setHeight(e.target.value)}
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
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button
              onClick={(e) => generateBmi(e)}
              className="text-red-600 border-2 border-red-500 px-3 py-2"
            >
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
