import React from 'react'
import img_02 from "../images/img_02.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div  className=" relative w-full text-[16px] justify-center items-center bg-[#323232] text-white font-bebas">
    <div className="w-full text-[16px] text-center py-[65px]">
      <h1 className=" text-[70px]">
        Why <span className="text-[#1DA1D2]">Choose Us</span>{" "}
      </h1>
      <p className="font-poppin">
        if you do not have authority you can’t expect
      </p>
    </div>
    <div>
      <div className="w-full flex p-12 flex-wrap gap-5 ">
        <div className="border border-[#1DA1D2] w-[49%] p-5">
          <h2 className="mb-3 text-[38px]">01</h2>
          <h4 className="text-[#1DA1D2] font-bold  tracking-wider">
            Mobile Team
          </h4>
          <p className="font-poppin">
            We bring our trainers, workout technology and equipment to you,
            making every workout private, customized and convenient
          </p>
        </div>
        <div className="border border-[#1DA1D2] w-[49%] p-5">
          <h2 className="mb-3 text-[38px]">02</h2>
          <h4 className="text-[#1DA1D2] font-bold  tracking-wider">
            Bespoke Experience
          </h4>
          <p className="font-poppin">
            We make every workout fun, goal-oriented and customized for your
            age, fitness level, health condition, or group size
          </p>
        </div>
        <div className="border border-[#1DA1D2] w-[49%] p-5">
          <h2 className="mb-3 text-[38px]">03</h2>
          <h4 className="text-[#1DA1D2] font-bold  tracking-wider">
            Advanced Technology
          </h4>
          <p className="font-poppin">
            We enable you to experience fitness and health results that go
            beyond the scale and mirror with our 3D body visualization
            technology
          </p>
        </div>
        <div className="border border-[#1DA1D2] w-[49%] p-5">
          <h2 className="mb-3 text-[38px]">04</h2>
          <h4 className="text-[#1DA1D2] font-bold  tracking-wider">
            Satisfaction Guaranteed
          </h4>
          <p className="font-poppin">
            Our gyms offer personalized training sessions with certified
            personal trainers who create customized workout plans based on
            individual goals
          </p>
        </div>
      </div>
      <div className="flex w-full p-12">
        <div className="w-[50%]">
          <h1 className="text-[70px] font-bold  tracking-wider">
            We have a lot of
          </h1>
          <h1 className="text-[70px] font-bold tracking-wider text-[#1DA1D2]">
            experience
          </h1>
          <div className="w-[590px] py-10 font-poppin">
            <p className="">
              We bring our trainers, workout technology and equipment to
              you, making every workout private, customized and
              convenient.We bring our trainers, workout technology and
              equipment to you, making every workout private, customized and
              convenient.We bring our trainers, workout technology and
              equipment to you, making every workout private, customized and
              convenient
            </p>
            <br />
            <p className="">
              We bring our trainers, workout technology and equipment to
              you, making every workout private, customized and
              convenient.We bring our trainers, workout technology and
              equipment to you, t
            </p>
          </div>
          <div>
            <Link
              to="https://play.google.com/store/apps?hl=en_US&pli=1"
              className="btn btn-primary rounded-md outline outline-blue-600 px-6 py-1 font-bebas text-[35px] font-bold text-[#1DA1D2]"
            >
              ABOUT US
            </Link>
          </div>
        </div>

        <div className="relative w-[50%] flex justify-center items-center">
          <div className=" ">
            <img
              className="w-[430px] rounded-md"
              src={img_02}
              alt="img_02"
            />
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default About