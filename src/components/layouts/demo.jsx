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
    <div className="">
   

      <Dialog className="w-[800px] " open={modalopen} >
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
