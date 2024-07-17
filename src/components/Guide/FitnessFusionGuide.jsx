import main_bg2 from "../../images/main_bg2.jpg";
import Footer from "../footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
const FitnessFusionGuide = () => {
  
  const [finishedWorkouts,setFinishedWorkouts]=useState([])
  const [finishedMeals,setMinishedMeals]=useState([])
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
    profileImg,setProfileImg,
    progress,setprogress
  } = useContext(AuthContext);

  const mealStatusHandler = (event, mealID) => {
    setprogress(prevProgress => (prevProgress <= 99 ? prevProgress + 11 : 100));
    
    const jsonMeals = localStorage.getItem('meals');
  
    if (jsonMeals) {
      const localMeals = JSON.parse(jsonMeals);
      console.log(localMeals);
  
  
      const updatedMeals = localMeals.map(meal => {
        if (meal.id === mealID) {
          return { ...meal, status: 0 }; 
        }
        return meal;
      });
  
     
      localStorage.setItem('meals', JSON.stringify(updatedMeals));
  
      const newjsonMeals = localStorage.getItem('meals');
     setMeals(JSON.parse(newjsonMeals));
      console.log('Updated Meals:', updatedMeals);
    } else {
      console.log('No meals found in local storage.');
    }
  };
  const workoutStatusHandler = (event, workoutID) => {
    setprogress(prevProgress => (prevProgress <= 99 ? prevProgress + 11 : 100));
    const jsonWorkouts = localStorage.getItem('workouts');
  
    if (jsonWorkouts) {
      const localWorkouts = JSON.parse(jsonWorkouts);
      console.log('Original Workouts:', localWorkouts);
  
      const updatedWorkouts = localWorkouts.map(workout => {
        if (workout.id === workoutID) {
          return { ...workout, status: 0 }; // Use event.target.value for dynamic status
        }
        return workout;
      });
  
      localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  
      const newJsonWorkouts = localStorage.getItem('workouts');
      setWorkouts(JSON.parse(newJsonWorkouts));
      console.log('Updated Workouts:', updatedWorkouts);
    } else {
      console.log('No workouts found in local storage.');
    }
  };
 
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
                  <button onClick={(e) => mealStatusHandler(e,meal.id) }  className= {meal.status>0 ? "font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide":"font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-red-600 text-white rounded-full text-xl tracking-wide"}>
                   
                      {meal.status>0 ? "Active":"Finished"}
                
                  </button>
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
                  <button onClick={(e) => workoutStatusHandler(e,workout.id) } className= {workout.status>0 ? "font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-orange-600 text-white rounded-full text-xl tracking-wide":"font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-red-600 text-white rounded-full text-xl tracking-wide"}>
                   
                      {workout.status>0 ? "Active":"Finished"}
                   
                  </button>
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
        <Progress className="fixed bottom-0 w-screen"  value={progress} label="Completed" color="red" size="lg"/>;
        {/* <div className="fixed bottom-0 w-screen bg-gray-100  rounded-md ">
      
        
        </div> */}
      <Footer></Footer>
    </div>
  );
};

export default FitnessFusionGuide;
