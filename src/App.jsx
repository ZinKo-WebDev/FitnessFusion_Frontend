import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/layouts/Header";
import "./app.css";
import { useEffect, useState } from "react";
import { getConfig, BASE_URL } from "./helpers/config";
import { AuthContext } from "./context/authContext";
import axios from "axios";
import FitnessFusionGuide from "./components/Guide/FitnessFusionGuide";
import CheckOut from "./components/checkout/CheckOut";
import Subscription from "./components/Subscription";
import CalculateBMI from "./components/CalcBmi/CalculateBMI";
import FitnessFusionGuide_Daily from "./components/Guide/FitnessFusionGuide_Daily";
import FitnessFusionGuide_Daily_id from "./components/Guide/FitnessFusionGuide_Daily_id";
import UserRoutineIndex from "./components/userRoutine/UserRoutineIndex";
import ErrorRoute from "./components/ErrorRoute/ErrorRoute";
import UserIndex from "./components/user/UserIndex";

function App() {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("currentToken"))
  );
  const [currentUser, setCurrentUser] = useState(null);
  const [userSubscriptionId, setUserSubscriptionId] = useState();
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [age, setAge] = useState(null);
  const [bmi, setBmi] = useState("");
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [image, setImage] = useState(null);
  const [goal, setGoal] = useState(null);
  const [task, setTask] = useState(null);
  const [meals, setMeals] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const [locations, setLocations] = useState(null);
 //eg-fetch subscriptions 
useEffect(() => {
  const fetchAllSubscriptions= async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/subscriptions/`
      );
      console.log(response.data.data)
      setSubscriptionPlans(response.data.data);
    } catch (error) {
      
      console.log(error);
    }
    
  };
  fetchAllSubscriptions();
 
}, [,currentUser]);

// fetch user
  useEffect(() => {
    const fetchCurrentlyLoggedInUser = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/user`,
          getConfig(accessToken)
        );
        setCurrentUser(response.data.user);
        console.log(response.data.user)
      
      } catch (error) {
        if (error?.response?.status === 401) {
          localStorage.removeItem("currentToken");
          setCurrentUser(null);
          setAccessToken("");
          
        }
        console.log(error);
      }
      
    };
    
    if (accessToken) fetchCurrentlyLoggedInUser();
   
  }, [accessToken]);
 

 
  

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        currentUser,
        setCurrentUser,
        subscriptionPlans,
        userSubscriptionId, setUserSubscriptionId,
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
      }}
    >
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index  element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/api/user" element={<UserIndex />} />
       
            <Route path="/user/guide" element={<FitnessFusionGuide />} />
            <Route path="/user/:id/checkout" element={<CheckOut />} />
            <Route path="/user/subscriptions" element={<Subscription  />} />
            <Route path="/user/bmi" element={<CalculateBMI />} />
            <Route path="/user/guide/days" element={<FitnessFusionGuide_Daily />} />
            <Route
              path="/user/guide/days/id"
              element={<FitnessFusionGuide_Daily_id />}
            />

<Route path="/user/guide/days" element={<ErrorRoute></ErrorRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
