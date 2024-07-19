import React from 'react'

const Meals = ({meals}) => {
    console.log(meals)
  return (
    <div className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
    <h1 className="text-center text-[80px]">
      Today <span className="text-[#1DA1D2]">Meal Plans</span>
    </h1>
    <ul className="grid grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
      {
        meals?.map((meal) =>{
            let image=meal.image
          return (
            <li   key={meal?.id} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
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
            onClick={(e) => handleOpen(e,meal)}
            src={`http://localhost:8000/${image}`}
              alt="Meal_Image"
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

export default Meals