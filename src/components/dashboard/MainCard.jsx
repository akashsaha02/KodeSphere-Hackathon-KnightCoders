import { useState, useEffect } from "react";

import { HiOutlineLightBulb } from "react-icons/hi";
import { TbAirConditioning } from "react-icons/tb";
import { FaFan } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const MainCard = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://kodessphere-api.vercel.app/devices/SCdy54a")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.log(error))
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kodessphere-api.vercel.app/devices/SCdy54a");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const getBackgroundColor = (ledColor) => {
    return { backgroundColor: ledColor };
  };

  return (
    <div className=" p-4 border-transparent rounded-xl py-6">
      <h1 className="text-4xl font-bold mb-5 text-center">Welcome too</h1>
      <h2 className="text-2xl font-bold mb-10 text-center">Knight's Home</h2>

      {/* <div className="flex justify-center items-center gap-4 text-center"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-center">
        <div className="">
          <div className="flex justify-center items-center flex-col h-60 px-10 bg-green-500 rounded-xl">
            <div className="bg-white p-2 rounded-full mb-4">
              <HiOutlineLightBulb size={"4rem"} />
            </div>
            <h1 className="bg-gray-50 font-bold uppercase px-2 py-1 w-full rounded-xl">State : {data.bulb == 0 ? "Off" : "On"}</h1>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center flex-col h-60 px-10 bg-red-500 rounded-xl">
            <div className="bg-white p-2 rounded-full mb-4">
              <TbAirConditioning size={"4rem"} />
            </div>
            <h1 className="bg-gray-50 font-bold uppercase px-2 py-1 w-full rounded-xl mb-2">State : {data.ac?.state === 0 ? "Off" : "On"} </h1>
            <h1 className="bg-gray-50 font-bold uppercase px-2 py-1 w-full rounded-xl">Temp : {data.ac?.temp}</h1>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center flex-col h-60 px-10 bg-blue-600 rounded-xl">
            <div className="bg-white p-2 rounded-full mb-4">
              <FaFan size={"4rem"} />
            </div>
            <h1 className="bg-gray-50 font-bold uppercase px-2 py-1 w-full rounded-xl">Fan Speed : {data.fan} </h1>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center items-center flex-col h-60 px-10 bg-yellow-500 rounded-xl">
            <div className="bg-white p-2 rounded-full mb-4">
              <FaLightbulb size={"4rem"} />
            </div>
            <h1 className="bg-gray-50 font-bold uppercase px-2 py-1 w-full rounded-xl">Color : <span className="text-sm text-red-600 px-2 rounded-full border-green-700 border-2" style={getBackgroundColor(data.led)}>{data.led == '#000000' ? "Off" : "ON"}</span></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
