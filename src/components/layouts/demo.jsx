import React from 'react'

const demo = () => {
  return (
    <div>
       <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="height"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700"> Height</label>
                                <input type="number" id="height"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    value={""}  required/>
                            </div>

                            <div className="w-full">
                                <label for="weight"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700">Current Weight</label>
                                <input type="number" id="weight"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="kg"  required/>
                            </div>

                        </div>
                     
                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="bmi"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700"> BMI</label>
                                <input type="number" id="bmi"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    value={""}  required/>
                            </div>

                            <div className="w-full">
                                <label for="goal_weight"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700">Goal Weight</label>
                                <input type="number" id="goal_weight"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="kg"  required/>
                            </div>

                        </div>
                     

                      

                   



                        <div className="flex justify-between">
                     
                            <button onClick={(e) => generateBmi(e) } type="submit"
                                className=" text-red-600
border-red-500   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">Save</button>
                        </div>
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>
   
  )
}

export default demo