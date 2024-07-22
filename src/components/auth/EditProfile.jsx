import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import profileimg from "../../images/profile.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const EditProfile = () => {
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editWeight, setEditWeight] = useState("");
  const [editHeight, setEditHeight] = useState("");
  const [editBmi, setEditBmi] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editGender, setEditGender] = useState("");

  const navigate = useNavigate();
  const {
    password,
    setPassword,
    accessToken,
    currentUser,
    bmi,
    setBmi,
    height,
    setHeight,
    weight,
    setWeight,
    image,
    setImage,
    setErrors,
  } = useContext(AuthContext);

  const generateBmi = (e) => {
    e.preventDefault();
  
    const bmi = editWeight / (editHeight * editHeight);
    const finalBmi = Math.ceil(bmi * 10000);
    setEditBmi(finalBmi);
  };
  //  --------
  const storeImageHandler = async (e) => {
    e.preventDefault();
    const dataImg = {
      image: editImage,
    };

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
        dataImg, // Send data as the second argument for PUT request
        {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast.success(response.data.message);
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
  // --------
  const editUserHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: editName,
      BMI: editBmi,
      weight: editWeight,
      height: editHeight,
      // age:editAge,
      // gender:editGender
    };
    console.log(data);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/user/${currentUser.id}/edit`,
        data, // Send data as the second argument for PUT request
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      toast.success(response.data.message);
      navigate(`/`);
      location.reload();
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
  // --------

  console.log(currentUser);

  return (
    <div class="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931] mt-[80px]">
      <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <div class="sticky flex flex-col gap-2 p-4 text-sm  top-12">
          <h2 class="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

          <a
            href="#"
            class="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full"
          >
            User Profile
          </a>
        
        </div>
      </aside>
      <main class="w-full border-l border-indigo-100 px-2  py-1">
        <div class="p-2 md:p-4">
          <div class="w-full px-2 pb-8 mt-3 ">
            <h2 class=" text-3xl font-bold sm:text-3xl">User Profile</h2>

            <div class="grid  mx-auto mt-8">
              <form
                action=""
                onSubmit={(e) => {
                  storeImageHandler(e);
                }}
              >
                <label
                  class="block  text-sm font-medium text-gray-900 "
                  for="file_input"
                >
                  Choose Your Profile Picture
                </label>
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <input
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setEditImage(event.target.files[0]);
                    }}
                    class="px-2 my-2 py-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                  <button
                    type="submit"
                    class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 
py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    ChangeProfile
                  </button>
                </div>
              </form>

              <form action="" onSubmit={(e) => editUserHandler(e)}>
                <div class="items-center mt-2 text-[#202142]">
                  <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div class="w-full">
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="John Doe"
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    </div>

                    <div class="w-full">
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="your.email@mail.com"
                        value={currentUser ? currentUser.email : ""}
                        disabled
                      />
                    </div>
                  </div>
                  <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    {/* -----pass */}
                    <div class="w-full">
                      <label
                        for="height"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        height
                      </label>
                      <input
                        type="number"
                        id="height"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Height (in cm)"
                        onChange={(e) => setEditHeight(e.target.value)}
                      />
                    </div>
                    <div class="w-full">
                      <label
                        for="weight"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        weight
                      </label>
                      <input
                        type="text"
                        id="weight"
                        class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                        placeholder="Weight (in kg)"
                        required
                        onChange={(e) => setEditWeight(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                    <div class="w-full ">
                      <label
                        for="bmi"
                        class="block mb-2 text-sm font-medium text-indigo-900 "
                      >
                        BMI
                      </label>
                      <div class="w-full flex">
                        <input
                          type="number"
                          id="bmi"
                          class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                          placeholder="Click Calculate"
                          value={editBmi ? editBmi : ""}
                          disabled
                        />
                        <button
                          onClick={(e) => generateBmi(e)}
                          type="submit"
                          class="ml-3 text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </div>
               

                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="ml-3 text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;
