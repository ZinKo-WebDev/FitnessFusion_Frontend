import main_bg2 from "../../images/main_bg2.jpg";
import Footer from "../footer/Footer";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const FitnessFusionGuide = () => {
  
  
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
    profileImg,setProfileImg
  } = useContext(AuthContext);
  return (
    <div className=" ">
{console.log(workouts)}
{console.log(meals)}
      <div className="flex justify-center items-center">
        <img className="w-full h-[800px]" src={main_bg2} alt="main_bg2" />
        <div className="w-[1290px] h-[420px] my-transparant-bg absolute mt-12">
          <div className="text-white w-full flex flex-col justify-center items-center p-12">
            <h1 className="text-[80px]  mt-5 uppercase font-bebas">
              fitness Fusion <span className="text-[#1DA1D2]">guide</span>
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
          Today <span className="text-[#1DA1D2]">Meal Plans</span>
        </h1>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          {
            meals?.map((meal) =>{
              return (
                <li key={meal?.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div className="order-1 sm:ml-6 xl:ml-0 ">
                  <h3 className="mb-1 text-slate-900 font-semibold ">
                    <span className="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                      {meal.name}
                    </span>
                  </h3>
                  <div className=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                    <p>
                   { meal.ingredient} 
                    </p>
                    <p>
                   { meal.type} 
                    </p>
                    <p>
                   { meal.calories} 
                    </p>
                  </div>
                  <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide">
                    <a className="font-bebas" href="">
                      Finished
                    </a>
                  </div>
                </div>
                <img
                  src={meal.image?meal.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WMgvOd6VOLfsgHBsvZ59igcvKIzGycNNA&s"}
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-[525px] h-[295px] sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                  width="1216"
                  height="640"
                />
              </li>
              )
            } )
          }
      
         
       
        </ul>
      
      </div>

      {/* --------Workout Plans--------*/}
      <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
        <h1 className="text-center text-[80px]">
          Today <span className="text-[#1DA1D2]">WorkOut Plans</span>
        </h1>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
        {
            workouts?.map((workout) =>{
              return (
                <li key={workout?.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div className="order-1 sm:ml-6 xl:ml-0 ">
                  <h3 className="mb-1 text-slate-900 font-semibold ">
                    <span className="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                      {workout.name}
                    </span>
                  </h3>
                  <div className=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                    <p>
                   { workout.ingredient} 
                    </p>
                    <p>
                   { workout.type} 
                    </p>
                    <p>
                   { workout.calories} 
                    </p>
                  </div>
                  <div className="py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide">
                    <a className="font-bebas" href="">
                      Finished
                    </a>
                  </div>
                </div>
                <img
                  src={workout.image?workout.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WMgvOd6VOLfsgHBsvZ59igcvKIzGycNNA&s"}
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-[525px] h-[295px] sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                  width="1216"
                  height="640"
                />
              </li>
              )
            } )
          }
        </ul>
      </div>
        <div className="fixed bottom-0 w-screen bg-gray-100  rounded-md py-1">
          <div className=" bg-gray-600 rounded-full ">
            <div className="w-[75%] m-[3px] bg-[#1DA1D2]  text-center rounded-full flex justify-center items-center">
              <div className="text-white font-bold text-sm inline-block bg-[#001821] px-2 rounded-full">
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
