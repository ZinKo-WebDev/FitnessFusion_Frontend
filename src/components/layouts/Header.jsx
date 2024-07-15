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
  const [avata,setAvata]=useState(false)
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
  const avataHandler=()=>{
setAvata(!avata)
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

              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl"
                  aria-current="page"
                  to="/user/guide"
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
                      class="relative inline-block h-[65px] w-[65px] cursor-pointer rounded-full border-2 border-[#1DA1D2] object-cover object-center"
                      data-popover-target="profile-menu"
                    />
                    <ul
                      role="menu"
                      data-popover="profile-menu"
                      data-popover-placement="bottom"
                      class={avata?"absolute z-10 min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none top-[70px] right-[10px] flex":"absolute z-10 min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none top-[70px] right-[10px] hidden"}
                    >
                      <button
                        tabIndex="-1"
                        role="menuitem"
                        class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <p class="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          {currentUser?.name}
                        </p>
                      </button>
                      <button
                        tabIndex="-1"
                        role="menuitem"
                        class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <p class="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          Edit Profile
                        </p>
                      </button>
                      <button
                        tabIndex="-1"
                        role="menuitem"
                        class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                          ></path>
                        </svg>
                        <p class="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          Inbox
                        </p>
                      </button>
                      <button
                        tabIndex="-1"
                        role="menuitem"
                        class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                          ></path>
                        </svg>
                        <p class="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
                          Help
                        </p>
                      </button>
                      <hr
                        class="my-2 border-blue-gray-50"
                        tabindex="-1"
                        role="menuitem"
                      />
                      <button
                        onClick={() => logoutUser()}
                        tabIndex="-1"
                        role="menuitem"
                        class="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                          ></path>
                        </svg>
                        <p class="block font-sans text-xl font-bold leading-normal text-inherit antialiased">
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
