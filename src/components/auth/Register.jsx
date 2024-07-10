import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../helpers/config";
import useValidation from "../custom/useValidation";
import main_logo from '../../images/main_logo.png'
import { AuthContext } from "../../context/authContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { accessToken, setAccessToken, setCurrentUser } =
    useContext(AuthContext);
  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setLoading(true);
    const data = { name, email, password };

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
    <div><img className='w-[200px] h-[160px]' src={main_logo} alt="main_logo" />
    </div>
   <div className="flex w-[695px] h-[515px]  flex-col justify-center px-[100px] py-[200px] bg-white rounded-lg">
      <div className="">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1DA1D2]">
          Register For New Account
        </h2>
      </div>

      <div className="mt-10 ">
        <form
          className="space-y-6"
        
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-3 text-gray-900"
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
          
                className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-3 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
id="exampleInputEmail1"
             aria-describedby="emailHelp"
                className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-3 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
id="exampleInputPassword1"
                className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
              />
               {useValidation(errors, "password")}
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
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
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Member ?
          <a
            href="/login"
            className="font-semibold leading-3 text-[#1DA1D2] hover:text-indigo-500"
          >
            Go To Login.
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}
