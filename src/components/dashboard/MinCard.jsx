import { HiOutlineLightBulb } from "react-icons/hi";
import { TbAirConditioning } from "react-icons/tb";
import { FaFan } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const MinCard = ({ text, cardNo }) => {
  return (
    <div
      // onClick={modalHandler}
      className="py-10 px-20 cursor-pointer rounded-xl border-transparent shadow-md m-3"
    >
      <div className="flex justify-center">
        <div>
          {cardNo === 1 ? (
            <div className="bg-green-500 h-14 w-14 rounded-full flex items-center justify-center">
              <HiOutlineLightBulb size={"36px"} />
            </div>
          ) : cardNo === 2 ? (
            <div className="bg-red-500 h-14 w-14 rounded-full flex items-center justify-center">
              <TbAirConditioning size={"36px"} />
            </div>
          ) : cardNo === 3 ? (
            <div className="bg-blue-500 h-14 w-14 rounded-full flex items-center justify-center">
              <FaFan size={"36px"} />
            </div>
          ) : (
            <div className="bg-yellow-500 h-14 w-14 rounded-full flex items-center justify-center">
              <FaLightbulb size={"36px"} />
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <div className="text-xl font-semibold">{text}</div>
      </div>
    </div>
  );
};

export default MinCard;
