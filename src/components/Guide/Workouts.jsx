import React from 'react'

const Workouts = ({workouts}) => {
    console.log(workouts)
  return (
    <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
    <h1 className="text-center text-[80px]">
      Today <span className="text-[#1DA1D2]">WorkOut Plans</span>
    </h1>
    <ul className="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    {
        workouts?.map((workout) =>{
         let image=workout.image;
         console.log(image)
          return (
            <li  key={workout?.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
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
            onClick={(e) => handleOpen(e,workout)}
              src={`http://localhost:8000/${image}`}
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
  )
}

export default Workouts