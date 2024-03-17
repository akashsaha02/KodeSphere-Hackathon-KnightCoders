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
  const [fanSpeed, setFanSpeed] = useState(0);
  const [displaySpeed, setDisplaySpeed] = useState("");
  const [lightVal, setLightVal] = useState(0);

  //LED

  // useEffect(() => {
  //   // Define a function to handle the API call based on the state
  //   const handleApiCall = async () => {
  //     try {
  //       if (ledVal === 1) {
  //         await axios.post("https://kodessphere-api.vercel.app/devices", {
  //           teamid: "SCdy54a",
  //           device: "led",
  //           value: "#ffffff",
  //         });
  //       } else if (ledVal === 0) {
  //         await axios.post("https://kodessphere-api.vercel.app/devices", {
  //           teamid: "SCdy54a",
  //           device: "led",
  //           value: "#000000",
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   handleApiCall();
  // }, [ledVal]);

  //AC
  // useEffect(() => {
  //   const handleAcApiCall = async () => {
  //     try {
  //       await axios.post("https://kodessphere-api.vercel.app/devices", {
  //         teamid: "SCdy54a",
  //         device: "ac",
  //         value: {
  //           temp: parseFloat(acTemp),
  //           state: 1,
  //         },
  //       });
  //       axios.get("https://kodessphere-api.vercel.app/devices").then((res) => {
  //         setDisplayTemp(res.data.ac.temp);
  //       });
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   handleAcApiCall();
  // }, [acTemp]);

  //FAN

  // useEffect(() => {
  //   const handleFanApiCall = async () => {
  //     try {
  //       await axios.post("https://kodessphere-api.vercel.app/devices", {
  //         teamid: "SCdy54a",
  //         device: "fan",
  //         value: parseFloat(fanSpeed),
  //       });
  //       axios.get("https://kodessphere-api.vercel.app/devices").then((res) => {
  //         setDisplaySpeed(res.data.fan.speed);
  //       });
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   handleFanApiCall();
  // }, [fanSpeed]);

  //LIGHT

  useEffect(() => {
    // Define a function to handle the API call based on the state
    const handleBulbApiCall = async () => {
      try {
        if (ledVal === 1) {
          await axios.post("https://kodessphere-api.vercel.app/devices", {
            teamid: "SCdy54a",
            device: "bulb",
            value: parseFloat(lightVal),
          });
        } else if (ledVal === 0) {
          await axios.post("https://kodessphere-api.vercel.app/devices", {
            teamid: "SCdy54a",
            device: "bulb",
            value: parseFloat(lightVal),
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleBulbApiCall();
  }, [lightVal]);

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
              <div className="flex items-center gap-5 ">
                <div
                  className="py-3 px-8 rounded-xl bg-blue-500 cursor-pointer"
                  onClick={() => {
                    setLedVal(1);
                  }}
                >
                  ON
                </div>
                <div
                  className="py-3 px-8 rounded-xl bg-yellow-300 cursor-pointer"
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
              <div className="flex justify-center items-center bg-slate-600 rounded-xl">
                <div className="py-4 px-6 text-white font-semibold text-2xl">
                  {displaySpeed ? displaySpeed : fanSpeed}
                </div>
              </div>

              <div className="flex flex-col items-center pt-5">
                <div>
                  <label className="block mb-2 text-lg font-medium text-gray-900 ">
                    Control Fan Speed
                  </label>
                </div>
                <div>
                  <input
                    id="default-range"
                    type="range"
                    min="0"
                    max="5"
                    value={fanSpeed}
                    onChange={(e) => setFanSpeed(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="Light">
              <div className="flex items-center gap-5 ">
                <div
                  className="py-3 px-8 rounded-xl bg-blue-500 cursor-pointer"
                  onClick={() => {
                    setLightVal(1);
                  }}
                >
                  ON
                </div>
                <div
                  className="py-3 px-8 rounded-xl bg-yellow-300 cursor-pointer"
                  onClick={() => {
                    setLightVal(0);
                  }}
                >
                  OFF
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
