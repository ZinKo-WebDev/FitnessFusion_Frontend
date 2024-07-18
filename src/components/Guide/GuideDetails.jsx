import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { AuthContext } from "../../context/authContext";
const GuideDetails = ({   handleOpen}) => {
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

  return (
    <div>
      {console.log( modaldata)}
      {/* {
   calories:"230"
id:3
image:"https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324405/chicken-salad-in-bowl-top-down-view-with-olive-oil-in-jar.jpg"
ingredient:"Some Vegitables "
name:"Diet 3"
status:1
type:"weight_gain"

body_part:"lower"
gender:"none"
id:2
image:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-04/mountain-climbers-kb-main-210416-5cb92d.gif"
name:"Mountain Climber"
raps:12
set:3
status:1
type:"weight_loss"
   } */}

      <Dialog className="w-[800px]" open={modalopen} >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <div className="flex justify-center">

          <img className="w-[500px] h-[400px]" src={modaldata && modaldata.image?modaldata.image:""} alt="job.image" />
          </div>
        
         <p>{modaldata && modaldata.calories?modaldata.image:""}</p>
         <p>{modaldata && modaldata.ingredient?modaldata.ingredient:""}</p>
         <p>{modaldata && modaldata.name?modaldata.name:""}</p>
         <p>{modaldata && modaldata.type?modaldata.type:""}</p>
         <p>{modaldata && modaldata.body_part?modaldata.body_part:""}</p>
         <p>{modaldata && modaldata.gender?modaldata.gender:""}</p>
         <p>{modaldata && modaldata.raps?modaldata.raps:""}</p>
         <p>{modaldata && modaldata.set?modaldata.set:""}</p>
  
         <p>{}</p>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default GuideDetails;
