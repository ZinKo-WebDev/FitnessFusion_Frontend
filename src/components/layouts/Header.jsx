import React, { useContext, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { BASE_URL, getConfig } from "../../helpers/config";
import { toast } from "react-toastify";
import axios from "axios";
import main_logo from "../../images/main_logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const {avata,setAvata, accessToken, setAccessToken, currentUser, setCurrentUser } =
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
      navigate("/");
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem("currentToken");
        setCurrentUser(null);
        setAccessToken("");
      }
      console.log(error);
    }
  };
  const avataHandler=()=>{
setAvata(!avata)
  }
  const goProfileHandler=(e) => {
    navigate('/user/:id/profile/edit')
  }
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
                  to="#aboutPage"
                >
                  ABOUT US
                </NavLink>
              </li>
          {
            currentUser?.subscription_id
            ?   <li className="px-3 py-2">
            <NavLink
              className="hover:text-[#1DA1D2] text-xl"
              aria-current="page"
              to={`/user/${currentUser.id}/guide`}
            >
              FITNESS & NUTRITION
            </NavLink>
          </li>:''
          }
            
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
                  {/* <li className="px-3 py-2">
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
                  </li> */}
                  {/* drop down start   */}
                  <div className="px-3 text-xl" >
                    <img
                    onClick={(e) => avataHandler(e)}
                      alt="tania andrew"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                      className="relative inline-block h-[65px] w-[65px] cursor-pointer rounded-full border-2 border-[#1DA1D2] object-cover object-center"
                      data-popover-target="profile-menu"
                    />
                    <ul
                      role="menu"
                      data-popover="profile-menu"
                      data-popover-placement="bottom"
                      className={avata?"absolute z-10 min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none top-[70px] right-[10px] flex":"absolute z-10 min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none top-[70px] right-[10px] hidden"}
                    >
                      <button
                      onClick={(e) => goProfileHandler(e)}
                      
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6"
                        >
                          <path
                           
                          
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <p className="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          {currentUser?.name}
                        </p>
                      </button>
                     
                     
                   
                      <hr
                        className="my-2 border-blue-gray-50"
                      
                        role="menuitem"
                      />
                      <button
                        onClick={() => logoutUser()}
                      
                        role="menuitem"
                        className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-6 w-6"
                        >
                          <path
                           
                          
                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                          ></path>
                        </svg>
                        <p className="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          Sign Out
                        </p>
                      </button>
                    </ul>

                   
                  </div>
                  {/* drop down end  */}
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
