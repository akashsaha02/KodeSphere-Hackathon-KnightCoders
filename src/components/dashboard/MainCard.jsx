const MainCard = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 shadow-2xl border-transparent rounded-[6rem] py-6">
      <div className="text-xl font-semibold">Cards</div>

      <div className="flex justify-center">
        <div className="p-7 pr-16 border-r-2">
          {/* <img src={creditCard} alt="credit-card" className="w-[30rem]" /> */}
        </div>
        <div>Main Card elements</div>
      </div>
    </div>
  );
};

export default MainCard;
