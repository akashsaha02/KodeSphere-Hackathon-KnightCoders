import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbAirConditioning } from "react-icons/tb";
import { FaFan } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

export const Modal = ({ modalHandler, heading, logo }) => {
  const [ledVal, setLedVal] = useState(0);
  const [acTemp, setAcTemp] = useState(23);
  const [displayTemp, setDisplayTemp] = useState("");

  useEffect(() => {
    // Define a function to handle the API call based on the state
    const handleApiCall = async () => {
      try {
        if (ledVal === 1) {
          await axios.post("https://kodessphere-api.vercel.app/devices", {
            teamid: "SCdy54a",
            device: "led",
            value: "#ffffff",
          });
        } else if (ledVal === 0) {
          await axios.post("https://kodessphere-api.vercel.app/devices", {
            teamid: "SCdy54a",
            device: "led",
            value: "#000000",
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleApiCall();
  }, [ledVal]); // Watch for changes in 'val'

  useEffect(() => {
    const handleAcApiCall = async () => {
      try {
        await axios.post("https://kodessphere-api.vercel.app/devices", {
          teamid: "SCdy54a",
          device: "ac",
          value: {
            temp: parseFloat(acTemp),
            state: 1,
          },
        });
        axios.get("https://kodessphere-api.vercel.app/devices").then((res) => {
          setDisplayTemp(res.data.ac.temp);
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleAcApiCall();
  }, [acTemp]);

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
      <div className=" gap-3 flex flex-col">
        <button onClick={modalHandler} className="place-self-end">
          <IoCloseSharp size={"3.5rem"} />
        </button>

        <div className="min-h-[40rem] min-w-[60rem] bg-gray-100 border-transparent rounded-[5rem] shadow-2xl flex flex-col items-center">
          <div>
            <h2 className="text-3xl font-semibold pt-10">{heading}</h2>
          </div>

          <div className="bg h-24 w-24 rounded-full bg-amber-400 flex items-center justify-center mt-10 mb-6">
            <div>
              <button className=" ">
                {logo === 1 ? (
                  <HiOutlineLightBulb size={"4rem"} />
                ) : logo === 2 ? (
                  <TbAirConditioning size={"4rem"} />
                ) : logo === 3 ? (
                  <FaLightbulb size={"4rem"} />
                ) : (
                  <FaLightbulb size={"4rem"} />
                )}
              </button>
            </div>
          </div>

          {logo === 1 ? (
            <div className="Led">
              <div>
                <div
                  className="p-4 bg-blue-500 cursor-pointer"
                  onClick={() => {
                    setLedVal(1);
                  }}
                >
                  ON
                </div>
                <div
                  className="p-4 bg-red-500 cursor-pointer"
                  onClick={() => {
                    setLedVal(0);
                  }}
                >
                  OFF
                </div>
              </div>
            </div>
          ) : logo === 2 ? (
            <div className="Ac">
              <div className="flex justify-center items-center bg-slate-600 rounded-xl">
                <div className="py-4 px-6 text-white font-semibold text-2xl">
                  {displayTemp ? displayTemp : acTemp}
                </div>
              </div>

              <div className="flex flex-col items-center pt-5">
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900 ">
                    Control Temperature
                  </label>
                </div>
                <div>
                  <input
                    id="default-range"
                    type="range"
                    min="16"
                    max="30"
                    value={acTemp}
                    onChange={(e) => setAcTemp(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ) : logo === 3 ? (
            <div className="Fan">
              <div className="pt-5">
                <input
                  type="number"
                  placeholder="Fan speed"
                  className="p-3 rounded-xl border-transparent shadow-md"
                />
              </div>

              <div className="pt-5">
                <input
                  type="text"
                  placeholder="Enter receiver userid"
                  className="p-3 rounded-xl border-transparent shadow-md"
                />
              </div>

              <div className="pt-5">
                <button className="bg-blue-400 hover:bg-blue-600 hover:text-white px-8 p-3 rounded-xl shadow-md text-xl">
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="AC">
              <div className="pt-5">
                <input
                  type="number"
                  placeholder="AC"
                  className="p-3 rounded-xl border-transparent shadow-md"
                />
              </div>

              <div className="pt-5">
                <input
                  type="text"
                  placeholder="Enter receiver userid"
                  className="p-3 rounded-xl border-transparent shadow-md"
                />
              </div>

              <div className="pt-5">
                <button className="bg-blue-400 hover:bg-blue-600 hover:text-white px-8 p-3 rounded-xl shadow-md text-xl">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
