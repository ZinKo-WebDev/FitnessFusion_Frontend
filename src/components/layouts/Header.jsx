import React, { useContext } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { BASE_URL, getConfig } from "../../helpers/config";
import { toast } from "react-toastify";
import axios from "axios";
import main_logo from "../../images/main_logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { accessToken, setAccessToken, currentUser, setCurrentUser } =
    useContext(AuthContext);

  const logoutUser = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/logout`,
        null,
        getConfig(accessToken)
      );
      localStorage.removeItem("currentToken");
      setCurrentUser(null);
      setAccessToken("");
      toast.success(response.data.message);
      // navigate("/");
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("currentToken");
        setCurrentUser(null);
        setAccessToken("");
      }
      console.log(error);
    }
  };
// console.log(currentUser)
  return (
    <div className="relative ">
      <nav
        className={
          location.pathname == "/login" || location.pathname == "/register"
            ? "hidden fixed w-full top-0 z-[1] my-transparant-bg  text-[16px] font-opensans  text-white px-[70px] "
            : "fixed w-full top-0 z-[1] my-transparant-bg  text-[16px] font-opensans  text-white px-[70px]"
        }
      >
        <div className="flex justify-between items-center w-full">
          <NavLink className="" path="/">
            <img
              className="w-[90px] h-[90px]"
              src={main_logo}
              alt="main_logo"
            />
          </NavLink>
          <button
            className=""
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarSupportedContent">
            <ul className="flex justify-center items-center p-2">
              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              
              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl"
                  aria-current="page"
                  to="/"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl"
                  aria-current="page"
                  to="/guide"
                >
                  FITNESS & NUTRITION
                </NavLink>
              </li>
              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl"
                  aria-current="page"
                  to="/"
                >
                  CONTACT US
                </NavLink>
              </li>
              {currentUser ? (
                <>
                  <li className="px-3 py-2">
                    <button
                      className="text-lg font-bold hover:text-[#1DA1D2]"
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </button>
                  </li>
                  <li className="px-3 py-2">
                    <NavLink
                      className="text-[#1DA1D2] text-xl font-bold hover:text-white"
                      to="#"
                    >
                      {currentUser?.name}
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="px-3 py-2">
                    <NavLink
                      className="btn btn-primary rounded-3xl bg-blue-600 px-6 py-2"
                      to="/login"
                    >
                      Join Now
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
