import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { BASE_URL, getConfig } from '../../helpers/config'
import { toast } from 'react-toastify'
import axios from 'axios'
import main_logo from '../../images/main_logo.png'
export default function Header() {
    const navigate=useNavigate();
    const { accessToken, setAccessToken, currentUser, setCurrentUser} = useContext(AuthContext)

    const logoutUser = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/user/logout`, null, getConfig(accessToken))
            localStorage.removeItem('currentToken')
            setCurrentUser(null)
            setAccessToken('')
            toast.success(response.data.message)
            // navigate("/");
            
        } catch (error) {
            if (error?.response?.status === 401) {
                localStorage.removeItem('currentToken')
                setCurrentUser(null)
                setAccessToken('')
            }
            console.log(error)
        }
    }

    return (
        <div className='relative'>
        <nav className="fixed w-full top-0 z-[1] my-transparant-bg  text-[16px] font-opensans  text-white px-[70px]">
            <div className="flex justify-between items-center w-full">
                <Link className="" path="/">
                <img className='w-[90px] h-[90px]' src={main_logo} alt="main_logo" />
                </Link>
                <button className="" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="" id="navbarSupportedContent">
                    <ul className="flex justify-center items-center p-2">
                        <li className="px-3 py-2">
                            <Link className="hover:text-[#1DA1D2] text-xl" aria-current="page" to="/">
                                 HOME
                            </Link>
                        </li>
                        <li className="px-3 py-2">
                            <Link className="hover:text-[#1DA1D2] text-xl" aria-current="page" to="/">
                                ABOUT US
                            </Link>
                        </li>
                        <li className="px-3 py-2">
                            <Link className="hover:text-[#1DA1D2] text-xl" aria-current="page" to="/guide">
                           FITNESS & NUTRITION
                            </Link>
                        </li>
                        <li className="px-3 py-2">
                            <Link className="hover:text-[#1DA1D2] text-xl" aria-current="page" to="/">
                                 CONTACT US
                            </Link>
                        </li>
                        {
                            currentUser ?
                            <>
                              
                                <li className="px-3 py-2">
                                    <button className="text-lg font-bold hover:text-[#1DA1D2]" onClick={() => logoutUser()}>
                                        Logout
                                    </button>
                                </li>
                                <li className="px-3 py-2">
                                    <Link className="text-[#1DA1D2] text-xl font-bold hover:text-white" to="#">
                                    
                                       { currentUser?.name }
                                    </Link>
                                </li>
                            </>
                            :
                            <>

<li className="px-3 py-2">
                                    <Link className="btn btn-primary rounded-3xl bg-blue-600 px-6 py-2" to="/login">
                                       Join Now
                                    </Link>
                                </li>

                               
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
        </div>
    )
}
