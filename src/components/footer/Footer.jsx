import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import main_logo from '../../images/main_logo.png'

const Footer = () => {
  return (
    

<div id='contactus' className=" bg-[#001821] text-white px-12 py-10">
<div className="flex mt-[100px] pt-[100px] pb-[80px] ">
        <div className="w-[66.66%]  ">
            <p className="font-poppin text-[#1DA1D2] text-xl">Join a Newsletter</p>
            <form action="" className="w-full">
                <label htmlFor="" className="text-slate-400 mt-2 text-lg">Your Email</label>
                <div className="w-full mt-2">
                    <input type="text" className="px-2 py-2 w-[350px] rounded-md border-1 border-[#1DA1D2] outline-none text-slate-700" />
                    <button className="bg-[#1DA1D2] ml-2 px-6 py-2  rounded-md" type="submit">Sucscribe</button>
                </div>
            </form>
        </div>
        <div className="w-[33.33%] flex flex-col justify-end ">
            <div className="">
                <div className="flex">
                    <FaTwitter className='mx-[8px] w-[40px] h-[40px] text-white bg-[#1DA1D2] p-2 rounded-full'/>
                    <FaFacebookF className='mx-[8px] w-[40px] h-[40px] text-white bg-[#1DA1D2] p-2 rounded-full'/>
                    <FaInstagram className='mx-[8px] w-[40px] h-[40px] text-white bg-[#1DA1D2] p-2 rounded-full'/>
                </div>
            </div>
        </div>
    </div>

    <div className="w-full h-[2px] bg-[#1DA1D2] my-5"></div>
    <div className="flex">
        <div className="w-[33.33%] flex justify-start items-center">
        <img className='w-[100px] h-[82px]' src={main_logo} alt="main_logo" />
        </div>
        <div className="w-[66.66%] flex justify-around items-center">
            <div className=" flex justify-center items-center"><MdOutlineLocationOn className='mx-2 text-[#1DA1D2] text-2xl'/>Los Angeles, CA</div>
            <div className=" flex justify-center items-center"><MdOutlineMailOutline className='mx-2 text-[#1DA1D2] text-2xl'/>Info@XLevelFitness.com</div>
            <div className=" flex justify-center items-center"><FaPhoneAlt className='mx-2 text-[#1DA1D2] text-2xl'/>+1(323) 833-4436</div>
        </div>
    </div>
</div>


  )
}

export default Footer