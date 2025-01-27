import React, { useContext, useState } from "react";
import {  NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import {Link} from 'react-scroll'
import { BASE_URL, getConfig } from "../../helpers/config";
import { toast } from "react-toastify";
import axios from "axios";
import main_logo from "../../images/main_logo.png";
import profile from "../../images/profile.jpg";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import { CgProfile } from "react-icons/cg";
import { RiSettings5Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

export default function Header() {


  const location = useLocation();
  const navigate = useNavigate();
 
  const {
    subscriptionPlans,
    weight,userSubscriptionId,avata,setAvata, accessToken, setAccessToken, currentUser, setCurrentUser } =
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
    navigate(`/user/${currentUser.id}/profile/edit`)
  }
 
  // console.log(currentUser)
  return (
    <div className="relative uppercase tracking-wide">
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
                  className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
                  aria-current="page"
                  to="/"
                  
                >
                  HOME
                </NavLink>
              </li>

              <li className="px-3 py-2">
              <NavLink
                  className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
                  aria-current="page"
                  to="/about"
                  
                >
                  About
                </NavLink>
              </li>
          {
            currentUser?.subscription_id 
            ?   <li className="px-3 py-2">
            <NavLink
              className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
              aria-current="page"
              to={`/user/${currentUser.id}/week`}
            >
              FITNESS & NUTRITION
            </NavLink>
          </li>:
          <li className="px-3 py-2">
          <NavLink
            className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
            aria-current="page"
            to={`/user/subscriptions`}
          >
            Join Our Team
          </NavLink>
        </li>
          }
            
            {
            currentUser?.subscription_id 
            ? 
              <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
                  aria-current="page"
                  to="/user/:id/activity"
                 
             
                >
                 Activitiy
                </NavLink>
              </li>:""
}
              <li className="px-3 py-2">
              <NavLink
                  className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
                  aria-current="page"
                  to="/trainer"
                  
                >
                  Trainers
                </NavLink>
              </li>
              {
                userSubscriptionId? <li className="px-3 py-2">
                <NavLink
                  className="hover:text-[#1DA1D2] text-xl cursor-pointer active:border-b-2 active:border-[#1DA1D2] focus:border-b-2 focus:border-blue-500 "
                  aria-current="page"
                  to="/user/subscriptions"
                  
                >
                  HOME
                </NavLink>
              </li>:""
              }
              
              
           
              {currentUser ? (
                <>
                 
                  <TEDropdown className="flex justify-center px-3 ">
    <TERipple rippleColor="light">
      <TEDropdownToggle className=" rounded-full flex items-center whitespace-nowrap  bg-primary  text-xs font-medium uppercase leading-normal text-white ">
       <img src={!currentUser.image ?profile: "http://localhost:8000/"+currentUser.image} alt="profileImg" className="w-16 h-16 rounded-full"/>
      
      </TEDropdownToggle>
    </TERipple>

    <TEDropdownMenu >
      <TEDropdownItem>
        <button
           onClick={(e) => goProfileHandler(e)}
        href="#" className=" flex items-center justify-start text-xl w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2  text-left font-normal pointer-events-auto text-slate-950 hover:bg-neutral-100 active:text-slate-950 active:bg-neutral-100 focus:bg-neutral-100 focus:text-slate-950 focus:outline-none active:no-underline dark:text-slate-900 dark:hover:bg-blue-600 dark:focus:bg-blue-600 dark:active:bg-blue-600 tracking-wide">
        <span className="px-2"> <CgProfile /></span>{currentUser.name}
        </button>
      </TEDropdownItem>
     
      <TEDropdownItem>
        <button
         onClick={() => logoutUser()}
        href="#" className=" flex items-center justify-start text-xl w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2  text-left font-normal pointer-events-auto text-slate-950 hover:bg-neutral-100 active:text-slate-950 active:bg-neutral-100 focus:bg-neutral-100 focus:text-slate-950 focus:outline-none active:no-underline dark:text-slate-900 dark:hover:bg-blue-600 dark:focus:bg-blue-600 dark:active:bg-blue-600 tracking-wide">
        <span className="px-2"><TbLogout /></span>LogOut
        </button>
      </TEDropdownItem>
    </TEDropdownMenu>
  </TEDropdown>
                  
             
                  {/* drop down end  */}
                </>
              ) : (
                <>
                  <li className="px-3 py-2">
                    <NavLink
                      className="btn btn-primary rounded-2xl bg-blue-600 px-9 py-3"
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
