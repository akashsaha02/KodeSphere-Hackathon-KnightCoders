import MinCard from "./MinCard";

const Card = ({ modalHandler, setHeading, setLogo }) => {
  return (
    <div className="min-h-[20rem] flex items-center justify-center gap-14 bg-gray-100 border-transparent shadow-xl rounded-xl">
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
  );
};

export default Card;
