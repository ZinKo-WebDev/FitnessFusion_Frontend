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
import CheckOut from "./components/checkout/CheckOut";
import Subscription from "./components/Subscription";
import CalculateBMI from "./components/CalcBmi/CalculateBMI";
import FitnessFusionGuide_Daily from "./components/Guide/FitnessFusionGuide_Daily";
import FitnessFusionGuide_HowTo from "./components/Guide/FitnessFusionGuide_HowTo";
import FitnessFusionGuide from "./components/Guide/FitnessFusionGuide";

import UserRoutineIndex from "./components/userRoutine/UserRoutineIndex";
import ErrorRoute from "./components/ErrorRoute/ErrorRoute";
import UserIndex from "./components/user/UserIndex";
import ProfileEdit from "./components/auth/ProfileEdit";
import EditProfile from "./components/auth/EditProfile";
import Main from "./components/Main";
import Activities from "./components/Activities/Activities";
import About from "./components/About";
import Trainer from "./components/Trainer";
import Footer from "./components/footer/Footer";

function App() {
  const [accessToken, setAccessToken] = useState(
    JSON.parse(localStorage.getItem("currentToken"))
  );
  const [currentUser, setCurrentUser] = useState(null);
  const [userSubscriptionId, setUserSubscriptionId] = useState();
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [age, setAge] = useState(null);
  const [bmi, setBmi] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [image, setImage] = useState([]);
  const [goal, setGoal] = useState(null);
  const [task, setTask] = useState(null);
  const [meals, setMeals] = useState([]);
  const [workouts, setWorkouts] = useState(null);
  const [locations, setLocations] = useState(null);
  const [profileImg, setProfileImg] = useState("");
  const [progress, setprogress] = useState(1);
  const [avata, setAvata] = useState(false);
  const [modalopen, setModalOpen] = useState(false);
  const [modaldata, setModalData] = useState({});
  const [subData,setSubData]=useState({
    meals:[],
    workouts:[]
  })
  //eg-fetch subscriptions
  useEffect(() => {
    const fetchAllSubscriptions = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/subscriptions/`);
        setSubscriptionPlans(response.data.data);
      } catch (error) {
        console.log("Error fetching subscription plans:", error);
      }
    };

    fetchAllSubscriptions();
  }, [currentUser]);

  // fetch user
  useEffect(() => {
    const fetchCurrentlyLoggedInUser = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/user`,
          getConfig(accessToken)
        );
        setCurrentUser(response.data.user);
    
      } catch (error) {
        if (error?.response?.status === 401) {
          localStorage.removeItem("currentToken");
          setCurrentUser(null);
          setAccessToken("");
        } else {
          console.log("Error fetching currently logged in user:", error);
        }
      }
    };

    if (accessToken) {
      fetchCurrentlyLoggedInUser();
    }
  }, [accessToken, setCurrentUser, setAccessToken]);

  // fetch product
  useEffect(() => {
    const fetchWorkoutsAndMeals = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/${currentUser.id}` ,  // Send data as the second argument for PUT request
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${accessToken}`
            }
          });

        if (
          response.data &&
          response.data.user &&
          response.data.user.subscriptions
        ) {
     setWorkouts(response.data.user.subscriptions.workoutPlans)
     setMeals(response.data.user.subscriptions.mealPlans)
   
        } else {
          console.log("No subscriptions found for the user.");
        }
      } catch (error) {
        console.log("Error fetching workouts and meals:", error);
      }
    };

    if (accessToken) {
      fetchWorkoutsAndMeals();
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        subData,setSubData,password, setPassword,
        modaldata,
        setModalData,
        modalopen,
        setModalOpen,
        avata,
        setAvata,
        accessToken,
        setAccessToken,
        currentUser,
        setCurrentUser,
        subscriptionPlans,
        userSubscriptionId,
        setUserSubscriptionId,
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
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<Home />} />
           
            
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/api/user" element={<UserIndex />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/trainer" element={<Trainer />}></Route>
            <Route path="/user/:id/activity" element={<Activities />}></Route>

            <Route path="/user/:id/week" element={<FitnessFusionGuide_HowTo />}></Route>
            <Route path="/user/:id/week/day" element={<FitnessFusionGuide_Daily />}></Route>
            <Route path="/user/:id/week/day/:id" element={<FitnessFusionGuide />} />
           


            <Route path="/user/:id/checkout" element={<CheckOut />} />

            <Route path="/user/subscriptions" element={<Subscription />} />
            <Route path="/contactus" element={<Footer />} />

            <Route path="/user/:id/bmi" element={<CalculateBMI image={image}/>} />
            <Route path="/user/:id/profile/edit" element={<EditProfile />} />

            <Route
              path="/user/guide/days"
              element={<FitnessFusionGuide_Daily />}
            />

          

            <Route path="*" element={<ErrorRoute></ErrorRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
