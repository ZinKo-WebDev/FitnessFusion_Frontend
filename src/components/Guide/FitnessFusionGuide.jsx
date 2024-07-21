import main_bg2 from "../../images/main_bg2.jpg";
import Footer from "../footer/Footer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Progress } from "@material-tailwind/react";
import GuideDetails from "./GuideDetails";
import Meals from "./Meals";
import Workouts from "./Workouts";

const FitnessFusionGuide = () => {
  const [threeMeals, setThreeMeals] = useState([]);
  const [sevenWorkouts, setSevenWorkouts] = useState([]);
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
  } = useContext(AuthContext);

  const handleOpen = (e, job) => {
    setModalData(job);
    setModalOpen(!modalopen);
  };

  const mealStatusHandler = (event, mealID) => {
    setprogress((prevProgress) =>
      prevProgress <= 99 ? prevProgress + 11 : 100
    );
    let selectedMeal = workouts.find((id) => id == mealID);
    selectedMeal.status;
  };

  const workoutStatusHandler = (event, workoutID) => {
    setprogress((prevProgress) =>
      prevProgress <= 99 ? prevProgress + 11 : 100
    );
    let selectedWorkout = workouts.find((id) => id == workoutID);
    selectedWorkout.status;
  };

  const getRandomMeals = (meals, count) => {
    if (meals.length === 0) return []; // Handle empty meals array scenario
    const shuffledMeals = meals.sort(() => 0.5 - Math.random());
    return shuffledMeals.slice(0, count);
  };
  useEffect(() => {
    // Update threeMeals state with 3 random meals when meals state changes
    setThreeMeals(getRandomMeals(meals, 3));
  }, [meals]); // useEffect dependency on meals state change
 
  const getRandomWorkouts = (workouts, count) => {
    if (meals.length === 0) return []; // Handle empty meals array scenario
    const shuffledWorkouts = workouts.sort(() => 0.5 - Math.random());
    return shuffledWorkouts.slice(0, count);
  };
  useEffect(() => {
    // Update threeMeals state with 3 random meals when meals state changes
    setSevenWorkouts(getRandomWorkouts(meals, 9));
  }, [workouts]); // useEffect dependency on meals state change
 
 
 

  return (
    <div className=" ">
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
          {threeMeals?.map((meal) => {
            let image = meal.image;
            return (
              <li
                key={meal?.id}
                className="relative flex flex-col sm:flex-row xl:flex-col items-start"
              >
                <div className="order-1 sm:ml-6 xl:ml-0 ">
                  <h3 className="mb-1 text-slate-900 font-semibold ">
                    <span className="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                      {meal.name}
                    </span>
                  </h3>
                  <div className=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                    <p>{meal.ingredient}</p>
                    <p>{meal.type}</p>
                    <p>{meal.calories}</p>
                  </div>
                  <button
                    onClick={(e) => mealStatusHandler(e, meal.id)}
                    className={
                      "font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide"
                        
                    }
                  >
                    Active
                  </button>
                </div>

                <img
                  onClick={(e) => handleOpen(e, meal)}
                  src={`http://localhost:8000/${image}`}
                  alt="Meal_Image"
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-[525px] h-[295px] sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                  width="1216"
                  height="640"
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* --------Workout Plans--------*/}
      <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
        <h1 className="text-center text-[80px]">
          Today <span className="text-[#1DA1D2]">WorkOut Plans</span>
        </h1>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          {sevenWorkouts?.map((workout) => {
            let image = workout.image;

            return (
              <li
                key={workout?.id}
                className="relative flex flex-col sm:flex-row xl:flex-col items-start"
              >
                <div className="order-1 sm:ml-6 xl:ml-0 ">
                  <h3 className="mb-1 text-slate-900 font-semibold ">
                    <span className="mb-1 block leading-6 text-[#1DA1D2] text-3xl font-bebas">
                      {workout.name}
                    </span>
                  </h3>
                  <div className=" text-white text-xl tracking-wide lowercase py-3 font-bebas">
                    <p>{workout.ingredient}</p>
                    <p>{workout.type}</p>
                    <p>{workout.calories}</p>
                  </div>
                  <button
                    onClick={(e) => workoutStatusHandler(e, workout.id)}
                    className={
                     "font-bebas py-3 w-[200px] px-1  flex justify-center items-center bg-blue-600 text-white rounded-full text-xl tracking-wide"
                        
                    }
                  >
                 Active
                  </button>
                </div>
                <img
                  onClick={(e) => handleOpen(e, workout)}
                  src={`http://localhost:8000/${image}`}
                  alt=""
                  className="mb-6 shadow-md rounded-lg bg-slate-50 w-[525px] h-[295px] sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                  width="1216"
                  height="640"
                />
              </li>
            );
          })}
        </ul>
      </div>
      {/* --------Workout Plans End--------*/}

      <Progress
        className="fixed bottom-0 w-screen"
        value={progress}
        label="Completed"
        color="red"
        size="lg"
      />

      <Footer></Footer>
      <GuideDetails handleOpen={handleOpen} />
    </div>
  );
};

export default FitnessFusionGuide;
