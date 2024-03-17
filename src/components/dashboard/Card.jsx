import MinCard from "./MinCard";

const Card = ({ modalHandler, setHeading, setLogo }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 p-5 mt-10 ml-8 bg-gray-100 border-transparent shadow-xl rounded-xl">
      <div
        onClick={() => {
          modalHandler();
          setHeading("Fan");
          setLogo(1);
        }}
      >
        <MinCard text={"Led"} cardNo={1} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Bulb");
          setLogo(2);
        }}
      >
        <MinCard text={"AC"} cardNo={2} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Fan");
          setLogo(3);
        }}
      >
        <MinCard text={"Fan"} cardNo={3} />
      </div>
      <div
        onClick={() => {
          modalHandler();
          setHeading("Light");
          setLogo(4);
        }}
      >
        <MinCard text={"Light"} cardNo={4} />
      </div>
    </div>
  );
};

export default Card;
