import React from "react";

const CalculateBMI = () => {
  //preview img function
  let loadFile = function (event) {
    let input = event.target;
    let file = input.files[0];
    let type = file.type;

    let output = document.getElementById("preview_img");

    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="p-12 flex justify-center items-center mt-[100px]">
      <div className="p-12 flex justify-center items-center">
        <div className="">
          <h1 className="text-[90px] font-bebas">
            CALCULATE YOUR <span className="text-[#1DA1D2]">BMI</span>
          </h1>

          <div className="flex ">
            <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[170px]"></div>
            <div className="h-[2px] bg-[#1DA1D2] mt-[-10px] mr-10 w-[70px]"></div>
          </div>

          <form action="" className="">
            <div class="flex items-center space-x-6 my-3">
              <div class="shrink-0">
                <img
                  id="preview_img"
                  class="h-20 w-20 object-cover rounded-full"
                  src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Current profile photo"
                />
              </div>
              <label class="block">
                <span class="sr-only">Choose profile photo</span>
                <input
                  onchange={(event) => loadFile(event)}
                  type="file"
                  class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                />
              </label>
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Height
              </label>
              <br />
              <input
                className="mt-2 border-2 mr-5 border-slate-500 px-3 py-2"
                type="number"
                name="feet"
                id=""
                placeholder="FT"
              />
              <input
                className="border-2 mr-5 border-slate-500 px-3 py-2"
                type="number"
                name="inch"
                id=""
                placeholder="IN"
              />
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Weight
              </label>
              <br />
              <input
                className="mt-2 border-2 border-slate-500 px-3 py-2 w-[450px]"
                type="number"
                name="weight"
                id=""
                placeholder="LBS"
              />
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Age
              </label>
              <br />
              <input
                className="mt-2 border-2 border-slate-500 px-3 py-2 w-[450px]"
                type="number"
                name="weight"
                id=""
                placeholder="YR"
              />
            </div>
            <div className="py-2">
              <label className="font-poppin font-bold py-5" htmlFor="">
                Gender
              </label>
              <br />
              <div class="inline-flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="html"
                >
                  <input
                    name="type"
                    type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 "
                    id="html"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-md text-lg text-gray-700 cursor-pointer select-none"
                  htmlFor="html"
                >
                  Male
                </label>
              </div>
              <div class="inline-flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="react"
                >
                  <input
                    name="type"
                    type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="react"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-md text-lg text-gray-700 cursor-pointer select-none"
                  htmlFor="react"
                >
                  Female
                </label>
              </div>
              <div class="inline-flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="react"
                >
                  <input
                    name="type"
                    type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="react"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-md text-lg text-gray-700 cursor-pointer select-none"
                  htmlFor="react"
                >
                  Other
                </label>
              </div>
            </div>
            <button
              className="text-white bg-[#1DA1D2] px-7 py-2 mt-2"
              type="submit"
            >
              Calculate
            </button>
          </form>
        </div>
        <div className=" flex justify-center p-12">
          <div className="">
            <table className="w-[800px] border-collapse h-full ">
              <thead>
                <tr className="">
                  <th className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    BMI
                  </th>
                  <th className="py-5 text-center  border-b-2 border-b-slate-500">
                    WEIGHT STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    Below 18.5
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Underweight
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    18.5 - 24.9
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Healthy
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 border-b-2 border-b-slate-500">
                    25.0 - 29.9
                  </td>
                  <td className="py-5 text-center  border-b-2 border-b-slate-500">
                    Overweight
                  </td>
                </tr>
                <tr className="">
                  <td className="py-5 text-center border-r-2 border-r-slate-500 ">
                    30.0 - and above
                  </td>
                  <td className="py-5 text-center  ">Obese</td>
                </tr>
              </tbody>
            </table>

            <p className="text-center py-5">
              <span className="font-bold">BMI</span> metabolic rate /{" "}
              <span className="font-bold">BMI</span> body mass index
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculateBMI;
