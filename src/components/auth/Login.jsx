import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../../helpers/config";
import useValidation from "../custom/useValidation";
import { AuthContext } from "../../context/authContext";
import main_logo from "../../images/main_logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
 
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { accessToken, setAccessToken, setCurrentUser ,password, setPassword} =
    useContext(AuthContext);

  useEffect(() => {
    if (accessToken) navigate("/");
  }, [accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    setLoading(true);
    const data = { email, password };

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, data);
      if (response.data.error) {
        setLoading(false);
        toast.error(response.data.error);
      } else {
        localStorage.setItem(
          "currentToken",
          JSON.stringify(response.data.currentToken)
        );
        setAccessToken(response.data.currentToken);
        setCurrentUser(response.data.user);
        setLoading(false);
        setEmail("");
        setPassword("");
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 422) {
        setErrors(error.response.data.errors);
      }
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-screen auth-transparant-bg flex justify-center items-center flex-col">
      <div>
        <img className="w-[200px] h-[160px]" src={main_logo} alt="main_logo" />
      </div>
      <div className="flex w-[695px] h-[515px]  flex-col justify-center px-[100px] py-[200px] bg-white border-2 border-[#1DA1D2] rounded-lg">
        <div className="">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-[#1DA1D2]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 ">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
                  className="block w-full rounded-md border-0 py-2 outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-3"
                />
                {useValidation(errors, "email")}
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
                className="flex w-full justify-center rounded-md bg-[#1DA1D2] px-3 py-4  text-sm font-semibold leading-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="/register"
              className="font-semibold leading-3 text-[#1DA1D2] hover:text-indigo-500"
            >
              Go To Register.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
