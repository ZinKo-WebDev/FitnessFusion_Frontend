import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import cbbank from "../../images/CB_Bank.jpg";
import kbzbank from "../../images/kbz_bank.png";
import yomabank from "../../images/yoma_bank.png";
import wavemoney from "../../images/wave_money.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const CheckOut = () => {
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
   
    userSubscriptionId,
    error,
    setErrors,
    profileImg,setProfileImg
  } = useContext(AuthContext);
  console.log(userSubscriptionId);
  
  const addSubscriptionToDatabase = async (e) => {
    e.preventDefault();
    const data = {
      subscription_id: userSubscriptionId,
    };
    console.log(data);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
        data, 
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
          }
        }
      );
     
     
      toast.success(response.data.message);
      navigate(`/user/${currentUser.id}/bmi`);
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
  console.log(currentUser);

  return (
    <div className=" w-full h-screen auth-transparant-bg flex justify-center items-center flex-col">
      
      <div className="p-12 flex flex-col w-[60%] bg-[#1F3A44] rounded-lg">
        <h1 className="text-center text-3xl font-bold text-white">Checkout</h1>
        <h1 className="text-white text-lg">Choose your payment method</h1>
        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4 py-8">
            <input type="radio" className="w-6 h-6 cursor-pointer" id="card" />
            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
              <img src={yomabank} className="w-12" alt="card1" />
              <img src={kbzbank} className="w-12" alt="card2" />
              <img src={cbbank} className="w-12" alt="card3" />
            </label>
          </div>

          <div className="flex items-center justify-center bg-gray-100 rounded-lg px-4 py-8">
            <input
              type="radio"
              className="w-6 h-6 cursor-pointer"
              id="paypal"
            />
            <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
              <img src={wavemoney} className="w-12 " alt="paypalCard" />
            </label>
          </div>
        </div>

        <form className="mt-8" >
          <div className="grid gap-6">
            <div className="flex bg-white border-b border-gray-300 focus-within:border-blue-600 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 ml-2 fill-gray-300"
                viewBox="0 0 24 24"
              >
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Cardholder's Name"
                className="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
              />
            </div>

            <div className="flex bg-white border-b border-gray-300 focus-within:border-blue-600 overflow-hidden">
              <input
                type="number"
                placeholder="Card Number"
                className="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex bg-white border-b border-gray-300 focus-within:border-blue-600 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2 fill-gray-300"
                  viewBox="0 0 512 512"
                >
                  <circle cx="386" cy="210" r="20" data-original="#000000" />
                  <path
                    d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
                    data-original="#000000"
                  />
                  <path
                    d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
                    data-original="#000000"
                  />
                  <path
                    d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                    data-original="#000000"
                  />
                  <circle cx="299" cy="210" r="20" data-original="#000000" />
                  <circle cx="212" cy="297" r="20" data-original="#000000" />
                  <circle cx="125" cy="210" r="20" data-original="#000000" />
                  <circle cx="125" cy="297" r="20" data-original="#000000" />
                  <circle cx="125" cy="384" r="20" data-original="#000000" />
                  <circle cx="212" cy="384" r="20" data-original="#000000" />
                  <circle cx="212" cy="210" r="20" data-original="#000000" />
                </svg>
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
                />
              </div>

              <div className="flex bg-white border-b border-gray-300 focus-within:border-blue-600 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 ml-2 fill-gray-300"
                  viewBox="0 0 34 34"
                >
                  <path
                    d="M17 1c-5 0-9 4-9 9v4c-1.7 0-3 1.3-3 3v13c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V17c0-1.7-1.3-3-3-3v-4c0-5-4-9-9-9zm10 16v13c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h18c.6 0 1 .4 1 1zm-17-3v-4c0-3.9 3.1-7 7-7s7 3.1 7 7v4z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M17 19c-1.7 0-3 1.3-3 3 0 1.3.8 2.4 2 2.8V27c0 .6.4 1 1 1s1-.4 1-1v-2.2c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
                    data-original="#000000"
                  ></path>
                </svg>
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-lg text-white font-medium "
              >
                I accept the
                <a
                  href="javascript:void(0);"
                  className=" font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-4 bg-gray-100 p-4 mt-8 rounded-lg">
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-cyan-500 text-gray-800 rounded-lg max-sm:order-1"
            >
              Back
            </button>

            <button
              onClick={e=>addSubscriptionToDatabase(e)}
              className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
            
              Confirm payment
            </button>
          </div>
        </form>
      </div>
     
    
    </div>
  );
};

export default CheckOut;
