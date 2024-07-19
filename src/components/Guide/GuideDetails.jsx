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
    <>
      
      {modalopen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden bg-slate-500  bg-opacity-30 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModalOpen(!modalopen)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <div className="flex justify-center">

<img className="w-[700px] h-[400px]" src={modaldata && modaldata.image?modaldata.image:""} alt="job.image" />
</div>

<p>{modaldata && modaldata.calories?modaldata.image:""}</p>
<p>{modaldata && modaldata.ingredient?modaldata.ingredient:""}</p>
<p>{modaldata && modaldata.name?modaldata.name:""}</p>
<p>{modaldata && modaldata.type?modaldata.type:""}</p>
<p>{modaldata && modaldata.body_part?modaldata.body_part:""}</p>
<p>{modaldata && modaldata.gender?modaldata.gender:""}</p>
<p>{modaldata && modaldata.raps?modaldata.raps:""}</p>
<p>{modaldata && modaldata.set?modaldata.set:""}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(!modalopen)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(!modalopen)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default GuideDetails;
