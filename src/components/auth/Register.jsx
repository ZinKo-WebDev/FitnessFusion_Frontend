import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../helpers/config";
import useValidation from "../custom/useValidation";
import main_logo from "../../images/main_logo.png";
import { AuthContext } from "../../context/authContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [statusConfirm, setStatusConfirm] = useState();
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { accessToken, setAccessToken, setCurrentUser,password, setPassword } =
    useContext(AuthContext);

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken]);

  const handleSubmit = async (e) => {
    let confirmedPassword;
    if (password == passwordConfirm) {
      confirmedPassword = password;
    } else {
      confirmedPassword = "";
      setStatusConfirm(false);
    }
    e.preventDefault();
    setErrors(null);
    setLoading(true);
    const data = { name, email, password: confirmedPassword, age };

    try {
      const response = await axios.post(`${BASE_URL}/user/register`, data);

      localStorage.setItem(
        "currentToken",
        JSON.stringify(response.data.currentToken)
      );

      setAccessToken(response.data.currentToken);
      setCurrentUser(response.data.user);
      setLoading(false);
      setName(response.data.name);
      setEmail("");
      setPassword("");
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 422) {
        setErrors(error.response.data.errors);
      }
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen auth-transparant-bg flex justify-center items-center flex-col">
      <div className="">
        <div className="w-[695px] flex justify-center  ">
          <img
            className="w-[200px] h-[160px]"
            src={main_logo}
            alt="main_logo"
          />
        </div>
        <div className="flex w-[695px] h-[650px]   flex-col justify-center px-[100px] py-[100px] bg-white rounded-lg">
          <div className="">
            <h2 className="mb-3 text-center text-2xl font-bold leading-9 tracking-tight text-[#1DA1D2]">
              Register For New Account
            </h2>
          </div>

          <div className="mt-10 ">
            <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-3 text-gray-900"
                >
                  UserName
                </label>
                <div className="mt-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    type="text"
                    className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset text-lg ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-3"
                  />
                  {useValidation(errors, "name") ? (
                    <span className="text-red-500 capitalize">
                      UserName Field Require.
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-3 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset text-lg ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-3"
                  />
                  {/* {useValidation(errors, "email") ? (
                    <span className="text-red-500 capitalize">
                      Email Field Require.
                    </span>
                  ) : (
                    ""
                  )} */}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-3 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="exampleInputPassword1"
                    className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset text-lg ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-3"
                  />

                  {useValidation(errors, "password") ? (
                    <span className="text-red-500 capitalize">
                      Password Field Require.
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-lg font-medium leading-3 text-gray-900"
                >
                  Password Confirmation
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    id="exampleInputPassword_confirmation1"
                    className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset text-lg ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-3"
                  />
                  {statusConfirm == false ? (
                    <span className="text-red-500 capitalize">
                      Password Do Not Match.
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
             

             

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#1DA1D2] px-3  text-sm font-semibold leading-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 py-4"
                >
                  Register
                </button>
              </div>
              <p className="mt-10  text-center text-md text-gray-700 tracking-wide font-bold">
                Member?
                <a
                  href="/login"
                  className="font-semibold leading-3 text-[#1DA1D2] hover:text-indigo-500 px-2"
                >
                  Go To Login.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
