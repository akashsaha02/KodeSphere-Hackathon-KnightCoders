import MinCard from "./MinCard";

const Card = ({ modalHandler, setHeading, setLogo }) => {
  return (
    <div className="min-h-[20rem]  bg-gray-100 border-transparent shadow-xl rounded-xl">
      <div className="pb-5">
        <h2 className="text-center text-3xl font-semibold pt-10">
          Control Devices
        </h2>
      </div>
      <div className="flex items-center justify-center gap-14">
        <div
          onClick={() => {
            modalHandler();
            setHeading("Control Led");
            setLogo(1);
          }}
        >
          <MinCard text={"Led"} cardNo={1} />
        </div>
        <div
          onClick={() => {
            modalHandler();
            setHeading("Control AC");
            setLogo(2);
          }}
        >
          <MinCard text={"AC"} cardNo={2} />
        </div>
        <div
          onClick={() => {
            modalHandler();
            setHeading("Control Fan");
            setLogo(3);
          }}
        >
          <MinCard text={"Fan"} cardNo={3} />
        </div>
        <div
          onClick={() => {
            modalHandler();
            setHeading("Control Light");
            setLogo(4);
          }}
        >
          <MinCard text={"Light"} cardNo={4} />
        </div>
      </div>
    </div>
  );
};

export default Card;
