import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';

const EditProfile = () => {
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
        error,setErrors,
        profileImg,setProfileImg
      } = useContext(AuthContext);
      
      const generateBmi=(e) => {
        e.preventDefault()
        const bmi= weight/(height*height)
        const finalBmi=Math.ceil(bmi*10000)
        setBmi(finalBmi);
      }
        const handleBmiSubmit=(e) =>{
          e.preventDefault()
      
        } 
        const storeAndGoNextHandler = async (e) => {
          e.preventDefault();
          const data = {
            BMI:bmi,
            weight:weight,
            height:height,
          
          };
          console.log(data);
          try {
            const response = await axios.put(
              `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
              data
            );
            toast.success(response.data.message);
            console.log(currentUser.id)
            navigate(`/`);
          } catch (error) {
            if (error?.response?.status) {
              setErrors(error.response.data.errors);
            }
            console.log(error);
          }
        };
      console.log(currentUser);
  return (
    <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] pt-[70px]">
    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div className="sticky flex flex-col gap-2 p-4 text-sm top-12">

            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

            <a href="#" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">
                Pubic Profile
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full">
                Account Settings
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                Notifications
            </a>
            <a href="#"
                className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  ">
                PRO Account
            </a>
        </div>
    </aside>
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4  border-l border-indigo-100">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Bordered avatar"/>

                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Change picture
                            </button>
                            <button type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Delete picture
                            </button>
                        </div>
                    </div>

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            className="mb-2 sm:mb-6">
                           
                                <label for="User Name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700">
                                    User Name</label>
                                <input type="text" id="User Name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="John Doe"  required/>
                        

                           

                        </div>
                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label for="age"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700"> Age</label>
                                <input type="number" id="age"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="28"  required/>
                            </div>

                            <div className="w-full">
                                <label for="email"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-slate-700">Email</label>
                                <input type="email" id="email"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="email"  disabled/>
                            </div>

                        </div>
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
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 ">Calculate BMI</button>
                       
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Edit</button>
                        </div>
   
</div>
                 
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default EditProfile